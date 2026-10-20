"use client";

import { ArrowUpRight } from "lucide-react";
import { BrowserFrame } from "@/components/browser-frame";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { projects, type Project } from "@/lib/projects";

// 6-column grid: two featured product builds, then two rows of three.
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="rounded-2xl transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] shadow-soft group-hover:-translate-y-1 group-hover:shadow-lift">
        <BrowserFrame
          url={project.url}
          screenshot={project.screenshot}
          title={project.title}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 85vw"
          className="rounded-2xl"
          imageClassName="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{project.category}</p>
          <h3 className="mt-1.5 text-xl font-medium">{project.title}</h3>
          <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <ArrowUpRight className="mt-6 h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
    </a>
  );
}

export function EngineeringProjectsSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="projects" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Ideas I&apos;ve helped <em>bring to life</em>
            </>
          }
          lede="From AI platforms to polished marketing sites, built for real founders and businesses."
        />

        <div ref={revealRef} className="reveal-up">
          {/* Mobile: swipe carousel */}
          <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-2 scrollbar-hide sm:hidden">
            {projects.map((project) => (
              <div key={project.title} className="w-[85vw] flex-shrink-0 snap-start">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground sm:hidden">Swipe to see more →</p>

          <div className="hidden gap-x-8 gap-y-14 sm:grid sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((project, i) => (
              <div key={project.title} className={spans[i]}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
