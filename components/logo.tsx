import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/assets/samjshih_logo.jpeg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg border border-border object-contain"
      />
      <div className="flex flex-col text-left leading-none">
        <span className="font-serif text-xl">Sam J Shih</span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Product engineer
        </span>
      </div>
    </div>
  );
}
