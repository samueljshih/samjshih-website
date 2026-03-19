"use client";

import { useEffect } from "react";

export function CalendlySection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Let&apos;s Find Where You&apos;re{" "}
            <span className="text-primary">Losing Time and Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            I&apos;ll review your website and workflow and show you:
          </p>
          <ul className="inline-flex flex-col items-start gap-3 text-left mx-auto mb-6">
            {[
              "Where your business looks outdated or unclear",
              "Where you're losing potential customers",
              "What you can improve quickly for the biggest impact",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-base text-slate-700">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground">No pressure. Just actionable insight.</p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Free AI &amp; Website Audit</h3>
            <p className="text-base text-muted-foreground max-w-md mx-auto mb-5">
              20-minute call where I identify your biggest opportunities for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["More conversions", "Faster response times", "Less manual work"].map((item) => (
                <span
                  key={item}
                  className="text-sm bg-blue-50 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Calendly embed */}
          <div className="calendly-embed-container mb-6">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/samuels-shih/20min"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Can&apos;t find a time?{" "}
              <a href="mailto:samjshih@gmail.com" className="text-primary hover:underline">
                Send me an email
              </a>{" "}
              and I&apos;ll work around your schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
