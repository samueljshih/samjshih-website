"use client";

import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "Fit check",
    description: "20 minutes on your idea: what to build first, which tier fits, and when you could be live.",
  },
  {
    title: "Deposit",
    description: "A 50% deposit locks your start date. The code, domain, and accounts are set up in your name.",
  },
  {
    title: "Build",
    description:
      "Proof Sprint goes live in 14 days, Launch MVP in 21, and Launch + Grow in 28. You get a real product, not a prototype.",
  },
  {
    title: "Launch",
    description:
      "The other 50% is due on launch day, and your included fixes start. After that, Growth Partner or Care keeps it running.",
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
