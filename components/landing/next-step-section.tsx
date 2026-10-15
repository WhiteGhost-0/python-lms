import React from "react";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconBrandGithub,
  IconCheck,
} from "@/components/ui/icons";

export function NextStepSection() {
  return (
    <section className="border-t border-border py-16 sm:py-24 bg-surface/40 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Learning Invitation & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold">
              YOUR NEXT STEP
            </div>
            <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
              Understand the fundamentals. Build beyond them.
            </h2>
            <p className="mt-3.5 text-base text-muted leading-relaxed">
              Start with Python, understand how things work, and follow the path into Generative AI—one concept at a time.
            </p>

            {/* Platform Highlights */}
            <ul className="mt-6 space-y-2.5 text-xs text-neutral-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-700 shrink-0">
                  <IconCheck size={11} strokeWidth={3} aria-hidden="true" />
                </span>
                <span>21 structured modules derived from canonical Python topics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-700 shrink-0">
                  <IconCheck size={11} strokeWidth={3} aria-hidden="true" />
                </span>
                <span>Visual models for memory references, recursion, and token flows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-700 shrink-0">
                  <IconCheck size={11} strokeWidth={3} aria-hidden="true" />
                </span>
                <span>Socratic AI tutor with strict server-enforced guidance policies</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href="#curriculum"
                variant="radial-sky"
                size="md"
                rightIcon={<IconArrowRight size={15} aria-hidden="true" />}
              >
                Explore curriculum
              </Button>
              <Button
                href="https://github.com/istmX/Python"
                external
                variant="paper-secondary"
                size="md"
                leftIcon={<IconBrandGithub size={16} aria-hidden="true" />}
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Right Column: Compact Visual Lesson Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 sm:p-6 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.25)] flex flex-col justify-between select-none">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="ml-1 text-xs font-mono text-slate-300">references_and_mutation.py</span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                  Concept Preview
                </span>
              </div>

              {/* Code snippet */}
              <div className="font-mono text-xs leading-relaxed space-y-1 text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                <div>
                  <span className="text-slate-500"># 1. Allocate list in heap memory</span>
                </div>
                <div>
                  <span className="text-sky-300 font-semibold">a</span> = <span className="text-amber-300">[1, 2, 3]</span>
                </div>
                <div className="pt-1">
                  <span className="text-slate-500"># 2. Copy reference pointer (not the list data)</span>
                </div>
                <div>
                  <span className="text-sky-300 font-semibold">b</span> = <span className="text-sky-300">a</span>
                </div>
                <div className="pt-1">
                  <span className="text-slate-500"># 3. Mutate through reference b</span>
                </div>
                <div className="text-emerald-400 font-medium">
                  <span className="text-sky-300">b</span>.append(<span className="text-amber-300">4</span>)
                </div>
              </div>

              {/* Visual Diagram: Pointer Aliasing */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Memory Pointer Model
                </div>
                <div className="grid grid-cols-12 items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-2xs">
                  <div className="col-span-4 space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sky-300 font-bold">var a</span>
                      <span className="text-slate-500">──▶</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sky-300 font-bold">var b</span>
                      <span className="text-slate-500">──▶</span>
                    </div>
                  </div>
                  <div className="col-span-8 flex flex-col justify-center pl-2 border-l border-slate-700">
                    <div className="text-amber-200 font-bold">[1, 2, 3, 4]</div>
                    <div className="text-[10px] text-slate-400">Heap address: 0x7ffd9a10</div>
                  </div>
                </div>
              </div>

              {/* Concise pedagogical explanation */}
              <div className="mt-3.5 text-2xs text-slate-400 leading-relaxed bg-slate-800/30 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-200 font-medium">Why it matters: </span>
                In Python, assignment copies the object reference rather than duplicating data. Because both <code className="text-sky-300">a</code> and <code className="text-sky-300">b</code> point to the same list in heap memory, appending an element via <code className="text-sky-300">b</code> immediately changes what is read through <code className="text-sky-300">a</code>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
