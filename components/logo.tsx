import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

export function Logo({ className = "", size = "md", variant = "dark" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/assets/samjshih_logo.jpeg"
          alt="Sam J Shih logo"
          width={48}
          height={48}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`${textSizes[size]} font-bold bg-gradient-to-r ${
            variant === "light"
              ? "from-white to-sky-300"
              : "from-electric-blue-600 to-indigo-600"
          } bg-clip-text text-transparent leading-tight`}
        >
          Sam J Shih
        </span>
        <span
          className={`text-xs font-medium tracking-widest uppercase ${
            variant === "light" ? "text-slate-300/70" : "text-muted-foreground"
          }`}
        >
          AI SYSTEMS & WEBSITES
        </span>
      </div>
    </div>
  );
}

// Alternative minimal version
export function LogoMinimal({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      {/* Minimal geometric logo */}
      <div className="w-full h-full relative">
        {/* Main shape - stylized S */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-600 to-indigo-600 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-1 bg-white rounded-lg transform rotate-45"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-electric-blue-600 to-indigo-600 rounded-lg transform rotate-45"></div>

        {/* Tech accent */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
      </div>
    </div>
  );
}
