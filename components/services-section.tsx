"use client";

import { MessageSquare, Globe, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ServicesSection() {
  const revealRef = useScrollReveal();

  const services = [
    {
      icon: Globe,
      title: "Websites",
      description:
        "Modern, high-quality websites that make your business look credible and professional — so customers trust you and are more likely to reach out.",
      features: [
        "Clean, modern design",
        "Clear messaging that builds trust",
        "Built to convert visitors into customers",
      ],
      result: "Result: your business looks legit from the first click",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "AI Systems",
      description:
        "AI-powered systems that respond to customer inquiries instantly and make sure you never miss an opportunity.",
      features: [
        "Responds to inquiries 24/7",
        "Handles common questions automatically",
        "Keeps customers engaged without extra effort",
      ],
      result: "Result: faster response, no missed leads",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Zap,
      title: "Automations",
      description:
        "Simple automations that eliminate repetitive tasks and streamline your workflow — saving you time every week.",
      features: [
        "Automates manual, time-consuming tasks",
        "Connects your tools so they work together",
        "Frees you up to focus on what matters",
      ],
      result: "Result: less manual work, more time back",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="grain-section py-20 px-4 bg-slate-50/50">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What I Help <span className="text-primary">You Improve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I help businesses look more legit and run more efficiently using websites, AI, and automation.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal-stagger grid md:grid-cols-3 gap-8"
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
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2.5 text-sm text-slate-700"
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
