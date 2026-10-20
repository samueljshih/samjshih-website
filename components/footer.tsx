import { BookCallButton } from "@/components/book-call-button";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#testimonials", label: "Clients" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-4 pt-24 pb-28 md:pt-32 lg:pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl leading-[1.08] text-balance md:text-6xl">
            Have an idea? <em className="text-primary">Let&apos;s build it.</em>
          </h2>
          <p className="mx-auto mt-5 mb-9 max-w-lg text-xl text-muted-foreground">
            Tell me what you&apos;re imagining. I&apos;ll help you find the simplest way to bring it to life.
          </p>
          <BookCallButton />
        </div>

        <div className="mt-24 flex flex-col items-center gap-8 border-t border-border pt-10 md:flex-row md:justify-between">
          <Logo />
          <ul className="flex flex-wrap justify-center gap-x-6 text-base text-muted-foreground">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="inline-block py-2.5 transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 text-base text-muted-foreground md:flex-row md:justify-between">
          <a href="mailto:samjshih@gmail.com" className="inline-block py-2.5 transition-colors hover:text-foreground">
            samjshih@gmail.com
          </a>
          <p>San Francisco, CA · © {new Date().getFullYear()} Sam Shih</p>
        </div>
      </div>
    </footer>
  );
}
