import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EngineeringProjectsSection } from "@/components/engineering-projects-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CalendlySection } from "@/components/calendly-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="h-24 bg-gradient-to-b from-[#050b15] to-white" />
      <TestimonialSection />
      <ServicesSection />
      <EngineeringProjectsSection />
      <CalendlySection />
      <AboutSection />
      <Footer />
    </main>
  )
}
