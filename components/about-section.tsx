"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Music } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const links = [
  { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/samuelshih/" },
  { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/samjshih/" },
  {
    label: "Spotify",
    icon: Music,
    url: "https://open.spotify.com/artist/2n7IGUXyUVO7ofiCiMo4lg?si=rF7oHFYQQdSdQvF6RplIRw",
  },
];

export function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="border-t border-border bg-card px-4 py-24 md:py-32">
      <div
        ref={revealRef}
        className="reveal-up mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16"
      >
        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-lift">
            <Image
              src="/assets/sam_headshot_pic.png"
              alt="Sam J Shih"
              fill
              sizes="(min-width: 768px) 320px, 280px"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-medium shadow-soft">
            10+ years in tech
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="section-eyebrow">About</div>
          <h2 className="font-serif text-4xl leading-[1.08] md:text-5xl">
            Hi, I&apos;m <em>Sam</em>.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              I&apos;m a software engineer who helps founders and business owners turn ideas into real, working
              products.
            </p>
            <p>
              I handle the whole journey, from shaping the idea and designing the experience to building, launching and
              improving it. You get one partner who understands both the product and the code.
            </p>
            <p>
              I keep things practical: a focused first version, shipped fast, that people actually use. Outside of
              work, I&apos;m into music, martial arts and exploring real-world applications of AI.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/30"
              >
                <link.icon className="h-4 w-4" strokeWidth={1.75} />
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
