import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Code, Zap } from "lucide-react"

export function EngineeringProjectsSection() {
  const projects = [
    {
      title: "Top One Percenter",
      description:
        "Sales coaching SaaS platform with advanced onboarding flows and scalable architecture for growing user base.",
      url: "https://toponepercenter.com/",
      category: "SaaS Platform",
      tech: ["React", "Next.js", "TypeScript"],
      color: "bg-primary",
    },
    {
      title: "Rapid Weight Loss USA",
      description:
        "Consumer-facing health tech website optimized for mobile responsiveness and performance, driving higher conversion rates.",
      url: "https://rapidweightlossusa.com/",
      category: "Health Tech",
      tech: ["React", "Next.js", "Mobile-First"],
      color: "bg-secondary",
    },
    {
      title: "The Godfellas",
      description:
        "Nonprofit organization website with user-centered design and A/B testing, resulting in increased traffic and engagement.",
      url: "https://thegodfellas.com/",
      category: "Nonprofit",
      tech: ["React", "UX Design", "Analytics"],
      color: "bg-accent",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Engineering Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Full-stack web applications and platforms I've built, from SaaS products to nonprofit websites, focusing on
            performance, user experience, and scalable architecture.
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
                      <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                    </div>
                    <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

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
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
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
            <span>Built with modern React, Next.js, and performance optimization</span>
          </div>
        </div>
      </div>
    </section>
  )
}
