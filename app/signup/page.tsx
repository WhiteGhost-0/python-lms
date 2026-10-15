"use client";

import React, { useState } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import {
  GoogleIcon,
  IconUser,
  IconAt,
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
} from "@/components/ui/icons";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Client-side authentication handler (to be wired with Clerk server SDK)
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start your structured study in Python and Generative AI."
      backHref="/"
      backLabel="Return Home"
      footerPrompt="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/login"
    >
      {/* Social Sign Up (Google) */}
      <div>
        <Button
          type="button"
          variant="paper-secondary"
          leftIcon={<GoogleIcon className="h-4 w-4 shrink-0" />}
          className="w-full !rounded-xl py-2.5 text-xs font-semibold text-neutral-800"
        >
          Continue with Google
        </Button>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-2xs uppercase">
          <span className="bg-surface px-3 text-subtle font-mono tracking-wider">
            or register with credentials
          </span>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-neutral-800 mb-1.5"
          >
            Full name
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              <IconUser size={16} aria-hidden="true" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ada Lovelace"
              className="block w-full rounded-xl border border-border bg-surface-secondary/40 py-2.5 pl-9 pr-3 text-xs text-foreground placeholder:text-subtle focus:bg-surface focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 transition-all duration-150"
            />
          </div>
        </div>

        {/* Username */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="username"
              className="block text-xs font-semibold text-neutral-800"
            >
              Username
            </label>
            <span className="text-2xs text-subtle font-mono">Public handle</span>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              <IconAt size={16} aria-hidden="true" />
            </div>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              pattern="^[a-zA-Z0-9_-]{3,20}$"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              placeholder="adalovelace"
              className="block w-full rounded-xl border border-border bg-surface-secondary/40 py-2.5 pl-9 pr-3 text-xs text-foreground placeholder:text-subtle focus:bg-surface focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 transition-all duration-150"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-neutral-800 mb-1.5"
          >
            Email address
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              <IconMail size={16} aria-hidden="true" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ada@example.com"
              className="block w-full rounded-xl border border-border bg-surface-secondary/40 py-2.5 pl-9 pr-3 text-xs text-foreground placeholder:text-subtle focus:bg-surface focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 transition-all duration-150"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-neutral-800"
            >
              Password
            </label>
            <span className="text-2xs text-subtle">Min. 8 characters</span>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              <IconLock size={16} aria-hidden="true" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="block w-full rounded-xl border border-border bg-surface-secondary/40 py-2.5 pl-9 pr-10 text-xs text-foreground placeholder:text-subtle focus:bg-surface focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 transition-all duration-150"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-r-xl transition-colors"
            >
              {showPassword ? (
                <IconEyeOff size={16} aria-hidden="true" />
              ) : (
                <IconEye size={16} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Primary Action Button */}
        <Button
          type="submit"
          variant="radial-sky"
          size="md"
          disabled={isLoading}
          className="w-full !rounded-xl mt-2 py-2.5 text-xs font-semibold"
        >
          {isLoading ? "Creating account..." : "Create Learner Account"}
        </Button>
      </form>
    </AuthCard>
  );
}
