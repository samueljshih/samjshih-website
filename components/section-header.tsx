import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeader({ eyebrow, title, lede, align = "center" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={`mb-14 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="font-serif text-4xl leading-[1.08] text-balance md:text-5xl">{title}</h2>
      {lede && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">{lede}</p>
      )}
    </div>
  );
}
