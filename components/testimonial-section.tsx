"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, FileText } from "lucide-react";

const testimonials = [
  {
    id: 2,
    name: "Lia Garvin",
    title: "Team Management Consultant & Speaker",
    project: "Call Prep Automation",
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
    content:
      "There's core functional things required as a business owner that I can't touch because I'm so limited in my time. Sam implemented chatbots that not only save me time, but give me more support than I could ever produce myself. I'm working less but producing more. That's a win-win.",
    rating: 5,
    image: "/clients/denney.jpeg",
    youtubeId: "a5EGHrQ_r7A",
    caseStudyUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/baem_jiu_jitsu_case_study.pdf",
  },
  {
    id: 3,
    name: "Archana Kannan",
    title: "Founder, tinytask.ai",
    project: "MVP Development",
    content:
      "Sam jumped in right away wearing both the product and full-stack engineer hat. He took time to understand the problem and worked with me to develop the MVP. It was so easy to communicate with him. He brings genuine interest, high work ethic, and is really fun to work with.",
    rating: 5,
    image: "/clients/archana.jpeg",
    youtubeId: "5T12pxs-JQ8",
  },
];

function YouTubePlayer({ youtubeId, name }: { youtubeId: string; name: string }) {
  return (
    <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden mb-4">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
        title={`${name} testimonial`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
}

export function TestimonialSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const revealRef = useScrollReveal();
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="testimonials" className="grain-section py-20 px-4 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">
            Client Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Real Results From <span className="text-primary">Real Businesses.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here&apos;s what clients are saying.
          </p>
        </div>

        <div ref={revealRef} className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 auto-rows-fr">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <Card className="glow-card brand-card-shadow overflow-hidden !py-0 !gap-0 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                {/* Video Player */}
                {testimonial.youtubeId && (
                  <YouTubePlayer
                    youtubeId={testimonial.youtubeId}
                    name={testimonial.name}
                  />
                )}

                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                      {testimonial.project}
                    </div>
                    {testimonial.caseStudyUrl && (
                      <a
                        href={testimonial.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        View Case Study
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-offset-2 ring-cyan-200"
                    />
                    <div>
                      <div className="font-semibold text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(index)}
                  className="w-8 h-8 p-0"
                >
                  {index + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
              }
              disabled={currentPage === totalPages - 1}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
