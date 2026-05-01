import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = RegisterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, password } = parsed.data;

    await connectDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "student",
      paymentStatus: "pending",
      isActive: false,
    });

    // Send welcome email to student
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: email,
      subject: "Welcome to Shrutivanam — Registration Received",
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #FF7F32; margin-bottom: 10px;">🙏 Namaste, ${name}!</h2>
          <p style="color: #444; line-height: 1.5;">Your registration at <strong>Shrutivanam</strong> has been received.</p>
          <div style="margin: 20px 0; padding: 15px; background-color: #FFF7ED; border-left: 4px solid #FF7F32;">
            <p style="margin: 0; font-weight: bold; color: #FF7F32;">Next Step: Payment</p>
            <p style="margin: 5px 0 0; font-size: 14px; color: #666;">Please complete your payment using the QR code on the website. Your account will be activated within 24 hours of confirmation.</p>
          </div>
          <p style="font-size: 12px; color: #999;">Ancient Wisdom, Modern Learning</p>
        </div>
      `,
    });

    // Notify admin
    if (process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "onboarding@resend.dev",
        to: process.env.ADMIN_EMAIL,
        subject: `New Registration: ${name} is awaiting payment approval`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Student Registration</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Status:</strong> Payment Pending</p>
            <a href="${process.env.NEXTAUTH_URL}/admin/users" style="background: #C9A84C; color: #0d0b1e; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 16px;">Review in Admin Panel</a>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { message: "Registration successful", userId: user._id.toString() },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
