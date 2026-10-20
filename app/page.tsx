import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EngineeringProjectsSection } from "@/components/engineering-projects-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CalendlySection } from "@/components/calendly-section"
import { AboutSection } from "@/components/about-section"
import { FloatingCta } from "@/components/floating-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EngineeringProjectsSection />
      <TestimonialSection />
      <ServicesSection />
      <ProcessSection />
      <CalendlySection />
      <AboutSection />
      <Footer />
      <FloatingCta />
    </main>
  )
}
