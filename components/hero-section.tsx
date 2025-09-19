"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Elegant polygon background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>

        {/* Animated polygon shapes */}
        <div className="hero-polygon-1 absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-electric-blue-600/20 to-indigo-600/20 transform rotate-45 rounded-lg"></div>
        <div className="hero-polygon-2 absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transform rotate-12 rounded-lg"></div>
        <div className="hero-polygon-3 absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transform -rotate-12 rounded-lg"></div>
        <div className="hero-polygon-4 absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 transform rotate-45 rounded-lg"></div>
        <div className="hero-polygon-5 absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 transform -rotate-45 rounded-lg"></div>

        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.05'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64 15 25.98V8.66L30 0zM0 25.98l15-8.66v17.32L0 43.3V25.98zm60 0v17.32L45 25.98V8.66l15 8.66z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue-600/15 border border-electric-blue-600/25 text-electric-blue-600 mb-8 backdrop-blur-sm">
              <span className="text-lg">⚡</span>
              <span className="text-sm font-semibold">
                AI Automation Expert
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-balance mb-6 leading-tight">
              Hi, I'm <span className="text-electric-blue-600">Sam</span>
              <br />I Save Businesses 10+ Hours Per Week
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 text-pretty leading-relaxed">
              I help businesses eliminate repetitive tasks and scale operations
              through custom AI solutions. From chatbots to automated workflows,
              I build systems that work while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("calendly")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Free 30-Min Call
                <span className="ml-2 text-xl">→</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-background/90 backdrop-blur-sm border-2 border-secondary/60 text-secondary hover:bg-secondary/10 hover:border-secondary/80 transition-all duration-300 font-semibold"
                onClick={() =>
                  document
                    .getElementById("case-studies")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Case Studies
              </Button>
            </div>

            <div className="mt-12 text-base text-muted-foreground text-center lg:text-left">
              <p>Guaranteed results • Proven track record</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-electric-blue-600/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <Image
                src="/sam-headshot.webp"
                alt="Sam - AI Automation Expert"
                width={320}
                height={384}
                priority
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/30 backdrop-blur-sm"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Ready to Help! 👋
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
