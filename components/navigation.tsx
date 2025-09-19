"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:scale-105 transition-transform duration-200"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("calendly")}
              className="bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white text-lg font-semibold px-6 py-3"
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-left text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-electric-blue-600 transition-colors text-lg font-medium"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection("calendly")}
                className="bg-gradient-to-r from-electric-blue-600 to-indigo-600 hover:from-electric-blue-700 hover:to-indigo-700 text-white w-fit text-lg font-semibold px-6 py-3"
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
