import { ExternalLinkIcon } from "@/components/ui/icons";

interface ModuleInfo {
  slug: string;
  name: string;
  focus: string;
}

const foundationModules: ModuleInfo[] = [
  { slug: "00-Python", name: "Python Architecture", focus: "Interpreter lifecycle & runtime execution" },
  { slug: "01-basics", name: "Syntax & Variables", focus: "Identifiers, assignment, memory references" },
  { slug: "02-datatypes", name: "Type System", focus: "Primitives, mutability, type coercion" },
  { slug: "03-operators", name: "Operators & Expressions", focus: "Arithmetic, bitwise, precedence rules" },
  { slug: "04-conditions", name: "Conditional Branching", focus: "Boolean logic, short-circuit evaluation" },
  { slug: "05-match-case", name: "Pattern Matching", focus: "Structural match-case syntax (Python 3.10+)" },
  { slug: "06-loops", name: "Iteration & Loops", focus: "For, while, break/continue, loop invariants" },
  { slug: "07-mini-ai-assistant", name: "Logic-Based Assistant", focus: "Deterministic rule-based agent project" },
];

const advancedModules: ModuleInfo[] = [
  { slug: "08-functions", name: "Functions & Scope", focus: "Parameters, return values, call stack" },
  { slug: "09-lambda-functions", name: "Anonymous Lambdas", focus: "Inline functional expressions" },
  { slug: "10-python-scope", name: "LEGB Scope Rules", focus: "Local, enclosing, global, built-in resolution" },
  { slug: "11-recursion", name: "Recursion & Trees", focus: "Base cases, call stack unwinding" },
  { slug: "12-comprehensions", name: "Comprehensions", focus: "List, dict, set comprehension idioms" },
  { slug: "13-functional-programming", name: "Functional Paradigms", focus: "Map, filter, reduce, immutability" },
  { slug: "14-object-oriented-programming", name: "OOP Architecture", focus: "Classes, dunder methods, inheritance" },
  { slug: "15-modules-and-packages", name: "Module System", focus: "Imports, sys.path, package namespaces" },
  { slug: "16-exception-handling", name: "Exception Handling", focus: "Try/except/finally, custom exceptions" },
  { slug: "17-file-handling", name: "File I/O Streams", focus: "Context managers, buffer safety" },
  { slug: "18-iterators-and-generators", name: "Generators & Yield", focus: "Memory efficiency, iterator protocol" },
  { slug: "19-builtin-functions", name: "Python Built-ins", focus: "Standard library core primitives" },
  { slug: "20-final-capstone-project", name: "Comprehensive Capstone", focus: "Multi-module Python system implementation" },
];

const genaiModules: ModuleInfo[] = [
  { slug: "01-Introduction-To-GenAi", name: "GenAI Foundations", focus: "Probability distribution & token sampling" },
  { slug: "02-understanding-llms", name: "LLM Mechanics", focus: "Attention mechanisms, context windows, embeddings" },
  { slug: "projects/gemini-assistant", name: "Gemini Integration", focus: "API integration, structured outputs, prompt engineering" },
];

export function CurriculumPreview() {
  return (
    <section id="curriculum" className="border-b border-border py-16 sm:py-20 relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Curriculum Authority
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Direct from the istmX Python Source
            </h2>
            <p className="mt-2 text-base text-muted max-w-2xl leading-relaxed">
              Every lesson, slug, and code example originates from our open curriculum repository.
              No synthetic AI-generated filler courses.
            </p>
          </div>
          <a
            href="https://github.com/istmX/Python"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1"
          >
            <span>View Upstream Repo</span>
            <ExternalLinkIcon size={14} />
          </a>
        </div>

        {/* Structured Editorial Curriculum Index with Repeating Gradient Header Accents */}
        <div className="mt-12 space-y-12">
          {/* Foundation Track */}
          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-secondary/50 px-6 py-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-primary font-semibold">Track A</span>
                <h3 className="font-display font-semibold text-base text-foreground">
                  Python Foundations (00 to 07)
                </h3>
              </div>
              <span className="font-mono text-xs text-muted">8 Modules</span>
            </div>
            <div className="divide-y divide-border">
              {foundationModules.map((mod) => (
                <div
                  key={mod.slug}
                  className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted w-24 sm:w-28 shrink-0">
                      {mod.slug}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {mod.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted sm:text-right font-mono">
                    {mod.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Python Track */}
          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-secondary/50 px-6 py-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-primary font-semibold">Track B</span>
                <h3 className="font-display font-semibold text-base text-foreground">
                  Advanced Engineering & Capstone (08 to 20)
                </h3>
              </div>
              <span className="font-mono text-xs text-muted">13 Modules</span>
            </div>
            <div className="divide-y divide-border">
              {advancedModules.map((mod) => (
                <div
                  key={mod.slug}
                  className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted w-24 sm:w-28 shrink-0">
                      {mod.slug}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {mod.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted sm:text-right font-mono">
                    {mod.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* GenAI Track */}
          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-secondary/50 px-6 py-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-primary font-semibold">Track C</span>
                <h3 className="font-display font-semibold text-base text-foreground">
                  Generative AI & LLM Systems (GENAI)
                </h3>
              </div>
              <span className="font-mono text-xs text-muted">Core Foundation & Projects</span>
            </div>
            <div className="divide-y divide-border">
              {genaiModules.map((mod) => (
                <div
                  key={mod.slug}
                  className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted w-24 sm:w-28 shrink-0">
                      {mod.slug}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {mod.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted sm:text-right font-mono">
                    {mod.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
