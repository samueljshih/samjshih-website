"use client";

import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "15-Minute Fit Check",
    description:
      "A free 15-minute fit check on your idea, who it's for, and an honest range for time and cost.",
  },
  {
    title: "Blueprint (week 1)",
    description: "A written scope, a clickable prototype of the key screens and a fixed price.",
  },
  {
    title: "Build (6 to 8 weeks)",
    description: "I design and build it end to end. You get a weekly demo and a live preview link.",
  },
  {
    title: "Launch & grow",
    description: "We ship to real users. 30 days of fixes included, then care or new features monthly.",
  },
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
              <span className="font-serif text-3xl text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
