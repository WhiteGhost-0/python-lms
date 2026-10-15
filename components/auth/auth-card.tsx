import React from "react";
import Link from "next/link";
import { IconArrowLeft } from "@/components/ui/icons";

interface AuthCardProps {
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
  footerPrompt?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export function AuthCard({
  title,
  subtitle,
  backHref = "/",
  backLabel = "Return Home",
  children,
  footerPrompt,
  footerLinkText,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle Sky Canopy Atmospheric Backdrop */}
      <div className="hero-top-sky-glow opacity-50" aria-hidden="true" />

      {/* Top Header Navigation */}
      <header className="relative z-10 mx-auto w-full max-w-5xl flex items-center justify-between pb-2 sm:pb-4">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-sky-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md py-1.5 px-2.5 -ml-2"
        >
          <IconArrowLeft size={16} aria-hidden="true" />
          <span>{backLabel}</span>
        </Link>
      </header>

      {/* Main Split Layout: Minimal Editorial Brand Panel (Left) & Auth Form (Right) */}
      <main className="relative z-10 mx-auto w-full max-w-5xl my-auto py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Panel: Oversized, Hollow Typography with Exact Button Radial Sky Gradient */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:py-12 select-none">
            <h1 className="sr-only">istmX Learn</h1>
            <svg
              viewBox="0 0 460 215"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg select-none overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* Same radial gradient as .btn-radial-sky: Sky 400 apex -> Sky 600 -> Sky 700 -> Sky 800 -> Sky 900 base */}
                <radialGradient
                  id="btnRadialSkyStroke"
                  cx="50%"
                  cy="0%"
                  r="135%"
                  fx="50%"
                  fy="0%"
                >
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="25%" stopColor="#0284c7" />
                  <stop offset="55%" stopColor="#0369a1" />
                  <stop offset="80%" stopColor="#075985" />
                  <stop offset="100%" stopColor="#0c4a6e" />
                </radialGradient>
                <filter id="subtleBtnShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0369a1" floodOpacity="0.25" />
                </filter>
              </defs>
              <text
                x="0"
                y="90"
                fill="transparent"
                stroke="url(#btnRadialSkyStroke)"
                strokeWidth="2.75"
                strokeLinejoin="round"
                filter="url(#subtleBtnShadow)"
                className="font-display font-black text-7xl sm:text-8xl tracking-tighter"
                style={{ fontFamily: "var(--font-schibsted-grotesk), sans-serif" }}
              >
                istmX
              </text>
              <text
                x="0"
                y="195"
                fill="transparent"
                stroke="url(#btnRadialSkyStroke)"
                strokeWidth="2.75"
                strokeLinejoin="round"
                filter="url(#subtleBtnShadow)"
                className="font-display font-black text-7xl sm:text-8xl tracking-tighter"
                style={{ fontFamily: "var(--font-schibsted-grotesk), sans-serif" }}
              >
                Learn
              </text>
            </svg>
          </div>

          {/* Right Panel: Functional Auth Card with Radial Sky Watermark on the Right Side */}
          <div className="lg:col-span-6 flex flex-col justify-center w-full max-w-md mx-auto lg:mx-0 lg:ml-auto relative">
            {/* Ambient Watermark matching button radial sky gradient */}
            <div
              className="absolute -top-12 -right-4 sm:-right-8 lg:-right-12 font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-none select-none pointer-events-none text-transparent bg-clip-text bg-[radial-gradient(135%_135%_at_50%_0%,rgba(2,132,199,0.12)_0%,rgba(3,105,161,0.08)_42%,rgba(7,89,133,0.04)_72%,transparent_100%)]"
              aria-hidden="true"
            >
              istmX Learn
            </div>

            <div className="relative z-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="text-center">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <div className="mt-6">
                {children}
              </div>

              {footerPrompt && footerLinkText && footerLinkHref && (
                <div className="mt-6 pt-5 border-t border-border/80 text-center text-xs text-muted">
                  <span>{footerPrompt} </span>
                  <Link
                    href={footerLinkHref}
                    className="font-semibold text-sky-700 hover:text-sky-900 underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
                  >
                    {footerLinkText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Spacer for vertical balance */}
      <div className="h-4 sm:h-6" aria-hidden="true" />
    </div>
  );
}
