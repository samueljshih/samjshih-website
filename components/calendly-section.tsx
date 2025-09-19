"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export function CalendlySection() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="calendly" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Book a free 30-minute consultation to discuss your automation needs
            and see how I can help you save time and increase revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Free Consultation</h3>
            <p className="text-sm text-muted-foreground">
              30-minute strategy session to identify automation opportunities
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Quick Turnaround</h3>
            <p className="text-sm text-muted-foreground">
              Most projects completed within 2-4 weeks
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Quality Focused</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated to delivering measurable results
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Schedule Your Free Call</h3>
            <p className="text-muted-foreground">
              Choose a time that works for you. No sales pitch - just valuable
              insights about your automation potential.
            </p>
          </div>

          {/* Calendly embed */}
          <div className="calendly-embed-container mb-6">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/samuels-shih/30min"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Can't find a time that works?{" "}
              <a
                href="mailto:hello@samjshih.com"
                className="text-primary hover:underline"
              >
                Send me an email
              </a>{" "}
              and I'll work with your schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
