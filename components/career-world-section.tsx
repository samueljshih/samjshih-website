"use client";

import { ArrowUpRight } from "lucide-react";
import { BrowserChrome } from "@/components/browser-frame";
import { useAutoplayInView } from "@/hooks/use-autoplay-in-view";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CAREER_WORLD_URL } from "@/lib/career-world";

export function CareerWorldSection() {
  const revealRef = useScrollReveal();
  const videoRef = useAutoplayInView();

  return (
    <section id="career-world" className="px-4 pb-24 md:pb-32">
      <div
        ref={revealRef}
        className="reveal-up mx-auto max-w-6xl rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-10 lg:p-12"
      >
        <div className="flex flex-col items-center gap-6 pt-3 text-center sm:pt-0 lg:flex-row lg:items-end lg:justify-between lg:gap-14 lg:text-left">
          <div className="lg:max-w-xl">
            <div className="section-eyebrow">Just for fun</div>
            <h2 className="font-serif text-[2.6rem] leading-[1.06] text-balance md:text-6xl">
              My career, as a world you can <em>walk through</em>.
            </h2>
          </div>
          <div className="max-w-xl lg:max-w-sm lg:pb-1.5">
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
              I built my resume as a small 3D world. Walk from UC Irvine to today, catch a car, a plane and a cable
              car along the way, and see what I learned at each stop.
            </p>
            <a
              href={CAREER_WORLD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-lg font-medium text-background shadow-soft transition-colors duration-200 hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Play it
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* The button above is the accessible link; this one makes the preview clickable too. */}
        <a
          href={CAREER_WORLD_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className="mt-9 block rounded-2xl shadow-soft transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-lift lg:mt-12"
        >
          <BrowserChrome url={CAREER_WORLD_URL} className="rounded-2xl">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster="/career-world/poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/career-world/loop.mp4" type="video/mp4" media="(min-width: 640px)" />
              <source src="/career-world/loop-small.mp4" type="video/mp4" />
            </video>
          </BrowserChrome>
        </a>
      </div>
    </section>
  );
}
