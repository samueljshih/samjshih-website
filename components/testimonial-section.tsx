"use client";

import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, FileText } from "lucide-react";

const testimonials = [
  {
    id: 2,
    name: "Lia Garvin",
    title: "Team Management Consultant & Speaker",
    project: "Call Prep Automation",
    content:
      "Sam created an agent that connects my calendar, email, and industry news so anytime I have a new appointment, I have everything I need to blow that call out of the water. It's helped me feel more confident and connect with clients right away. He delivered a solution I can't live without now.",
    rating: 5,
    image: "/lia.jpeg",
    videoUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/lia_garvin.mp4",
    videoStartTime: 1,
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
    image: "/denney.jpeg",
    videoUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/denney.mp4",
    videoStartTime: 4,
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
    image: "/archana.jpeg",
    videoUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/archana.MP4",
    videoStartTime: 1,
  },
];

function VideoPlayer({ videoUrl, name, startTime = 1 }: { videoUrl: string; name: string; startTime?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Seek to startTime when video can be seeked
  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      setIsReady(true);
    }
  };

  return (
    <div 
      className="relative w-full aspect-[9/16] bg-black rounded-lg overflow-hidden mb-4 group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={`${videoUrl}#t=${startTime}`}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        muted={isMuted}
        playsInline
        loop
        preload="auto"
        onLoadedData={handleLoadedData}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Play/Pause overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={togglePlay}
      >
        {!isPlaying && (
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors">
            <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
          </div>
        )}
      </div>

      {/* Bottom controls */}
      <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>
          <button 
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </div>
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
    <section id="testimonials" className="grain-section py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">
            Client Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real feedback from businesses that transformed their operations with
            AI automation
          </p>
        </div>

        <div ref={revealRef} className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 auto-rows-fr">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <Card className="glow-card brand-card-shadow overflow-hidden !py-0 !gap-0 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                {/* Video Player */}
                {testimonial.videoUrl && (
                  <VideoPlayer 
                    videoUrl={testimonial.videoUrl} 
                    name={testimonial.name} 
                    startTime={testimonial.videoStartTime}
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
