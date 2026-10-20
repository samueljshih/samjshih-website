"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL =
  "https://calendly.com/samuels-shih/20min?hide_gdpr_banner=1&background_color=ffffff&text_color=0b1b33&primary_color=1d4ed8";

const outcomes = ["A focused scope for your first version", "The fastest path to launch", "An honest take on time and cost"];

export function CalendlySection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="calendly" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Free product call"
          title={
            <>
              Bring your idea. Let&apos;s <em>map it out</em>.
            </>
          }
          lede="In 20 minutes, I'll help you figure out what to build first and what it would take to get it live."
        />

        <ul className="-mt-4 mb-12 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {outcomes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="calendly-inline-widget" data-url={CALENDLY_URL} />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Can&apos;t find a time?{" "}
          <a
            href="mailto:samjshih@gmail.com"
            className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            Email me
          </a>{" "}
          and I&apos;ll work around your schedule.
        </p>
      </div>
    </section>
  );
}
