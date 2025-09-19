"use client"

import { Button } from "@/components/ui/button"
export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/tech-polygon-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3, // Increased opacity for better visibility
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>{" "}
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.02) 1px, transparent 0)`, // Reduced dot pattern opacity for better balance
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue-600/15 border border-electric-blue-600/25 text-electric-blue-600 mb-8 backdrop-blur-sm">
              <span className="text-lg">⚡</span>
              <span className="text-sm font-semibold">AI Automation Expert</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
              Hi, I'm <span className="text-electric-blue-600">Sam</span>
              <br />I Save Businesses 20+ Hours Per Week
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 text-pretty">
              I help businesses eliminate repetitive tasks and scale operations through custom AI solutions. From
              chatbots to automated workflows, I build systems that work while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Free 30-Min Call
                <span className="ml-2">→</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-background/90 backdrop-blur-sm border-2 border-secondary/60 text-secondary hover:bg-secondary/10 hover:border-secondary/80 transition-all duration-300 font-semibold"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Case Studies
              </Button>
            </div>

            <div className="mt-12 text-sm text-muted-foreground text-center lg:text-left">
              <p>Trusted by 50+ businesses • Average ROI: 400%</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-electric-blue-600/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <img
                src="/sam-headshot.webp"
                alt="Sam - AI Automation Expert"
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
  )
}
