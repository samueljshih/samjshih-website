"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { BrowserFrame } from "@/components/browser-frame";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { projects } from "@/lib/projects";

const points = [
  "Your intake, your method and your knowledge built in",
  "Client profiles and reports in minutes, not hours",
  "Serve more clients without more 1:1 time",
];

export function ExpertsSection() {
  const revealRef = useScrollReveal();
  const top25 = projects.find((p) => p.title === "Top 25 Strategy Lab")!;

  return (
    <section id="experts" className="border-t border-border bg-card px-4 py-24 md:py-32">
      <div ref={revealRef} className="reveal-stagger mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="section-eyebrow">For coaches and consultants</div>
          <h2 className="font-serif text-[2.6rem] leading-[1.06] text-balance md:text-6xl">
            Turn your expertise into an <em>app</em> your clients use.
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground text-pretty">
            You already have a method that works. I turn it into an AI-powered tool that profiles clients, gives
            feedback and saves you hours, without replacing you.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-lg">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <a href={top25.url} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="rounded-2xl shadow-lift transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
            <BrowserFrame
              url={top25.url}
              screenshot={top25.screenshot}
              title={top25.title}
              sizes="(min-width: 1024px) 560px, 90vw"
              className="rounded-2xl"
            />
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Case study</p>
              <h3 className="mt-1.5 text-xl font-medium">Top 25 Strategy Lab</h3>
              <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                An admissions coach&apos;s roadmap, turned into an app that grades each student&apos;s profile and
                writes a full strategy report from one intake form.
              </p>
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
        </a>
      </div>
    </section>
  );
}
