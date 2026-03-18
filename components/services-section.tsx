"use client";

import { MessageSquare, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ServicesSection() {
  const revealRef = useScrollReveal();

  const services = [
    {
      icon: Globe,
      title: "High-Converting Websites",
      description:
        "Your website should bring you business — not just look good. I build modern, fast, conversion-focused websites that clearly communicate your value, guide visitors to take action, and increase trust and credibility instantly.",
      features: [
        "Clearly communicates your value",
        "Guides visitors to take action",
        "Increases trust and credibility instantly",
      ],
      result: "Result: more leads, more customers",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "AI Customer Support Systems",
      description:
        "Never miss a message or opportunity again. I build AI systems that respond to customer inquiries instantly, handle repetitive questions automatically, and support your business 24/7.",
      features: [
        "Responds to inquiries instantly",
        "Handles repetitive questions automatically",
        "Supports your business 24/7",
      ],
      result: "Result: faster response, less manual work, better customer experience",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="services" className="grain-section py-20 px-4 bg-slate-50/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What I Help <span className="text-primary">You Improve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Most businesses don&apos;t have a traffic problem — they have a conversion and efficiency problem. I fix both sides.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal-stagger grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white border border-slate-200 p-8 glow-card brand-card-shadow cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-md`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2.5 text-base text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-primary">
                👉 {service.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
