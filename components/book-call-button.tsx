import { ArrowRight } from "lucide-react";

type BookCallButtonProps = {
  label?: string;
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const sizes = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export function BookCallButton({
  label = "Book a free product call",
  size = "lg",
  className = "",
  onClick,
}: BookCallButtonProps) {
  return (
    <a
      href="#calendly"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary font-medium text-primary-foreground shadow-soft transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${sizes[size]} ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}
