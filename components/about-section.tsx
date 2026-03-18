"use client";

import { Music, Linkedin, Instagram, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AboutSection() {
  const revealRef = useScrollReveal();

  const links = [
    {
      label: "Listen on Spotify",
      icon: Music,
      url: "https://open.spotify.com/artist/2n7IGUXyUVO7ofiCiMo4lg?si=rF7oHFYQQdSdQvF6RplIRw",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/samuelshih/",
    },
    {
      label: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/samjshih/",
    },
  ];

  return (
    <section
      id="about"
      className="grain-section py-24 px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/15"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">
            About
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            A Little <span className="text-primary">About Me</span>
          </h2>
        </div>

        <div
          ref={revealRef}
          className="reveal-up flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image with decorative frame */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-3 rounded-2xl border-2 border-primary/10" />
            <Image
              src="/sam-headshot.webp"
              alt="Sam J. Shih professional headshot"
              width={256}
              height={256}
              className="relative w-64 h-64 rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 shadow-md px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-1.5">
              <span className="text-cyan-500">⚡</span> 5+ Years in Tech
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-4">
              Software engineer turned AI automation specialist.
            </p>

            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a software engineer with over five years in the tech
              industry, passionate about building efficient systems that solve
              real business problems. I specialize in creating automation
              solutions that handle the busywork so business owners can focus on
              growth and what they actually enjoy.
            </p>

            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              I work with modern technologies like React, Next.js, and AI tools
              to build systems that are both powerful and user-friendly. When
              I&apos;m not coding, you&apos;ll find me making music or exploring
              new tech projects.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-primary/40 hover:text-primary hover:shadow-sm hover:shadow-primary/10 transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
