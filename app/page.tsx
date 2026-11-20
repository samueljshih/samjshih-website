import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EngineeringProjectsSection } from "@/components/engineering-projects-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertsSection } from "@/components/experts-section"
import { PricingSection } from "@/components/pricing-section"
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
      <ExpertsSection />
      <ProcessSection />
      <PricingSection />
      <CalendlySection />
      <AboutSection />
      <Footer />
      <FloatingCta />
    </main>
  )
}
