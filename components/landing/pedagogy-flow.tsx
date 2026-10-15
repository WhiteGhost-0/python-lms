"use client";

import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  IconBook2,
  IconCompass,
  IconShieldCheck,
  IconLayersLinked,
  IconCode,
  IconCircleCheck,
} from "@/components/ui/icons";

function PointerTraceHeader() {
  return (
    <div className="h-full w-full rounded-xl border border-sky-950/20 bg-slate-900 text-slate-100 p-3 sm:p-4 font-mono text-2xs sm:text-xs flex flex-col justify-between shadow-inner select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-slate-400">
        <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
          Execution Trace: Pointer Reference
        </span>
        <span className="text-[10px] text-slate-400 font-mono">Python 3.12 Heap</span>
      </div>
      <div className="space-y-1.5 leading-relaxed">
        <div>
          <span className="text-sky-300 font-semibold">a</span> = <span className="text-amber-300">[1, 2, 3]</span>
          <span className="text-slate-500 ml-2"># id: 0x7f01 (Heap allocated)</span>
        </div>
        <div>
          <span className="text-sky-300 font-semibold">b</span> = <span className="text-sky-300">a</span>
          <span className="text-slate-500 ml-2"># id: 0x7f01 (Shared memory pointer)</span>
        </div>
        <div className="text-emerald-400 font-medium">
          <span className="text-sky-300">b</span>.append(<span className="text-amber-300">4</span>)
          <span className="text-slate-500 ml-2"># Mutates underlying heap object</span>
        </div>
        <div className="pt-2 text-slate-400 text-[10.5px] border-t border-slate-800/80">
          Result: <span className="text-sky-300 font-bold">a is b == True</span> • <span className="text-amber-200">a == [1, 2, 3, 4]</span>
        </div>
      </div>
    </div>
  );
}

function ProgressMilestones() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-border/50 text-2xs font-mono text-muted">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border/60">
        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
        <span className="text-foreground font-medium truncate">Syntax & Data Types</span>
        <span className="ml-auto text-muted/70 text-[10px] shrink-0">Verified</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border/60">
        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
        <span className="text-foreground font-medium truncate">Recursion & OOP</span>
        <span className="ml-auto text-muted/70 text-[10px] shrink-0">Verified</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border/60">
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse shrink-0" aria-hidden="true" />
        <span className="text-foreground font-medium truncate">LLM Attention & Tokens</span>
        <span className="ml-auto text-sky-700 font-semibold text-[10px] shrink-0">In Progress</span>
      </div>
    </div>
  );
}

export function PedagogyFlow() {
  return (
    <section id="pedagogy" className="border-b border-border py-16 sm:py-24 relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold">
            Platform Architecture
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Engineered for Comprehension
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            A structured path through programming and AI—combining authoritative technical prose, visual execution models, contextual AI guidance, and measurable learning progress.
          </p>
        </div>

        {/* Bento Grid with 6 Distinct Value Propositions */}
        <BentoGrid
          cols={4}
          gradient={false}
          gridClassName="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[minmax(190px,1fr)_minmax(190px,1fr)_auto] gap-3 sm:gap-3.5 lg:gap-4"
        >
          {/* Item 1 — Curriculum */}
          <BentoCard
            icon={<IconBook2 size={20} className="text-sky-700" aria-hidden="true" />}
            badge="21 Modules"
            title="Curriculum, From Basics to GenAI"
            description="A structured path from Python fundamentals to advanced concepts, following the open istmX/Python curriculum. Each module builds on what came before."
            cta="Explore the curriculum"
            ctaHref="#curriculum"
            className="col-span-1 sm:col-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1"
          />

          {/* Item 2 — Visual Learning (Central Featured Demonstration) */}
          <BentoCard
            featured={true}
            icon={<IconCompass size={22} className="text-sky-700" aria-hidden="true" />}
            badge="Visual Learning"
            title="See How Code Actually Works"
            description="Explore references, recursion, memory, and LLM token probabilities through visual models, execution traces, and step-by-step examples—not walls of text alone."
            header={<PointerTraceHeader />}
            cta="Discover the method"
            ctaHref="#pedagogy"
            className="col-span-1 sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2"
          />

          {/* Item 3 — AI Tutor */}
          <BentoCard
            icon={<IconShieldCheck size={20} className="text-sky-700" aria-hidden="true" />}
            badge="Context-Aware AI"
            title="An AI Tutor That Guides You"
            description="Ask questions about the lesson you're studying. Get hints, explanations, and Socratic guidance grounded in the curriculum, with daily usage limits and protected assessments."
            cta="Read the AI charter"
            ctaHref="#tutor-policy"
            className="col-span-1 sm:col-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-1"
          />

          {/* Item 4 — Learning Path */}
          <BentoCard
            icon={<IconLayersLinked size={20} className="text-sky-700" aria-hidden="true" />}
            badge="Two Learning Tracks"
            title="From Python to Generative AI"
            description="Build a foundation in programming before moving into LLMs, attention, context windows, and GenAI projects. Learn the underlying ideas, not just how to call an API."
            cta="Explore the learning path"
            ctaHref="#curriculum"
            className="col-span-1 sm:col-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1"
          />

          {/* Item 5 — Practice */}
          <BentoCard
            icon={<IconCode size={20} className="text-sky-700" aria-hidden="true" />}
            badge="Applied Learning"
            title="Practice Until It Clicks"
            description="Reinforce concepts with worked examples, small knowledge checks, DSA problems, and practical projects. Use a code editor when the task needs one, and your own development environment when it doesn't."
            cta="See how practice works"
            ctaHref="#curriculum"
            className="col-span-1 sm:col-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-1"
          />

          {/* Item 6 — Progress */}
          <BentoCard
            icon={<IconCircleCheck size={20} className="text-sky-700" aria-hidden="true" />}
            badge="Learning Progress"
            title="Progress You Can Actually Measure"
            description="Track completed modules, practice results, and skills developed over time. A leaderboard can recognise meaningful learning achievements without making streaks or XP the goal."
            cta="Discover the learning principles"
            ctaHref="#principles"
            className="col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-4 lg:row-start-3 lg:row-span-1"
          >
            <ProgressMilestones />
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
}
