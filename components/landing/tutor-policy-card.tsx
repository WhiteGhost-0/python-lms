import { ShieldCheckIcon } from "@/components/ui/icons";

const tutorBehaviors = [
  {
    activity: "Reading a Lesson",
    behavior: "Provides clarifying analogies and explains tricky terminology using the curriculum's definitions.",
    allowed: true,
  },
  {
    activity: "Visualizations & Traces",
    behavior: "Breaks down memory addresses, variable state mutation, and call-stack unwinding step by step.",
    allowed: true,
  },
  {
    activity: "Small Practice Checks",
    behavior: "Offers progressive reasoning hints. Guides you to find syntax and logic bugs yourself.",
    allowed: true,
  },
  {
    activity: "Restricted DSA & Assessments",
    behavior: "Zero solution generation. Blocks attempts to bypass problem constraints or copy-paste code.",
    allowed: false,
  },
];

export function TutorPolicyCard() {
  return (
    <section id="tutor-policy" className="border-b border-border py-16 sm:py-20 relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            Server-Enforced Ethics
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The AI Tutor Help Charter
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            The AI tutor is a contextual reasoning partner, not an automated homework generator.
            Our policies are enforced on the server—not just through prompt suggestions.
          </p>
        </div>

        {/* Policy Grid / Matrix */}
        <div className="mt-12 rounded-lg border border-border bg-surface overflow-hidden">
          {/* Smooth sky gradient header line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700" aria-hidden="true" />

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorBehaviors.map((item) => (
                <div
                  key={item.activity}
                  className="rounded-md border border-border/80 bg-surface-secondary/40 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-display font-semibold text-sm text-foreground">
                        {item.activity}
                      </span>
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded border ${
                          item.allowed
                            ? "border-success/30 bg-success/10 text-success"
                            : "border-warning/30 bg-warning/10 text-warning"
                        }`}
                      >
                        {item.allowed ? "Guided Reasoning" : "Restricted / No Solutions"}
                      </span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed mt-2">
                      {item.behavior}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-2 text-xs font-mono text-subtle">
                    <ShieldCheckIcon size={14} className="text-primary shrink-0" />
                    <span>Server-side rule enforcement</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quota & Independent Learning Guarantee */}
            <div className="mt-8 rounded-md border border-border bg-surface p-5">
              <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                Guaranteed Access Without AI
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Every lesson, diagram, and practice problem is designed to be fully solvable without an AI assistant.
                When your daily AI usage allowance is exhausted, full access to all curriculum lessons, worked examples,
                and self-practice remains completely open and uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
