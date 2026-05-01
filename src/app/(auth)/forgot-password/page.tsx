"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Loader2, GraduationCap, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none bg-slate-50 border border-slate-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-colors";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left panel */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-sm">
              <Image
                src="/shrutivanam.logo.png"
                alt="Shrutivanam logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <Image
                src="/shrutivanam.txt.png"
                alt="Shrutivanam"
                width={150}
                height={40}
                className="h-8 w-auto object-contain mb-1"
              />
              <p className="text-xs text-slate-500">Ancient Wisdom, Modern Learning</p>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Forgot your password?
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            No worries — it happens to the best of us. Enter your registered email
            and we&apos;ll send you a secure link to reset your password.
          </p>
          <div className="relative max-w-sm">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Secure Reset</p>
                  <p className="text-xs text-slate-500">Link expires in 1 hour.</p>
                </div>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-1/3 bg-orange-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — card */}
        <div className="order-1 lg:order-2">
          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
            <div className="h-20 bg-orange-600 rounded-b-[2.5rem]" />
            <div className="absolute left-1/2 -translate-x-1/2 top-9 w-16 h-16 rounded-full bg-white border border-orange-100 shadow flex items-center justify-center text-orange-600">
              <Mail size={26} />
            </div>

            <div className="pt-14 px-6 pb-6">
              <div className="text-center mb-6">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Password Reset
                </p>
                <h2 className="text-lg font-semibold text-slate-900">
                  Reset Your Password
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  &ldquo;ज्ञानं परमं बलम्&rdquo; — Knowledge is supreme strength
                </p>
              </div>

              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="forgot-email"
                      className="block text-xs font-semibold tracking-wide text-slate-600 uppercase mb-2"
                    >
                      Registered Email
                    </label>
                    <input
                      id="forgot-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  {error && (
                    <div className="rounded-xl px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    id="forgot-password-submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold tracking-wide mt-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Mail size={16} />
                    )}
                    {loading ? "Sending…" : "Send Reset Link"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-orange-100">
                    <CheckCircle size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    Check your inbox!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    If{" "}
                    <strong className="text-orange-700">{email}</strong> is
                    registered with us, you&apos;ll receive a password reset link
                    shortly. The link will expire in <strong>1 hour</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    Didn&apos;t receive it? Check your spam folder or{" "}
                    <button
                      onClick={() => setSent(false)}
                      className="text-orange-600 hover:text-orange-700 font-semibold underline"
                    >
                      try again
                    </button>
                    .
                  </p>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-slate-100 flex justify-center">
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-orange-600 transition-colors font-medium"
                >
                  <ArrowLeft size={13} />
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
