"use client";

import { Button } from "@/components/ui/button";
import { Music, Linkedin, Instagram, ExternalLink } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-slate-50/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            A Little About Me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="/sam-headshot.webp"
              alt="Sam J. Shih professional headshot"
              className="w-64 h-64 rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              When I'm not building automation systems, you'll find me creating
              music or exploring new ventures. I believe in the power of
              technology to free up human creativity and potential. My goal is
              to help businesses focus on what they do best while AI handles the
              rest.
            </p>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              With a background in cognitive psychology and 5+ years in software
              engineering, I bring a unique perspective to automation -
              understanding both how people think and how technology works. I
              love seeing the moment when a business owner realizes they can get
              their time back through smart automation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent hover:bg-primary/5"
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/artist/2n7IGUXyUVO7ofiCiMo4lg?si=rF7oHFYQQdSdQvF6RplIRw",
                    "_blank"
                  )
                }
              >
                <Music className="w-4 h-4" />
                Listen on Spotify
                <ExternalLink className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent hover:bg-primary/5"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/samuelshih/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ExternalLink className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent hover:bg-primary/5"
                onClick={() =>
                  window.open("https://www.instagram.com/samjshih/", "_blank")
                }
              >
                <Instagram className="w-4 h-4" />
                Instagram
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
