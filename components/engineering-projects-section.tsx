import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, Zap } from "lucide-react";

export function EngineeringProjectsSection() {
  const projects = [
    {
      title: "Top One Percenter",
      description:
        "Top One Percenter is a sales coaching academy and SaaS platform that helps teams train like their top 1% performers. I optimized their onboarding flow and redesigned key pages to create a smoother, more engaging training experience.",
      url: "https://toponepercenter.com/",
      category: "SaaS Platform",
      tech: ["React", "Next.js", "TypeScript"],
      color: "bg-primary",
    },
    {
      title: "Rapid Weight Loss USA",
      description:
        "Rapid Weight Loss USA is a medically supervised weight loss clinic offering FDA-approved treatments. I built a clean, mobile-first website with clear CTAs, treatment education, and easy appointment booking to guide patients from discovery to consultation.",
      url: "https://rapidweightlossusa.com/",
      category: "Health Tech",
      tech: ["React", "Next.js", "Mobile-First"],
      color: "bg-secondary",
    },
    {
      title: "The Godfellas",
      description:
        "The Godfellas is a nonprofit focused on empowering marginalized communities worldwide. I led the development of their modern, story-driven website with donation flows and newsletter signup, helping them grow their movement and share their impact.",
      url: "https://thegodfellas.com/",
      category: "Nonprofit",
      tech: ["React", "UX Design", "Analytics"],
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Engineering Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Full-stack web applications and platforms I've built, from SaaS
            products to nonprofit websites, focusing on performance, user
            experience, and scalable architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
            >
              <CardContent className="p-0">
                <div className={`h-2 ${project.color} rounded-t-lg`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground bg-slate-100 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-3 mb-2">
                        {project.title}
                      </h3>
                    </div>
                    <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-4 py-2 rounded-full border">
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
