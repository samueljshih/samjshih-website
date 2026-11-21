"use client";

import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "Fit check",
    description: "15 minutes to see if a 21-Day MVP Launch fits, and which tier matches what you want to ship.",
  },
  {
    title: "Deposit",
    description:
      "A 50% deposit locks the start date. Launch + Grow is 50/25/25. Code, domain, and accounts are in your name.",
  },
  {
    title: "Build",
    description:
      "Proof Sprint is live in 14 days, Launch MVP in 21, and Launch + Grow in 28. A working first version, with real users.",
  },
  {
    title: "Launch",
    description:
      "The balance is due on launch day. Your fix window starts then. Growth Partner can keep shipping after that.",
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
