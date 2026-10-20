"use client";

import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { title: "Idea", description: "We talk through your idea, who it's for and what success looks like." },
  { title: "Plan", description: "I scope a lean first version and map the fastest path to launch." },
  { title: "Build", description: "I design and build it end to end, with regular demos so you always see progress." },
  { title: "Launch & grow", description: "We ship to real users, then improve it based on what they actually do." },
];

export function ProcessSection() {
  const revealRef = useScrollReveal<HTMLOListElement>();

  return (
    <section id="process" className="border-t border-border bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              A clear path from idea to <em>launch</em>
            </>
          }
          lede="No technical background needed. You bring the vision, I handle the rest and keep you in the loop."
        />

        <ol ref={revealRef} className="reveal-stagger grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-foreground/80 pt-6">
              <span className="font-serif text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
