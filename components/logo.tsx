import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
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
      {/* Logo Icon - Modern Tech Design */}
      <div className={`${sizeClasses[size]} relative group`}>
        {/* Main container with gradient background */}
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-electric-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center relative overflow-hidden shadow-lg">
          {/* Inner geometric layers */}
          <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-white/20 to-transparent"></div>

          {/* Stylized "S" with modern design */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-4 h-4 relative">
              {/* S shape using geometric elements */}
              <div className="absolute top-0 left-0 w-2 h-1 bg-white rounded-full"></div>
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-2 left-0 w-2 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-2 left-0 w-2 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-2 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Animated tech elements */}
          <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1 left-1 w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.7s" }}
          ></div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Floating accent dots */}
        <div
          className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.8s" }}
        ></div>
      </div>

      {/* Text with modern typography */}
      <div className="flex flex-col">
        <span
          className={`${textSizes[size]} font-bold bg-gradient-to-r from-electric-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight`}
        >
          Sam J Shih
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
          AI AUTOMATION
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
