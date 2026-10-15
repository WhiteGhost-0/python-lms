import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { PedagogyFlow } from "@/components/landing/pedagogy-flow";
import { CurriculumPreview } from "@/components/landing/curriculum-preview";
import { TutorPolicyCard } from "@/components/landing/tutor-policy-card";
import { ManifestoCard } from "@/components/landing/manifesto-card";
import { NextStepSection } from "@/components/landing/next-step-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <PedagogyFlow />
        <CurriculumPreview />
        <TutorPolicyCard />
        <ManifestoCard />
        <NextStepSection />
      </main>
      <Footer />
    </div>
  );
}
