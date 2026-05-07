"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, LogIn, Loader2, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    const sessionRes = await fetch("/api/auth/session");
    const session = await sessionRes.json();

    if (session?.user?.role?.toLowerCase() === "admin") {
      router.push("/admin");
    } else if (session?.user?.isActive) {
      router.push("/dashboard");
    } else if (!session?.user?.hasPaid) {
      router.push("/register?step=2");
    } else {
      router.push("/pending");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
        <div className="h-20 bg-orange-600 rounded-b-[2.5rem]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-9 w-16 h-16 rounded-full bg-white border border-orange-100 shadow flex items-center justify-center text-orange-600">
          <LogIn size={26} />
        </div>
            <div className="pt-14 px-6 pb-6">
              <div className="text-center mb-5">
                <p className="text-xs uppercase tracking-widest text-slate-500">Sign In</p>
                <h1 className="text-lg font-semibold text-slate-900">Welcome Back</h1>
                <p className="text-xs text-slate-500 mt-1">
                  &ldquo;ज्ञानं परमं बलम्&rdquo; — Knowledge is supreme strength
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-xs font-semibold tracking-wide text-slate-600 uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none bg-slate-50 border border-slate-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-xs font-semibold tracking-wide text-slate-600 uppercase mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPass ? "text" : "password"}
                      required
                      value={form.password}
                      onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none bg-slate-50 border border-slate-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-colors pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-600 transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {error && (
                  <div className="rounded-lg px-4 py-3 text-sm font-semibold text-red-700 bg-red-50 border border-red-100">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  id="login-submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold tracking-wide transition-all bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white cursor-pointer disabled:cursor-not-allowed shadow-md active:scale-95"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
                  {loading ? "Signing in…" : "Sign In"}
                </button>
              </form>

              <p className="text-center text-slate-600 text-xs font-medium mt-5">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </div>
    </div>
  );
}
