import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
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
      <div className="bg-gray-50/50">
        <CaseStudiesSection />
      </div>
      <EngineeringProjectsSection />
      <div className="bg-gray-50/50">
        <ServicesSection />
      </div>
      <TestimonialSection />
      <div className="bg-gray-50/50">
        <CalendlySection />
      </div>
      <AboutSection />
      <Footer />
    </main>
  )
}
