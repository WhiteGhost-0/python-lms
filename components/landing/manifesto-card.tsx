import React from "react";
import { CheckIcon } from "@/components/ui/icons";

const principles = [
  {
    title: "Understanding Over Gamification",
    description:
      "We reject streaks, XP bars, quests, and cosmetic badges. The only genuine reward is deep technical comprehension and the ability to write robust software independently.",
  },
  {
    title: "Text & Visuals Stand Alone",
    description:
      "AI is an optional learning support, never a prerequisite. Every lesson contains thorough prose, diagrams, and concrete worked examples that need no external assistance.",
  },
  {
    title: "Truthful Product Reality",
    description:
      "No fabricated student counts, fake review ratings, or artificial success metrics. What you see is the direct, unvarnished curriculum and engineering architecture.",
  },
  {
    title: "Tactile Editorial Design",
    description:
      "Built on our Paper & Graphite design system. High typographic contrast, warm tactile light surfaces, layered charcoal dark surfaces, and zero emojis in product UI.",
  },
];

export function ManifestoCard() {
  return (
    <section id="principles" className="border-b border-border py-16 sm:py-20 relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            Product Philosophy
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What We Intentionally Omit
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Modern online learning is cluttered with dopamine traps, video transcripts, and AI answer generators.
            Here is our explicit contract with serious learners.
          </p>
        </div>

        {/* 2-Column Editorial Principles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-border bg-surface p-6 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckIcon size={12} />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
