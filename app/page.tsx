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
      <TestimonialSection />
      <div className="bg-gray-50/50">
        <ServicesSection />
      </div>
      <EngineeringProjectsSection />
      <div className="bg-gray-50/50">
        <CalendlySection />
      </div>
      <AboutSection />
      <Footer />
    </main>
  )
}
