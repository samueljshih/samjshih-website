"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star, FileText } from "lucide-react";

const stats = [
  { value: "4", label: "Businesses Transformed" },
  { value: "5.0 ★", label: "Average Rating" },
  { value: "100%", label: "Referral-Based" },
];

const heroQuote = {
  text: "I'm working less but producing more. That's a win-win.",
  author: "Coach Denney Choi",
  title: "Owner, Baem Jiu Jitsu",
  image: "/clients/denney.jpeg",
};

const testimonials = [
  {
    id: 2,
    name: "Lia Garvin",
    title: "Team Management Consultant & Speaker",
    project: "Call Prep Automation",
    challenge: "Walking into discovery calls without client context",
    content:
      "Sam created an agent that connects my calendar, email, and industry news so anytime I have a new appointment, I have everything I need to blow that call out of the water. It's helped me feel more confident and connect with clients right away. He delivered a solution I can't live without now.",
    rating: 5,
    image: "/clients/lia.jpeg",
    youtubeId: "AjtF8fFIrpg",
    caseStudyUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/lia_garvin.pdf",
  },
  {
    id: 1,
    name: "Coach Denney Choi",
    title: "Owner, Baem Jiu Jitsu",
    project: "AI-Powered Lead Follow-Up System",
    challenge: "Missing leads from missed calls with no time to follow up",
    content:
      "There's core functional things required as a business owner that I can't touch because I'm so limited in my time. Sam implemented chatbots that not only save me time, but give me more support than I could ever produce myself. I'm working less but producing more. That's a win-win.",
    rating: 5,
    image: "/clients/denney.jpeg",
    youtubeId: "a5EGHrQ_r7A",
    caseStudyUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/baem_jiu_jitsu_case_study.pdf",
  },
  {
    id: 4,
    name: "Stephen Brown",
    title: "Owner, Godfellas",
    project: "Nonprofit Website",
    challenge: "Didn't know where to start with building an online presence",
    content:
      "When we first started, we weren't sure where to begin. Samuel helped guide us through the process from start to finish: website strategy, design concepts, layout, and launch. The final website helped us present our mission more clearly, start receiving donations, and create a stronger foundation for our nonprofit.",
    rating: 5,
    image: "/clients/stephen.jpeg",
    youtubeId: "lJgbZilXWBc",
  },
  {
    id: 3,
    name: "Archana Kannan",
    title: "Founder, tinytask.ai",
    project: "MVP Development",
    challenge: "Needed a technical co-founder to ship an MVP fast",
    content:
      "Sam jumped in right away wearing both the product and full-stack engineer hat. He took time to understand the problem and worked with me to develop the MVP. It was so easy to communicate with him. He brings genuine interest, high work ethic, and is really fun to work with.",
    rating: 5,
    image: "/clients/archana.jpeg",
    youtubeId: "5T12pxs-JQ8",
  },
];

function VideoThumbnail({ youtubeId, name }: { youtubeId: string; name: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative w-full rounded-xl overflow-hidden mb-4 ${playing ? "aspect-[9/16]" : "h-48 md:h-auto md:aspect-[9/16]"}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={`${name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play ${name} testimonial video`}
      className="relative w-full aspect-[9/16] rounded-xl overflow-hidden mb-4 group/video block"
    >
      <Image
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={`${name} testimonial`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25 group-hover/video:bg-black/35 transition-colors duration-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 shadow-xl flex items-center justify-center group-hover/video:scale-110 transition-transform duration-200">
          <svg className="w-6 h-6 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export function TestimonialSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="testimonials" className="grain-section py-12 md:py-20 px-4 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      <div className="container max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="section-eyebrow justify-center">Client Results</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-balance">
            Real Results From <span className="text-primary">Real Businesses.</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here&apos;s what clients are saying.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-8 md:mb-14 py-4 md:py-6 border-y border-slate-200/80">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero Pull Quote */}
        <div className="relative mb-8 md:mb-14 max-w-2xl mx-auto text-center px-4">
          <div className="text-5xl md:text-7xl text-primary/15 font-serif leading-none select-none -mb-3 md:-mb-4">&ldquo;</div>
          <blockquote className="text-xl md:text-3xl font-semibold text-foreground leading-snug mb-4 md:mb-6">
            {heroQuote.text}
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <Image
              src={heroQuote.image}
              alt={heroQuote.author}
              width={44}
              height={44}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">{heroQuote.author}</div>
              <div className="text-xs text-muted-foreground">{heroQuote.title}</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div ref={revealRef} className="mb-8 md:mb-12">
          {/* Mobile: swipe carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-[85vw] snap-start">
                <Card className="glow-card brand-card-shadow overflow-hidden !py-0 !gap-0 h-full">
                  <CardContent className="p-4 flex flex-col h-full">

                  {/* Video Player */}
                  {testimonial.youtubeId && (
                    <VideoThumbnail youtubeId={testimonial.youtubeId} name={testimonial.name} />
                  )}

                  {/* Challenge badge */}
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                      Before
                    </span>
                    <span className="text-xs text-muted-foreground leading-snug">
                      {testimonial.challenge}
                    </span>
                  </div>

                  {/* Stars — larger */}
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                    <div className="inline-flex bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                      {testimonial.project}
                    </div>

                    {/* Case study as a full-width button */}
                    {testimonial.caseStudyUrl && (
                      <a
                        href={testimonial.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        View Full Case Study
                      </a>
                    )}

                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-offset-2 ring-cyan-200"
                      />
                      <div>
                        <div className="font-semibold text-base">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          </div>

          {/* Mobile swipe hint */}
          <p className="md:hidden text-center text-xs text-slate-400 mt-2">
            Swipe to see all testimonials →
          </p>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="h-full">
                <Card className="glow-card brand-card-shadow overflow-hidden !py-0 !gap-0 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {testimonial.youtubeId && (
                      <VideoThumbnail youtubeId={testimonial.youtubeId} name={testimonial.name} />
                    )}
                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                        Before
                      </span>
                      <span className="text-xs text-muted-foreground leading-snug">
                        {testimonial.challenge}
                      </span>
                    </div>
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                      <div className="inline-flex bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        {testimonial.project}
                      </div>
                      {testimonial.caseStudyUrl && (
                        <a
                          href={testimonial.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          View Full Case Study
                        </a>
                      )}
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-offset-2 ring-cyan-200"
                        />
                        <div>
                          <div className="font-semibold text-base">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Post-testimonial CTA */}
        <div className="text-center pt-6 md:pt-10 border-t border-gray-200">
          <p className="text-xl md:text-3xl font-bold mb-2 md:mb-3">Convinced? Let&apos;s talk.</p>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-md mx-auto">
            Book a free 20-minute audit and I&apos;ll show you exactly where your business can improve.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.6)] transition-all duration-300"
            onClick={() =>
              document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Free Audit →
          </Button>
        </div>
      </div>
    </section>
  );
}
