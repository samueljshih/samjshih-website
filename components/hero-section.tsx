"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#050b15]" />

        {/* Blue glow — top left */}
        <div
          className="hero-blob-1 absolute -top-32 -left-32 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 60%)",
          }}
        />

        {/* Cyan glow — bottom right */}
        <div
          className="hero-blob-2 absolute -bottom-32 -right-10 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 60%)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
            opacity: 0.035,
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-start lg:items-center">
          {/* Content Column — pushed below photo on mobile */}
          <div className="order-last lg:order-first text-center lg:text-left">
            {/* Badge */}
            <div className="hero-animate inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-950/50 border border-cyan-700/50 text-cyan-300 mb-8" style={{ animationDelay: "0.1s" }}>
              <span className="text-base">⚡</span>
              <span className="text-sm font-semibold">
                Website & AI Automation Engineer
              </span>
            </div>

            <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6 leading-[1.08] tracking-tight" style={{ animationDelay: "0.25s" }}>
              Turn Your Website Into a Revenue Machine Powered by AI
            </h1>

            <p className="hero-animate text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed" style={{ animationDelay: "0.4s" }}>
              I build high-converting websites and AI systems that capture leads, respond instantly, and run your business 24/7.
            </p>

            <div className="hero-animate flex flex-col gap-4 justify-center lg:justify-start items-stretch sm:items-center sm:flex-row mb-8" style={{ animationDelay: "0.55s" }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.6)] transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("calendly")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                👉 Get Your Free AI Audit
                <span className="ml-2 text-xl">→</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent border-2 border-white/25 text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold"
                onClick={() =>
                  document
                    .getElementById("testimonials")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Testimonials
              </Button>
            </div>

            {/* Pain bullets — hidden on mobile to keep CTA above fold */}
            <div className="hidden sm:block mb-8 text-left max-w-md mx-auto lg:mx-0">
              <p className="text-slate-400 text-sm mb-3">If your business is:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Getting traffic but not converting",
                  "Responding too slowly (or missing leads)",
                  "Wasting time on repetitive tasks",
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
                "Built for real businesses — not theory",
                "Focused on outcomes: more revenue, less work",
                "Fast execution. Clean systems. No fluff.",
              ].map((item) => (
                <p key={item} className="text-xs text-slate-400 leading-snug text-center lg:text-left">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Headshot Column — shown first on mobile */}
          <div className="hero-animate order-first lg:order-last flex justify-center lg:justify-start lg:pl-4" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow — isolated behind image with z-0 */}
              <div className="absolute inset-0 z-0 rounded-full bg-blue-500/20 blur-3xl scale-125" />
              <div className="absolute inset-0 z-0 rounded-full bg-cyan-400/15 blur-2xl scale-110" />
              {/* Decorative rings — also behind */}
              <div className="absolute -inset-2 z-0 rounded-full border border-white/10" />
              <div className="absolute -inset-4 z-0 rounded-full border border-white/5" />
              {/* Image — isolated on z-10 so blurs can't touch it */}
              <div className="relative z-10">
                <Image
                  src="/assets/sam_headshot_pic.png"
                  alt="Sam - Website & AI Automation Engineer"
                  width={288}
                  height={288}
                  priority
                  quality={100}
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-cover object-top rounded-full shadow-2xl border-4 border-white/15"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-full text-xs font-semibold shadow-lg text-white whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
