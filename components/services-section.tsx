"use client";

import { MessageSquare, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ServicesSection() {
  const revealRef = useScrollReveal();

  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description:
        "Custom chatbots that handle customer inquiries, qualify leads, and provide 24/7 support — so you're always available without lifting a finger.",
      features: [
        "Multi-platform integration",
        "Custom training on your business",
        "Analytics dashboard",
      ],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Custom Websites",
      description:
        "Fast, modern websites built to convert. Clean design, mobile-first, and optimized for the results that actually matter to your business.",
      features: [
        "Mobile-first design",
        "Performance optimized",
        "Built to convert",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="services" className="grain-section py-20 px-4 bg-slate-50/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">What I Build</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Two services. <span className="text-primary">Real results.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I keep it focused so every project gets my full attention.
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
              <ul className="space-y-2.5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
