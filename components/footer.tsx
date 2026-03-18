import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="grain-section py-16 px-4 bg-[#0a1628]">
      <div className="container max-w-6xl mx-auto">

        {/* Closing CTA */}
        <div className="text-center mb-16 pb-16 border-b border-white/10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-400 mb-4">
            Ready to start?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s save you 10+ hours a week.
          </h2>
          <p className="text-slate-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            No fluff, no templates. A custom AI system built around your workflow — live within days.
          </p>
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] transition-all duration-300"
          >
            Book a Free Call →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">
                  samjshih@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AI Chatbots</li>
              <li>Lead Capture Systems</li>
              <li>Email & SMS Automation</li>
              <li>Custom Dashboards</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#calendly"
                  className="hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 Sam Shih. All rights reserved. Built with passion for
            automation.
          </p>
        </div>
      </div>
    </footer>
  );
}
