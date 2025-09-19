"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Coach Denney Choi",
    title: "Owner, Baem Jiu Jitsu",
    content:
      "There are core things I need to handle as the business owner — but I simply don't have the time. This system gave me back hours every week.",
    rating: 5,
    image: "/professional-business-owner-headshot.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CEO, Leagarvin",
    content:
      "Our onboarding is now seamless and professional. Sam's automation reduced our setup time by 75% and virtually eliminated errors.",
    rating: 5,
    image: "/professional-business-owner-headshot.png",
  },
  {
    id: 3,
    name: "Mike Chen",
    title: "Operations Manager, Archna",
    content:
      "Never run out of stock again. This inventory system is incredible - 99.5% accuracy and $50K saved annually.",
    rating: 5,
    image: "/professional-business-owner-headshot.png",
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    title: "Founder, TechStart Solutions",
    content:
      "The automation system completely transformed our business. Revenue increased 40% while our workload decreased significantly.",
    rating: 5,
    image: "/professional-business-owner-headshot.png",
  },
  {
    id: 5,
    name: "David Park",
    title: "Director, Growth Co",
    content:
      "Sam's AI solutions are game-changing. We automated our entire lead qualification process and saw immediate results.",
    rating: 5,
    image: "/professional-business-owner-headshot.png",
  },
  {
    id: 6,
    name: "Lisa Wong",
    title: "VP Operations, Scale Inc",
    content:
      "Professional, efficient, and results-driven. The custom workflow Sam built saves us 25 hours per week.",
    rating: 5,
    image: "/professional-business-owner-headshot.png",
  },
];

export function TestimonialSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real feedback from businesses that transformed their operations with
            AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="text-sm text-muted-foreground mb-6 text-pretty leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
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
              </CardContent>
            </Card>
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
