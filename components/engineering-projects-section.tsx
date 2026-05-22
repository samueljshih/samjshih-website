"use client";

import { ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "Radiance Luxury Living",
    description:
      "High-end website for a luxury real estate agency with listings and inquiry flows.",
    url: "https://radiancelivingkaty.com/",
    category: "Real Estate",
    tech: ["Next.js", "TypeScript", "UX Design"],
    headerGradient: "from-amber-400 to-rose-500",
    logo: null,
    screenshot: "/projects/screenshots/radianceluxuryliving.webp",
  },
  {
    title: "Daddy's Dining Group",
    description:
      "Marketing site for an American restaurant group operating in Taiwan.",
    url: "https://daddysdininggroup.com/",
    category: "Restaurant Group",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    headerGradient: "from-yellow-700 to-stone-800",
    logo: null,
    screenshot: "/projects/screenshots/daddysdininggroup.webp",
  },
  {
    title: "Easy Taiwan Citizenship",
    description:
      "Informational website guiding users through Taiwan citizenship and residency.",
    url: "https://easytaiwancitizenship.com/",
    category: "Legal Services",
    tech: ["Next.js", "TypeScript", "UX Design"],
    headerGradient: "from-red-500 to-rose-700",
    logo: null,
    screenshot: "/projects/screenshots/easytaiwancitizenship.webp",
  },
  {
    title: "Torchline AI",
    description:
      "Vision analytics platform turning existing camera feeds into operational intelligence.",
    url: "https://www.torchline.ai/",
    category: "AI SaaS",
    tech: ["Next.js", "AI/ML", "TypeScript"],
    headerGradient: "from-orange-500 to-rose-600",
    logo: "/projects/torchline_logo.png",
    screenshot: "/projects/screenshots/torchlineai.webp",
  },
  {
    title: "The Godfellas",
    description:
      "Story-driven nonprofit website with donation flows and newsletter signup.",
    url: "https://thegodfellas.com/",
    category: "Nonprofit",
    tech: ["React", "UX Design", "Analytics"],
    headerGradient: "from-slate-700 to-slate-900",
    logo: "/projects/the_godfellas_logo.webp",
    screenshot: "/projects/screenshots/godfellas.webp",
  },
  {
    title: "Ninkata Ninjas",
    description:
      "Brand website for an animated health-and-wellness kids series ages 4-8.",
    url: "https://www.ninkataninjas.com/",
    category: "Kids Entertainment",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    headerGradient: "from-blue-500 to-violet-600",
    logo: null,
    screenshot: "/projects/screenshots/ninkataninjas.webp",
  },
  {
    title: "Top One Percenter",
    description:
      "Onboarding redesign for a sales coaching platform helping teams train like their top 1%.",
    url: "https://toponepercenter.com/",
    category: "SaaS Platform",
    tech: ["React", "Next.js", "TypeScript"],
    headerGradient: "from-blue-600 to-indigo-700",
    logo: "/projects/top_logo.png",
    screenshot: "/projects/screenshots/toponepercenter.webp",
  },
];

type Project = (typeof projects)[0];

function BrowserFrame({
  gradient,
  url,
  screenshot,
  title,
}: {
  gradient: string;
  url: string;
  screenshot: string | null;
  title: string;
}) {
  return (
    <div className="w-full overflow-hidden border-b border-slate-200">
      <div className="h-7 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-2 flex-shrink-0">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 h-4 bg-white rounded-full border border-slate-200 flex items-center px-2 overflow-hidden">
          <span className="text-[10px] text-slate-400 truncate">
            {url.replace("https://", "").replace("http://", "")}
          </span>
        </div>
      </div>

      {screenshot ? (
        <div className="aspect-[16/9] relative">
          <Image
            src={screenshot}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          className={`aspect-[16/9] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2`}
        >
          <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
            <span className="text-xl">🖥️</span>
          </div>
          <p className="text-xs font-medium text-white/70">Screenshot coming soon</p>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <BrowserFrame
          gradient={project.headerGradient}
          url={project.url}
          screenshot={project.screenshot}
          title={project.title}
        />

        <div className="flex flex-col flex-1 p-4 md:p-5">
          <div className="flex items-center gap-2 mb-2">
            {project.logo && (
              <Image
                src={project.logo}
                alt={project.title}
                width={20}
                height={20}
                className="w-5 h-5 object-contain flex-shrink-0"
              />
            )}
            <span className="text-xs font-medium text-muted-foreground bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
              {project.category}
            </span>
          </div>

          <h3 className="font-bold text-base mb-1 leading-snug">{project.title}</h3>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1 mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] bg-blue-50 border border-blue-200 text-blue-700 px-2 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline underline-offset-2 mt-auto">
            <ExternalLink className="w-3 h-3 flex-shrink-0" />
            View Live Site
          </div>
        </div>
      </div>
    </a>
  );
}

export function EngineeringProjectsSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="grain-section py-20 px-4 bg-gradient-to-br from-slate-100 via-blue-50/40 to-indigo-50/50"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Engineering <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real projects built for real businesses. Focused on performance,
            usability, and results.
          </p>
        </div>

        <div ref={revealRef} className="reveal-up">
          {/* Mobile: horizontal swipe carousel (hidden on sm+) */}
          <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0 w-[82vw] snap-start"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <p className="sm:hidden text-center text-xs text-slate-400 mt-3 mb-0">
            Swipe to explore all projects →
          </p>

          {/* Desktop: 3-column grid (hidden on mobile) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-4 py-2 rounded-full border border-slate-200">
            <Zap className="w-4 h-4 text-primary" />
            <span>Built with modern React, Next.js, and performance optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
