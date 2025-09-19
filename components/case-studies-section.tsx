"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock,
  Target,
  AlertCircle,
  DollarSign,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    company: "Baem Jiu Jitsu",
    industry: "Martial Arts",
    title: "Automating Lead Follow-Up",
    description:
      "Built AI-powered chatbot with Twilio SMS integration for automatic missed call follow-up.",
    category: "Lead Generation",
    metrics: [
      { label: "Follow-up Rate", value: "100%", icon: TrendingUp },
      { label: "Availability", value: "24/7", icon: Clock },
      { label: "Time Saved", value: "Hours Weekly", icon: Zap },
    ],
    testimonial: "This system gave me back hours every week.",
    author: "Coach Denney Choi",
    tools: ["Chatbase", "Twilio", "Zapier"],
    image: "/modern-business-logo.png",
  },
  {
    id: 2,
    company: "Leagarvin",
    industry: "Professional Services",
    title: "Client Onboarding Automation",
    description:
      "Streamlined client intake process with automated document collection and scheduling.",
    category: "Process Automation",
    metrics: [
      { label: "Setup Time", value: "75% Faster", icon: Zap },
      { label: "Error Rate", value: "90% Reduced", icon: AlertCircle },
      { label: "Client Satisfaction", value: "95%", icon: Users },
    ],
    testimonial: "Our onboarding is now seamless and professional.",
    author: "Sarah Johnson, CEO",
    tools: ["Zapier", "Airtable", "Calendly"],
    image: "/saas-platform-logo.png",
  },
  {
    id: 3,
    company: "Archna",
    industry: "E-commerce",
    title: "Inventory Management System",
    description:
      "Automated inventory tracking and reorder notifications with real-time analytics.",
    category: "Operations",
    metrics: [
      { label: "Stock Accuracy", value: "99.5%", icon: Target },
      { label: "Reorder Time", value: "80% Faster", icon: BarChart3 },
      { label: "Cost Savings", value: "$50K/year", icon: DollarSign },
    ],
    testimonial: "Never run out of stock again. This system is incredible.",
    author: "Mike Chen, Operations Manager",
    tools: ["Python", "APIs", "Slack"],
    image: "/health-tech-logo.png",
  },
];

const categories = [
  "All",
  "Lead Generation",
  "Process Automation",
  "Operations",
];

export function CaseStudiesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const filteredStudies = caseStudies.filter((study) => {
    const matchesSearch =
      study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  const currentStudies = filteredStudies.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="case-studies" className="py-20 px-4 bg-slate-50/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See how AI automation transformed these companies' operations and
            bottom line.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {currentStudies.map((study) => (
            <Card
              key={study.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {study.industry}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {study.category}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-balance">
                  {study.company}
                </h3>
                <h4 className="text-xl font-semibold text-primary mb-4">
                  {study.title}
                </h4>
                <p className="text-muted-foreground text-base mb-6 text-pretty">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {study.metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <IconComponent className="w-4 h-4 text-primary mr-1" />
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {study.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <blockquote className="text-sm italic text-muted-foreground mb-2">
                    "{study.testimonial}"
                  </blockquote>
                  <cite className="text-xs font-medium text-primary">
                    — {study.author}
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
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
