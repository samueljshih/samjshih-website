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
    <div className={`mb-14 md:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="font-serif text-[2.6rem] leading-[1.06] text-balance md:text-6xl">{title}</h2>
      {lede && (
        <p className="mt-5 text-xl leading-relaxed text-muted-foreground text-pretty">{lede}</p>
      )}
    </div>
  );
}
