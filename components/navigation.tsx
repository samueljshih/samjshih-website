"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const linkClass = scrolled
    ? "text-gray-700 hover:text-electric-blue-600 transition-colors text-sm font-medium"
    : "text-white/80 hover:text-white transition-colors text-sm font-medium";

  const mobileLinkClass = scrolled
    ? "text-left text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
    : "text-left text-white/80 hover:text-white transition-colors text-lg font-medium";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:scale-105 transition-transform duration-200"
          >
            <Logo size="md" variant={scrolled ? "dark" : "light"} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection("hero")} className={linkClass}>
              Home
            </button>
            <button onClick={() => scrollToSection("testimonials")} className={linkClass}>
              Testimonials
            </button>
            <button onClick={() => scrollToSection("services")} className={linkClass}>
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className={linkClass}>
              Projects
            </button>
            <button onClick={() => scrollToSection("about")} className={linkClass}>
              About
            </button>
            <Button
              onClick={() => scrollToSection("calendly")}
              className={
                scrolled
                  ? "bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white text-lg font-semibold px-6 py-3"
                  : "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 text-lg font-semibold px-6 py-3"
              }
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`lg:hidden py-4 border-t ${
              scrolled ? "border-gray-200/50 bg-white/95" : "border-white/10 bg-[#050b15]/95 backdrop-blur-md"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("hero")} className={mobileLinkClass}>
                Home
              </button>
              <button onClick={() => scrollToSection("testimonials")} className={mobileLinkClass}>
                Testimonials
              </button>
              <button onClick={() => scrollToSection("services")} className={mobileLinkClass}>
                Services
              </button>
              <button onClick={() => scrollToSection("projects")} className={mobileLinkClass}>
                Projects
              </button>
              <button onClick={() => scrollToSection("about")} className={mobileLinkClass}>
                About
              </button>
              <Button
                onClick={() => scrollToSection("calendly")}
                className={
                  scrolled
                    ? "bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white w-fit text-lg font-semibold px-6 py-3"
                    : "border border-white/30 bg-transparent text-white hover:bg-white/10 w-fit text-lg font-semibold px-6 py-3"
                }
              >
                Book Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
