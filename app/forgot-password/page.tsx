"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { IconMail, IconCircleCheck, IconArrowLeft } from "@/components/ui/icons";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleResend = () => {
    setResendStatus("Link resent!");
    setTimeout(() => {
      setResendStatus(null);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <AuthCard
        title="Check Your Inbox"
        subtitle="We've sent recovery instructions to help you access your account."
        backHref="/login"
        backLabel="Back to Sign In"
        footerPrompt="Remember your password?"
        footerLinkText="Sign in"
        footerLinkHref="/login"
      >
        <div className="space-y-4">
          <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4 text-xs text-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-sky-800 font-semibold">
              <IconCircleCheck size={18} className="shrink-0" aria-hidden="true" />
              <span>Recovery link dispatched</span>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              We sent a password reset link to{" "}
              <strong className="font-mono text-neutral-900">{email}</strong>.
              If an account exists under this email, you will receive instructions shortly.
            </p>
          </div>

          <div className="pt-2 space-y-2">
            <Button
              type="button"
              variant="paper-secondary"
              onClick={handleResend}
              className="w-full !rounded-xl py-2.5 text-xs font-semibold"
            >
              {resendStatus || "Resend recovery email"}
            </Button>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setResendStatus(null);
              }}
              className="w-full py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md"
            >
              Try another email address
            </button>
          </div>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Reset Password"
      subtitle="Enter the email associated with your account and we'll send you a recovery link."
      backHref="/login"
      backLabel="Back to Sign In"
      footerPrompt="Remember your password?"
      footerLinkText="Sign in"
      footerLinkHref="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="reset-email"
            className="block text-xs font-semibold text-neutral-800 mb-1.5"
          >
            Account email address
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              <IconMail size={16} aria-hidden="true" />
            </div>
            <input
              id="reset-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="learner@istmx.dev"
              className="block w-full rounded-xl border border-border bg-surface-secondary/40 py-2.5 pl-9 pr-3 text-xs text-foreground placeholder:text-subtle focus:bg-surface focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 transition-all duration-150"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="radial-sky"
          size="md"
          disabled={isLoading}
          className="w-full !rounded-xl mt-2 py-2.5 text-xs font-semibold"
        >
          {isLoading ? "Sending link..." : "Send Recovery Link"}
        </Button>

        <div className="text-center pt-2">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-sky-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md py-1 px-2"
          >
            <IconArrowLeft size={14} aria-hidden="true" />
            <span>Return to Sign In</span>
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}
