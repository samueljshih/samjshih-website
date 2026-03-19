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
            <div className="absolute -inset-3 rounded-full border-2 border-primary/10" />
            <div className="absolute -inset-6 rounded-full border border-primary/5" />
            <Image
              src="/assets/sam_headshot_pic.png"
              alt="Sam J. Shih professional headshot"
              width={256}
              height={256}
              className="relative w-56 h-56 rounded-full object-cover object-top shadow-xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 shadow-md px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-1.5">
              <span className="text-cyan-500">⚡</span> 5+ Years in Tech
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-4">
              I&apos;m Sam J Shih — a software engineer helping businesses create leverage through better systems.
            </p>

            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              I build high-converting websites and AI-powered workflows that help you capture more customers, respond faster, and operate more efficiently.
            </p>

            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              I focus on simple systems that actually get used — not overcomplicated setups that sit unused.
            </p>

            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              Outside of work, I&apos;m into music, martial arts, and exploring practical ways to apply AI in real-world business.
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
