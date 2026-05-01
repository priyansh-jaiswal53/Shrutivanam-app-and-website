"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Lock, Loader2, GraduationCap, CheckCircle, ArrowLeft } from "lucide-react";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Invalid reset link. Please request a new one.");
    }
  }, [token]);

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none bg-slate-50 border border-slate-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-colors";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!token) {
      setError("Invalid reset link. Please request a new one.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password: form.password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/login"), 3000);
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
            Create a new password.
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            Choose a strong password that you don&apos;t use elsewhere. Your account
            security is our priority.
          </p>
          <div className="relative max-w-sm">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Secure Password</p>
                  <p className="text-xs text-slate-500">Min. 6 characters required.</p>
                </div>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-2/3 bg-orange-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — card */}
        <div className="order-1 lg:order-2">
          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
            <div className="h-20 bg-orange-600 rounded-b-[2.5rem]" />
            <div className="absolute left-1/2 -translate-x-1/2 top-9 w-16 h-16 rounded-full bg-white border border-orange-100 shadow flex items-center justify-center text-orange-600">
              <Lock size={26} />
            </div>

            <div className="pt-14 px-6 pb-6">
              <div className="text-center mb-6">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  New Password
                </p>
                <h2 className="text-lg font-semibold text-slate-900">
                  Set New Password
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  &ldquo;ज्ञानं परमं बलम्&rdquo; — Knowledge is supreme strength
                </p>
              </div>

              {success ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-orange-100">
                    <CheckCircle size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    Password Reset Successful!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Your password has been updated. Redirecting you to the login
                    page in a moment…
                  </p>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Go to Login →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="new-password"
                      className="block text-xs font-semibold tracking-wide text-slate-600 uppercase mb-2"
                    >
                      New Password *
                    </label>
                    <div className="relative">
                      <input
                        id="new-password"
                        type={showPass ? "text" : "password"}
                        required
                        value={form.password}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, password: e.target.value }))
                        }
                        placeholder="Min 6 characters"
                        className={`${inputClass} pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass((p) => !p)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-600 transition-colors"
                        aria-label="Toggle password visibility"
                      >
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-xs font-semibold tracking-wide text-slate-600 uppercase mb-2"
                    >
                      Confirm Password *
                    </label>
                    <input
                      id="confirm-password"
                      type={showPass ? "text" : "password"}
                      required
                      value={form.confirmPassword}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          confirmPassword: e.target.value,
                        }))
                      }
                      placeholder="Re-enter password"
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
                    id="reset-password-submit"
                    disabled={loading || !token}
                    className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold tracking-wide mt-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Lock size={16} />
                    )}
                    {loading ? "Updating…" : "Reset Password"}
                  </button>
                </form>
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

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50">
          <Loader2 size={32} className="animate-spin text-orange-500" />
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
