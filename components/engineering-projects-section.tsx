"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "Radiance Luxury Living",
    description:
      "Radiance Luxury Living is a luxury real estate agency showcasing premium properties. I built a high-end, visually striking website with property listings, immersive imagery, and seamless inquiry flows designed to attract serious buyers and build instant credibility.",
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
      "Daddy's Dining Group develops and operates distinctive American restaurant brands built for the Taiwan market. I designed and built their marketing site to showcase their portfolio of concepts with a premium, editorial feel.",
    url: "https://daddysdininggroup.com/",
    category: "Restaurant Group",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    headerGradient: "from-yellow-700 to-stone-800",
    logo: null,
    screenshot: "/projects/screenshots/daddysdininggroup.webp",
  },
  {
    title: "Top One Percenter",
    description:
      "Top One Percenter is a sales coaching academy and SaaS platform that helps teams train like their top 1% performers. I optimized their onboarding flow and redesigned key pages to create a smoother, more engaging training experience.",
    url: "https://toponepercenter.com/",
    category: "SaaS Platform",
    tech: ["React", "Next.js", "TypeScript"],
    headerGradient: "from-blue-600 to-indigo-700",
    logo: "/projects/top_logo.png",
    screenshot: "/projects/screenshots/toponepercenter.webp",
  },
  {
    title: "Torchline AI",
    description:
      "Torchline AI is a vision analytics platform that turns existing camera feeds into operational intelligence. I contributed to building the platform that helps frontline businesses detect safety violations, coach teams with AI-generated clips, and identify compliance gaps. No new hardware required.",
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
      "The Godfellas is a nonprofit focused on empowering marginalized communities worldwide. I led the development of their modern, story-driven website with donation flows and newsletter signup, helping them grow their movement and share their impact.",
    url: "https://thegodfellas.com/",
    category: "Nonprofit",
    tech: ["React", "UX Design", "Analytics"],
    headerGradient: "from-slate-700 to-slate-900",
    logo: "/projects/the_godfellas_logo.webp",
    screenshot: "/projects/screenshots/godfellas.webp",
  },
  {
    title: "Easy Taiwan Citizenship",
    description:
      "Easy Taiwan Citizenship is a guided service helping individuals navigate the Taiwan citizenship and residency process. I built a clear, informative website that walks users through eligibility, documentation, and next steps to simplify a complex legal journey.",
    url: "https://easytaiwancitizenship.com/",
    category: "Legal Services",
    tech: ["Next.js", "TypeScript", "UX Design"],
    headerGradient: "from-red-500 to-rose-700",
    logo: null,
    screenshot: "/projects/screenshots/easytaiwancitizenship.webp",
  },
];

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
    <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-2xl">
      {/* Browser chrome */}
      <div className="h-9 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-2 flex-shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 h-5 bg-white rounded-full border border-slate-200 flex items-center px-3 overflow-hidden">
          <span className="text-[11px] text-slate-400 truncate">
            {url.replace("https://", "").replace("http://", "")}
          </span>
        </div>
      </div>

      {/* Content: screenshot or placeholder */}
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
          className={`aspect-[16/9] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3`}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center">
            <span className="text-3xl">🖥️</span>
          </div>
          <p className="text-sm font-medium text-white/70">Screenshot coming soon</p>
        </div>
      )}
    </div>
  );
}

export function EngineeringProjectsSection() {
  const revealRef = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  }, []);

  const prev = useCallback(
    () => goTo((current - 1 + projects.length) % projects.length),
    [current, goTo]
  );

  const next = useCallback(
    () => goTo((current + 1) % projects.length),
    [current, goTo]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const project = projects[current];

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
          {/* Main carousel card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 glow-card brand-card-shadow">
            <div
              key={animKey}
              className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center carousel-fade"
            >
              {/* Screenshot */}
              <div className="relative">
                {/* Prev/Next on screenshot */}
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <BrowserFrame
                  gradient={project.headerGradient}
                  url={project.url}
                  screenshot={project.screenshot}
                  title={project.title}
                />
              </div>

              {/* Project info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  {project.logo && (
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  )}
                  <span className="text-xs font-medium text-muted-foreground bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 border border-blue-200 text-blue-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all bg-transparent"
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
          </div>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-1.5 rounded-full hover:bg-slate-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-slate-500" />
            </button>

            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-slate-300 hover:bg-slate-400 w-2"
                }`}
              />
            ))}

            <button
              onClick={next}
              aria-label="Next"
              className="p-1.5 rounded-full hover:bg-slate-200 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <div className="text-center mt-2">
            <span className="text-xs text-slate-400">
              {current + 1} / {projects.length}
            </span>
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
