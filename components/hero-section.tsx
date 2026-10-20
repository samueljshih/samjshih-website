"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import { BrowserFrame } from "@/components/browser-frame";
import { usePointerParallax } from "@/hooks/use-pointer-parallax";
import { projects } from "@/lib/projects";

const clientAvatars = [
  { src: "/clients/archana.jpeg", name: "Archana Kannan" },
  { src: "/clients/will.jpeg", name: "William Chung" },
  { src: "/clients/lia.jpeg", name: "Lia Garvin" },
  { src: "/clients/denney.jpeg", name: "Denney Choi" },
];

// Back-to-front. Position, tilt and parallax depth per card.
const stack = [
  { title: "Easy Taiwan Citizenship", position: "top-0 right-0 w-[76%]", rotate: "rotate-[3deg]", depth: 18, delay: "0s" },
  { title: "Radiance Luxury Living", position: "top-[22%] left-0 w-[74%]", rotate: "-rotate-[3deg]", depth: 10, delay: "-2.5s" },
  { title: "Torchline AI", position: "bottom-0 right-[6%] w-[78%]", rotate: "rotate-[1deg]", depth: 5, delay: "-5s" },
];

function ScreenshotStack() {
  const parallaxRef = usePointerParallax<HTMLAnchorElement>();

  return (
    <a
      ref={parallaxRef}
      href="#projects"
      aria-label="See my work"
      className="relative mx-auto block aspect-[6/5] w-full max-w-[480px] lg:max-w-[560px]"
    >
      {stack.map(({ title, position, rotate, depth, delay }, i) => {
        const project = projects.find((p) => p.title === title)!;
        return (
          <div key={title} data-parallax-depth={depth} className={`absolute ${position} will-change-transform`}>
            <div className="soft-float" style={{ animationDelay: delay }}>
              <BrowserFrame
                url={project.url}
                screenshot={project.screenshot}
                title={project.title}
                sizes="(min-width: 1024px) 420px, 80vw"
                priority={i === stack.length - 1}
                className={`${rotate} shadow-lift`}
              />
            </div>
          </div>
        );
      })}
    </a>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden px-4 pt-28 pb-20 md:pt-36 lg:min-h-[min(100svh,960px)] lg:pt-28 lg:pb-16"
    >
      {/* Soft wash + fine grid fading out toward the edges */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 35%, rgba(29,78,216,0.08) 0%, transparent 70%), radial-gradient(50% 40% at 15% 20%, rgba(214,180,140,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,27,51,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,51,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <div className="hero-animate mb-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6 lg:justify-start">
            <div className="relative flex-shrink-0">
              <Image
                src="/assets/sam-headshot-blue.jpg"
                alt="Sam Shih"
                width={160}
                height={160}
                priority
                className="h-32 w-32 rounded-full object-cover shadow-lift ring-[6px] ring-card sm:h-36 sm:w-36 lg:h-40 lg:w-40"
              />
              <span
                className="absolute right-2 bottom-2 h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-background"
                aria-hidden
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-serif text-3xl md:text-4xl">Hi, I&apos;m Sam Shih</p>
              <p className="mt-1.5 text-base text-muted-foreground">Product engineer for founders</p>
              <p className="mt-1 text-sm font-medium text-emerald-700">Taking new projects</p>
            </div>
          </div>

          <h1
            className="hero-animate font-serif text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
            style={{ animationDelay: "0.08s" }}
          >
            You have the idea.
            <br />
            I&apos;ll turn it into a <em className="text-primary">product</em>.
          </h1>

          <p
            className="hero-animate mx-auto mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty lg:mx-0"
            style={{ animationDelay: "0.16s" }}
          >
            I design and build MVPs, web apps and AI-powered tools end to end, so you can launch, get real users and
            grow without hiring a team.
          </p>

          <div
            className="hero-animate mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.24s" }}
          >
            <BookCallButton className="w-full sm:w-auto" />
            <a
              href="#projects"
              className="group inline-flex h-14 items-center gap-1.5 px-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div
            className="hero-animate mt-10 flex items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="flex flex-shrink-0 -space-x-2">
              {clientAvatars.map(({ src, name }) => (
                <Image
                  key={src}
                  src={src}
                  alt={name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div className="text-left text-base">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="mt-0.5 text-muted-foreground">Rated 5.0 by founders and business owners</p>
            </div>
          </div>
        </div>

        <div className="hero-animate" style={{ animationDelay: "0.2s" }}>
          <ScreenshotStack />
        </div>
      </div>
    </section>
  );
}
