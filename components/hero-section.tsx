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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column — pushed below photo on mobile */}
          <div className="order-last lg:order-first text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-950/50 border border-cyan-700/50 text-cyan-300 mb-8">
              <span className="text-base">⚡</span>
              <span className="text-sm font-semibold">
                Website & AI Systems Specialist
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6 leading-[1.08] tracking-tight">
              Use AI and Better Systems to Make More Money and Run Your Business More Efficiently
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed">
              I build high-converting websites and AI customer support systems that help you capture more customers, respond instantly, and eliminate repetitive work.
            </p>

            {/* Pain bullets */}
            <div className="mb-8 text-left max-w-md mx-auto lg:mx-0">
              <p className="text-slate-400 text-sm mb-3">If you&apos;re currently:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Getting website visitors but not enough conversions",
                  "Missing messages or responding too slowly",
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
              <p className="text-cyan-400 text-sm font-semibold">
                👉 There&apos;s a better way to run your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.6)] transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("calendly")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Your Free Website & AI Audit
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

            {/* Trust strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-6 border-t border-white/10">
              {[
                "Built for real businesses — not just demos",
                "Focused on results: more conversions, less manual work",
                "Fast execution. Clean systems. No fluff.",
              ].map((item) => (
                <p key={item} className="text-xs text-slate-400 leading-snug text-center lg:text-left">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Headshot Column — shown first on mobile */}
          <div className="order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl rotate-6 scale-110" />
              <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl blur-2xl -rotate-3 scale-105" />
              <Image
                src="/sam-headshot.webp"
                alt="Sam - Website & AI Systems Specialist"
                width={320}
                height={384}
                priority
                className="relative w-52 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-full text-xs font-semibold shadow-lg text-white">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
