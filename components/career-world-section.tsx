"use client";

import { ArrowUpRight } from "lucide-react";
import { BrowserChrome } from "@/components/browser-frame";
import { useAutoplayInView } from "@/hooks/use-autoplay-in-view";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/** The walkable 3D career world (samjshih-play repo). */
const CAREER_WORLD_URL = "https://play.samjshih.com";

export function CareerWorldSection() {
  const revealRef = useScrollReveal();
  const videoRef = useAutoplayInView();

  return (
    <section id="career-world" className="px-4 pb-24 md:pb-32">
      <div
        ref={revealRef}
        className="reveal-up mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12 lg:p-12"
      >
        <div className="text-center lg:text-left">
          <div className="section-eyebrow">Just for fun</div>
          <h2 className="font-serif text-[2.6rem] leading-[1.06] text-balance md:text-5xl">
            My career, as a world you can <em>walk through</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty lg:mx-0">
            I built my resume as a small 3D world. Walk from UC Irvine to today, catch a car, a plane and a cable car
            along the way, and see what I learned at each stop.
          </p>
          <a
            href={CAREER_WORLD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-lg font-medium text-background shadow-soft transition-colors duration-200 hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Play it
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* The button above is the accessible link; this one makes the preview clickable too. */}
        <a
          href={CAREER_WORLD_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className="group block rounded-2xl shadow-soft transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-lift"
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
              <source src="/career-world/loop.mp4" type="video/mp4" />
            </video>
          </BrowserChrome>
        </a>
      </div>
    </section>
  );
}
