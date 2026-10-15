import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconBook2,
  IconCompass,
  IconShieldCheck,
  IconBrain,
  IconLogin,
} from "@/components/ui/icons";

export function Navbar() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center w-full px-3 sm:px-4 pointer-events-none">
        <header className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full border border-sky-200/90 bg-white/85 backdrop-blur-xl px-2.5 sm:px-3.5 py-1.5 shadow-[0_6px_24px_-4px_rgba(3,105,161,0.16)] transition-all duration-200 hover:border-sky-300 hover:shadow-[0_8px_30px_-4px_rgba(3,105,161,0.22)]">
          {/* Brand Mark Icon */}
          <Link
            href="/"
            aria-label="istmX Learn Home"
            className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-sky-100 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-full"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-white font-display font-bold text-xs shadow-xs ring-1 ring-sky-600/30">
              iX
            </div>
            <span className="hidden sm:inline font-display text-sm font-bold tracking-tight text-neutral-900">
              istmX
            </span>
          </Link>

          {/* Centered Navigation Links with Icons */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-0.5 sm:gap-1 text-xs font-medium text-neutral-700"
          >
            <Link
              href="#curriculum"
              title="Curriculum Overview"
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full hover:text-sky-900 hover:bg-sky-100/70 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <IconBook2 size={16} className="text-sky-700 shrink-0" aria-hidden="true" />
              <span>Curriculum</span>
            </Link>
            <Link
              href="#pedagogy"
              title="Pedagogical Methodology"
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full hover:text-sky-900 hover:bg-sky-100/70 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <IconCompass size={16} className="text-sky-700 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Method</span>
            </Link>
            <Link
              href="#tutor-policy"
              title="AI Tutor Charter"
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full hover:text-sky-900 hover:bg-sky-100/70 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <IconShieldCheck size={16} className="text-sky-700 shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">Charter</span>
            </Link>
            <Link
              href="#principles"
              title="Core Principles"
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full hover:text-sky-900 hover:bg-sky-100/70 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <IconBrain size={16} className="text-sky-700 shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">Principles</span>
            </Link>
          </nav>

          {/* Quick Access Log In Action */}
          <div className="h-4 w-px bg-sky-200/80 mx-0.5 sm:mx-1" aria-hidden="true" />
          <Button
            href="/login"
            variant="radial-sky"
            size="sm"
            leftIcon={<IconLogin size={14} className="text-sky-100 shrink-0" aria-hidden="true" />}
            aria-label="Learner Log In"
          >
            Log In
          </Button>
        </header>
      </div>
    </>
  );
}
