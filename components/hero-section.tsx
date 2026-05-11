"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BinaryBackground } from "@/components/binary-background";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  // Parallax layer refs — ordered back-to-front
  const glowOuterRef = useRef<HTMLDivElement>(null);
  const glowInnerRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers = [
      { ref: glowOuterRef, xf: 20, yf: 14 },
      { ref: glowInnerRef, xf: 14, yf: 10 },
      { ref: ring1Ref,     xf: 5,  yf: 4  },
      { ref: ring2Ref,     xf: 7,  yf: 5  },
      { ref: imageWrapRef, xf: 3,  yf: 2  },
    ];

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

    let raf: number;
    const tick = () => {
      current.x = lerp(current.x, target.x, 0.07);
      current.y = lerp(current.y, target.y, 0.07);
      for (const { ref, xf, yf } of layers) {
        if (ref.current) {
          ref.current.style.transform = `translate(${current.x * xf}px, ${current.y * yf}px)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let cleanup: () => void;

    if (isTouchDevice) {
      // iOS 13+ needs explicit permission — request on first touch (a valid user gesture)
      document.addEventListener(
        "touchstart",
        () => {
          if (
            typeof DeviceOrientationEvent !== "undefined" &&
            typeof (DeviceOrientationEvent as any).requestPermission === "function"
          ) {
            (DeviceOrientationEvent as any).requestPermission().catch(() => {});
          }
        },
        { once: true }
      );

      const onOrient = (e: DeviceOrientationEvent) => {
        // gamma = left/right tilt (-90..90), beta = forward/back, offset 30° for natural hold angle
        target.x = clamp((e.gamma ?? 0) / 20, -1, 1);
        target.y = clamp(((e.beta ?? 0) - 30) / 20, -1, 1);
      };
      window.addEventListener("deviceorientation", onOrient);
      cleanup = () => window.removeEventListener("deviceorientation", onOrient);
    } else {
      const onMove = (e: MouseEvent) => {
        target.x = clamp((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2), -1, 1);
        target.y = clamp((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2), -1, 1);
      };
      const onLeave = () => { target.x = 0; target.y = 0; };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
      cleanup = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseleave", onLeave);
      };
    }

    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BinaryBackground />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(5,11,21,0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
            opacity: 0.04,
          }}
        />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center">
          {/* Content Column */}
          <div className="order-last lg:order-first text-center lg:text-left">
            <div className="hero-animate inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-950/50 border border-cyan-700/50 text-cyan-300 mb-8" style={{ animationDelay: "0.1s" }}>
              <span className="text-base">⚡</span>
              <span className="text-sm font-semibold">Website & AI Automation Engineer</span>
            </div>

            <h1 className="flex flex-col items-center lg:items-start leading-none gap-1 mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-archivo-black)" }}>
              <span className="hero-animate text-5xl md:text-6xl lg:text-7xl text-white" style={{ animationDelay: "0.25s" }}>
                Look Legit.
              </span>
              <span
                className="hero-animate text-5xl md:text-6xl lg:text-7xl"
                style={{ animationDelay: "0.35s", fontStyle: "italic", WebkitTextStroke: "2px white", WebkitTextFillColor: "transparent" }}
              >
                Run Smoother.
              </span>
              <span className="hero-animate text-5xl md:text-6xl lg:text-7xl text-cyan-400 shimmer-text" style={{ animationDelay: "0.45s" }}>
                With AI.
              </span>
            </h1>

            <p className="hero-animate text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed" style={{ animationDelay: "0.4s" }}>
              I build clean, modern websites and set up simple AI systems and automations that help your business look more credible, respond faster, and reduce repetitive work.
            </p>

            {/* Social proof strip */}
            <div className="hero-animate flex items-center justify-center lg:justify-start gap-3 mb-8" style={{ animationDelay: "0.45s" }}>
              <div className="flex -space-x-2">
                {["/clients/lia.jpeg", "/clients/denney.jpeg", "/clients/archana.jpeg"].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="client"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover border-2 border-[#050b15]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-300">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </span>
                <span className="text-slate-400">Trusted by 3+ businesses · 5.0 avg rating</span>
              </div>
            </div>

            <div className="hero-animate flex flex-col gap-4 justify-center lg:justify-start items-stretch sm:items-center sm:flex-row mb-8" style={{ animationDelay: "0.55s" }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.6)] transition-all duration-300"
                onClick={() => document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Your Free AI & Website Audit
                <span className="ml-2 text-xl">→</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent border-2 border-white/25 text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold"
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Testimonials
              </Button>
            </div>

            {/* Pain bullets */}
            <div className="mb-8 text-left max-w-md mx-auto lg:mx-0">
              <p className="text-slate-400 text-sm mb-3">If your business is:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Getting traffic but not converting",
                  "Responding too slowly or missing messages",
                  "Spending time on repetitive tasks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-cyan-900/60 border border-cyan-700/50 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 text-sm mb-1">You don&apos;t need more effort.</p>
              <p className="text-cyan-400 text-sm font-semibold">You need better systems.</p>
            </div>

            {/* Trust strip */}
            <div className="hero-animate grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-6 border-t border-white/10" style={{ animationDelay: "0.7s" }}>
              {[
                "Built for real businesses, not theory",
                "Focused on outcomes: better presentation, faster response, less manual work",
                "Fast execution. Clean systems. No fluff.",
              ].map((item) => (
                <p key={item} className="text-xs text-slate-400 leading-snug text-center lg:text-left">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Headshot Column — parallax layers */}
          <div className="hero-animate order-first lg:order-last flex justify-center" style={{ animationDelay: "0.3s" }}>
            {/* Outer container — this stays fixed as the anchor point */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">

              {/* Layer 1: outer glow blur — moves the most */}
              <div
                ref={glowOuterRef}
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-150 will-change-transform"
              />

              {/* Layer 2: inner glow blur */}
              <div
                ref={glowInnerRef}
                className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl scale-125 will-change-transform"
              />

              {/* Layer 3: outer decorative ring */}
              <div
                ref={ring2Ref}
                className="absolute -inset-6 rounded-full border border-white/8 will-change-transform"
              />

              {/* Layer 4: inner decorative ring */}
              <div
                ref={ring1Ref}
                className="absolute -inset-3 rounded-full border border-white/12 will-change-transform"
              />

              {/* Layer 5: headshot image — moves the least */}
              <div ref={imageWrapRef} className="absolute inset-0 will-change-transform">
                <Image
                  src="/assets/sam_headshot_pic.png"
                  alt="Sam - Website & AI Automation Engineer"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-top rounded-full shadow-2xl border-4 border-white/15 headshot-pulse"
                />
              </div>

              {/* Badge — fixed to bottom of anchor, not parallaxed */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-full text-xs font-semibold shadow-lg text-white whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Accepting New Clients
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-90 transition-opacity cursor-pointer"
        aria-label="Scroll to testimonials"
      >
        <span className="text-xs text-white/60 tracking-wide">See client results</span>
        <ChevronDown className="w-5 h-5 text-white/60 animate-bounce" />
      </button>
    </section>
  );
}
