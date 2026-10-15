import { Button } from "@/components/ui/button";
import { IconCompass, IconArrowRight, IconLogin } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative min-h-[82vh] sm:min-h-[88vh] flex flex-col justify-center items-center overflow-hidden border-b border-border bg-background px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* 
        Full-Width Clean Curved Arc Backdrop:
        - Moved higher up with an expanded, majestic dome scale
        - Top atmospheric sky blue canopy in bg-sky-700 (#0369a1)
        - Seamless sky-700 blue beneath the floating navbar (zero white spots)
        - Radiant sun warmth wash filling the body of the arc dome
        - Fades smoothly to clean light neutral canvas at the base
      */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* 1. Top Sky-700 Blue Atmospheric Glow (Bathing the entire top behind navbar) */}
        <div className="hero-top-sky-glow" />

        {/* 2. Radiant Full-Width Sun Glow Washing Across the Arc Dome */}
        <div className="hero-sun-glow" />

        {/* 3. Full-Width Clean Curved Arc SVG (Raised apex, expanded scale, sky-700 canopy) */}
        <svg
          className="absolute top-0 left-0 w-full h-[680px] pointer-events-none"
          viewBox="0 0 1920 680"
          preserveAspectRatio="xMidYMin slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Upper Sky Canopy in bg-sky-700 (#0369a1) */}
            <linearGradient id="topSkyCanopy" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.55" />
              <stop offset="25%" stopColor="#0369a1" stopOpacity="0.40" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.06" />
            </linearGradient>

            {/* Sun Effect Gradient Filling the Full Arc Dome (Centered in mid-dome, avoiding pale spot under navbar) */}
            <radialGradient id="fullArcSunBackground" cx="50%" cy="26%" r="76%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.48" />
              <stop offset="22%" stopColor="#fde047" stopOpacity="0.32" />
              <stop offset="46%" stopColor="#fed7aa" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.08" />
              <stop offset="90%" stopColor="#f8fafc" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </radialGradient>

            {/* Soft luminous rim along the arc crest */}
            <linearGradient id="arcCrestRim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0" />
              <stop offset="25%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#fef08a" stopOpacity="0.65" />
              <stop offset="75%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Upper Sky Blue Canopy in bg-sky-700 Above Arc */}
          <path
            d="M -150,0 L 2070,0 L 2070,680 C 1570,18 350,18 -150,680 Z"
            fill="url(#topSkyCanopy)"
          />

          {/* FULL ARC DOME FILLED WITH SUN BACKGROUND COLOR */}
          <path
            d="M -150,680 C 350,18 1570,18 2070,680 L 2070,680 L -150,680 Z"
            fill="url(#fullArcSunBackground)"
          />

          {/* Soft Luminous Rim Stroke outlining the Arched Horizon */}
          <path
            d="M -150,680 C 350,18 1570,18 2070,680"
            stroke="url(#arcCrestRim)"
            strokeWidth="1.8"
          />
        </svg>
      </div>

      {/* Hero Headline and Action Buttons */}
      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08] max-w-3xl drop-shadow-2xs">
          Master programming through structured prose and visual models.
        </h1>

        {/* CTA Buttons: Explore with Sky 600-900 Radial Gradient and Login */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Button
            href="#curriculum"
            variant="radial-sky"
            size="lg"
            leftIcon={
              <IconCompass size={18} className="text-sky-100 transition-transform duration-200 group-hover:rotate-45" aria-hidden="true" />
            }
            rightIcon={
              <IconArrowRight size={16} className="text-sky-200 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            }
            className="w-full sm:w-auto"
          >
            Explore Curriculum
          </Button>

          <Button
            href="/login"
            variant="paper-secondary"
            size="lg"
            leftIcon={
              <IconLogin size={17} className="text-neutral-500 group-hover:text-sky-700 transition-colors" aria-hidden="true" />
            }
            className="w-full sm:w-auto"
          >
            Learner Log In
          </Button>
        </div>
      </div>
    </section>
  );
}

