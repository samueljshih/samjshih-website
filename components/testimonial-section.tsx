"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Star } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "10+", label: "Products & systems shipped" },
  { value: "5.0", label: "Average client rating" },
  { value: "100%", label: "Referral-based" },
];

const pullQuote = {
  text: "Sam turned what started as just an idea into a really polished, easy to use product.",
  author: "William Chung",
  title: "Founder, Top 25 Strategy Lab",
  image: "/clients/will.jpeg",
};

type Testimonial = {
  name: string;
  title: string;
  project: string;
  challenge: string;
  content: string;
  image: string;
  youtubeId?: string;
  videoUrl?: string;
  videoPoster?: string;
  caseStudyUrl?: string;
};

// Product builds first.
const testimonials: Testimonial[] = [
  {
    name: "Archana Kannan",
    title: "Founder, tinytask.ai",
    project: "MVP development",
    challenge: "Needed a technical co-founder to ship an MVP fast",
    content:
      "Sam jumped in right away wearing both the product and full-stack engineer hat. He took time to understand the problem and worked with me to develop the MVP. It was so easy to communicate with him. He brings genuine interest, high work ethic, and is really fun to work with.",
    image: "/clients/archana.jpeg",
    youtubeId: "5T12pxs-JQ8",
  },
  {
    name: "William Chung",
    title: "Founder, Top 25 Strategy Lab",
    project: "College admissions web app",
    challenge: "Had a product idea for advising students but no way to build it",
    content:
      "I wanted to build a web app to better advise students on the path to their dream colleges. Sam understood exactly what I was trying to accomplish and turned what started as just an idea into a really polished, easy to use product. He was extremely responsive, listened closely, and was quick to make adjustments along the way. I would definitely recommend Sam to anyone looking to bring a software product or business idea to life.",
    image: "/clients/will.jpeg",
    videoUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/will_chung_testimonial.mp4",
    videoPoster: "/clients/will_poster.jpeg",
  },
  {
    name: "Lia Garvin",
    title: "Team Management Consultant & Speaker",
    project: "Call prep AI agent",
    challenge: "Walking into discovery calls without client context",
    content:
      "Sam created an agent that connects my calendar, email, and industry news so anytime I have a new appointment, I have everything I need to blow that call out of the water. It's helped me feel more confident and connect with clients right away. He delivered a solution I can't live without now.",
    image: "/clients/lia.jpeg",
    youtubeId: "AjtF8fFIrpg",
    caseStudyUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/lia_garvin.pdf",
  },
  {
    name: "Coach Denney Choi",
    title: "Owner, Baem Jiu Jitsu",
    project: "AI lead follow-up system",
    challenge: "Missing leads from missed calls with no time to follow up",
    content:
      "There's core functional things required as a business owner that I can't touch because I'm so limited in my time. Sam implemented chatbots that not only save me time, but give me more support than I could ever produce myself. I'm working less but producing more. That's a win-win.",
    image: "/clients/denney.jpeg",
    youtubeId: "a5EGHrQ_r7A",
    caseStudyUrl: "https://rmhgbx0fotzcnj6l.public.blob.vercel-storage.com/samjshih_testimonials/baem_jiu_jitsu_case_study.pdf",
  },
  {
    name: "Stephen Brown",
    title: "Owner, Godfellas",
    project: "Nonprofit website",
    challenge: "Didn't know where to start with building an online presence",
    content:
      "When we first started, we weren't sure where to begin. Samuel helped guide us through the process from start to finish: website strategy, design concepts, layout, and launch. The final website helped us present our mission more clearly, start receiving donations, and create a stronger foundation for our nonprofit.",
    image: "/clients/stephen.jpeg",
    youtubeId: "lJgbZilXWBc",
  },
];

function VideoThumbnail({ testimonial }: { testimonial: Testimonial }) {
  const [playing, setPlaying] = useState(false);
  const { youtubeId, videoUrl, videoPoster, name } = testimonial;
  const poster = videoPoster ?? (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : null);

  if (!poster) return null;

  if (playing) {
    return (
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
        {videoUrl ? (
          <video
            src={videoUrl}
            poster={videoPoster}
            title={`${name} testimonial`}
            autoPlay
            controls
            playsInline
            className="h-full w-full object-contain"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play ${name} testimonial video`}
      className="group/video relative block aspect-[4/5] w-full overflow-hidden rounded-xl"
    >
      <Image
        src={poster}
        alt={`${name} testimonial`}
        fill
        sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 85vw"
        className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/video:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lift transition-transform duration-300 group-hover/video:scale-105">
          <svg className="ml-0.5 h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
      <VideoThumbnail testimonial={testimonial} />

      <div className="mt-5 flex gap-0.5" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
        ))}
      </div>

      <blockquote className="mt-3 text-[17px] leading-relaxed text-foreground/80 text-pretty">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      <div className="mt-auto space-y-4 pt-6">
        <dl className="space-y-1 border-t border-border pt-4 text-sm">
          <div className="flex gap-1.5">
            <dt className="font-medium text-foreground">Project:</dt>
            <dd className="text-muted-foreground">{testimonial.project}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="flex-shrink-0 font-medium text-foreground">Before:</dt>
            <dd className="text-muted-foreground">{testimonial.challenge}</dd>
          </div>
        </dl>

        {testimonial.caseStudyUrl && (
          <a
            href={testimonial.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 inline-flex items-center gap-1.5 py-2.5 text-base font-medium text-primary hover:underline underline-offset-4"
          >
            <FileText className="h-4 w-4" />
            Read the case study
          </a>
        )}

        <div className="flex items-center gap-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={44}
            height={44}
            className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
          />
          <div>
            <div className="text-lg font-medium">{testimonial.name}</div>
            <div className="text-[15px] text-muted-foreground">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="testimonials" className="border-y border-border bg-card px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Client stories"
          title={
            <>
              Trusted by founders and <em>business owners</em>
            </>
          }
        />

        {/* Pull quote */}
        <figure className="mx-auto mb-16 max-w-3xl text-center">
          <blockquote className="font-serif text-3xl leading-[1.2] text-balance md:text-[2.75rem]">
            &ldquo;{pullQuote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-7 flex items-center justify-center gap-3">
            <Image
              src={pullQuote.image}
              alt={pullQuote.author}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left text-base">
              <div className="font-medium">{pullQuote.author}</div>
              <div className="text-muted-foreground">{pullQuote.title}</div>
            </div>
          </figcaption>
        </figure>

        {/* Stats */}
        <dl className="mx-auto mb-16 grid max-w-3xl grid-cols-3 divide-x divide-border border-y border-border md:mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-5xl md:text-6xl">{stat.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground md:text-base">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div ref={revealRef} className="reveal-up">
          {/* Mobile: swipe carousel */}
          <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide md:hidden">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-[85vw] flex-shrink-0 snap-start">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground md:hidden">Swipe to see more →</p>

          {/* Flex-wrap so an odd last row stays centered */}
          <div className="hidden flex-wrap justify-center gap-6 md:flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="md:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-4xl">Have an idea of your own?</p>
          <p className="mx-auto mt-2 mb-8 max-w-md text-lg text-muted-foreground">
            Let&apos;s talk it through. 20 minutes, no pressure.
          </p>
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
