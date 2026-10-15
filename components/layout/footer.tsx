import Link from "next/link";
import { ExternalLinkIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-12 transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Brand & Mission */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-bold text-foreground">istmX</span>
              <span className="font-mono text-xs uppercase px-1.5 py-0.5 rounded border border-border bg-surface text-muted">
                Learn
              </span>
            </div>
            <p className="mt-3 text-xs text-muted leading-relaxed">
              A visual-first, text-based learning platform for Python and Generative AI.
              Built on cognitive mental models, structured prose, and server-enforced Socratic guidance.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-subtle font-mono">
              <span>Upstream authority:</span>
              <a
                href="https://github.com/istmX/Python"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <span>istmX/Python</span>
                <ExternalLinkIcon size={12} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-8 text-xs font-medium text-muted">
            <div className="flex flex-col gap-2">
              <span className="font-mono uppercase text-foreground font-semibold tracking-wider">
                Platform
              </span>
              <Link href="#curriculum" className="hover:text-foreground transition-colors">
                Python Core
              </Link>
              <Link href="#curriculum" className="hover:text-foreground transition-colors">
                GenAI Track
              </Link>
              <Link href="#pedagogy" className="hover:text-foreground transition-colors">
                Methodology
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono uppercase text-foreground font-semibold tracking-wider">
                Governance
              </span>
              <Link href="#tutor-policy" className="hover:text-foreground transition-colors">
                AI Tutor Charter
              </Link>
              <Link href="#principles" className="hover:text-foreground transition-colors">
                Anti-Gamification
              </Link>
              <a
                href="https://github.com/istmX/Python/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <span>License</span>
                <ExternalLinkIcon size={10} />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono uppercase text-foreground font-semibold tracking-wider">
                Standards
              </span>
              <span className="text-subtle font-mono">WCAG 2.2 AA</span>
              <span className="text-subtle font-mono">Paper & Graphite v1.1</span>
              <span className="text-subtle font-mono">Next.js App Router</span>
            </div>
          </div>
        </div>

        {/* Bottom subtle hairline and copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-subtle">
          <div>© 2026 istmX Learn. Dedicated to deep comprehension.</div>
          <div>All lessons derived from github.com/istmX/Python.</div>
        </div>
      </div>
    </footer>
  );
}
