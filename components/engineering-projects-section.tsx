"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function EngineeringProjectsSection() {
  const revealRef = useScrollReveal();

  const projects = [
    {
      title: "Top One Percenter",
      description:
        "Top One Percenter is a sales coaching academy and SaaS platform that helps teams train like their top 1% performers. I optimized their onboarding flow and redesigned key pages to create a smoother, more engaging training experience.",
      url: "https://toponepercenter.com/",
      category: "SaaS Platform",
      tech: ["React", "Next.js", "TypeScript"],
      headerGradient: "from-blue-600 to-indigo-700",
      logo: "/top_logo.png",
    },
    {
      title: "Rapid Weight Loss USA",
      description:
        "Rapid Weight Loss USA is a medically supervised weight loss clinic offering FDA-approved treatments. I built a clean, mobile-first website with clear CTAs, treatment education, and easy appointment booking to guide patients from discovery to consultation.",
      url: "https://rapidweightlossusa.com/",
      category: "Health Tech",
      tech: ["React", "Next.js", "Mobile-First"],
      headerGradient: "from-cyan-500 to-blue-500",
      logo: "/rapid_weight_loss_logo.webp",
    },
    {
      title: "Torchline AI",
      description:
        "Torchline AI is a vision analytics platform that turns existing camera feeds into operational intelligence. I contributed to building the platform that helps frontline businesses detect safety violations, coach teams with AI-generated clips, and identify compliance gaps — all without new hardware.",
      url: "https://www.torchline.ai/",
      category: "AI SaaS",
      tech: ["Next.js", "AI/ML", "TypeScript"],
      headerGradient: "from-orange-500 to-rose-600",
      logo: "/torchline_logo.png",
    },
    {
      title: "The Godfellas",
      description:
        "The Godfellas is a nonprofit focused on empowering marginalized communities worldwide. I led the development of their modern, story-driven website with donation flows and newsletter signup, helping them grow their movement and share their impact.",
      url: "https://thegodfellas.com/",
      category: "Nonprofit",
      tech: ["React", "UX Design", "Analytics"],
      headerGradient: "from-slate-700 to-slate-900",
      logo: "/the_godfellas_logo.webp",
    },
  ];

  return (
    <section id="projects" className="grain-section py-20 px-4 bg-slate-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Engineering <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real projects built for real businesses — focused on performance, usability, and results.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden glow-card brand-card-shadow"
            >
              {/* Gradient header band */}
              <div
                className={`h-14 bg-gradient-to-br ${project.headerGradient} relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full w-fit">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-blue-50 border border-blue-200 text-blue-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all bg-transparent"
                  asChild
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-4 py-2 rounded-full border border-slate-200">
            <Zap className="w-4 h-4 text-primary" />
            <span>
              Built with modern React, Next.js, and performance optimization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
