"use client";

import { Check, Globe, Rocket, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Rocket,
    title: "Product & MVP builds",
    description:
      "Take your idea from a sketch to a launched web app. I handle scoping, design and the full-stack build, so you have a real product in front of real users.",
    features: ["Lean scope for a fast first version", "Thoughtful UX and polished design", "Full-stack build, launch and iteration"],
    result: "A working product you can sell, demo or raise on",
  },
  {
    icon: Globe,
    title: "Websites",
    description:
      "Credible, modern websites that explain what you do clearly and turn visitors into conversations.",
    features: ["Clean, modern design", "Messaging that builds trust", "Built to convert"],
    result: "A brand that looks legit from the first click",
  },
  {
    icon: Sparkles,
    title: "AI systems & automation",
    description:
      "AI assistants and automations that answer customers, follow up on leads and take repetitive work off your plate.",
    features: ["Assistants that respond 24/7", "Automated lead follow-up", "Your tools connected and working together"],
    result: "Faster responses and hours back every week",
  },
];

export function ServicesSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              From first idea to <em>launched product</em>
            </>
          }
          lede="Building products is the core of what I do. Websites and AI systems help them reach people and run smoothly."
        />

        <div ref={revealRef} className="reveal-stagger grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted">
                <service.icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-[1.75rem] leading-tight">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-6 mb-8 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-border pt-5 text-sm font-medium text-foreground">
                {service.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
