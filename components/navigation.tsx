"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { BookCallButton } from "@/components/book-call-button";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#testimonials", label: "Clients" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);
  const solid = scrolled || isOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" aria-label="Sam J Shih, back to top" onClick={close}>
            <Logo />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="py-3 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <BookCallButton label="Book a call" size="md" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-mr-2 p-2 text-foreground lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-border pt-3 pb-5 lg:hidden">
            {links.map(({ href, label }) => (
              <a key={href} href={href} onClick={close} className="py-2.5 text-xl text-foreground">
                {label}
              </a>
            ))}
            <BookCallButton label="Book a call" className="mt-3 w-full" onClick={close} />
          </div>
        )}
      </div>
    </nav>
  );
}
