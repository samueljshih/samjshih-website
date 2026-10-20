import Image from "next/image";

type BrowserFrameProps = {
  url: string;
  screenshot: string;
  title: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function BrowserFrame({
  url,
  screenshot,
  title,
  sizes,
  priority,
  className = "",
  imageClassName = "",
}: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-card ${className}`}>
      <div className="flex h-7 items-center gap-3 border-b border-border bg-muted/60 px-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
        </div>
        <span className="truncate text-[11px] text-muted-foreground">
          {url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
        </span>
      </div>
      <div className="relative aspect-[2/1] overflow-hidden">
        <Image
          src={screenshot}
          alt={`${title} website`}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover object-top ${imageClassName}`}
        />
      </div>
    </div>
  );
}
