"use client";

import { useEffect, useRef } from "react";

/**
 * Plays a muted video only while it is on screen, so it costs nothing until then.
 * With reduced motion the video never starts and its poster stays up.
 */
export function useAutoplayInView(threshold = 0.35) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Browsers may refuse playback (data saver, low power); the poster is the fallback.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
