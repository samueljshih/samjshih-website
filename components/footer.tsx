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
            Let&apos;s Find Where You&apos;re Losing Time and Missing Opportunities
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            I&apos;ll walk through your website and workflow and show you where you can improve conversions and automate key parts of your business. No pressure. Just actionable insights.
          </p>
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] transition-all duration-300"
          >
            Book Your Free Audit →
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
            <ul className="space-y-2 text-sm text-slate-400 flex flex-col items-center md:items-start">
              <li>Websites</li>
              <li>AI Systems</li>
              <li>Automations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
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
                <a href="#projects" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            AI systems and websites designed to help you make more money and work less.
          </p>
          <p className="text-xs text-slate-600 mt-2">
            © 2025 Sam Shih. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
