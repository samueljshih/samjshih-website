"use client";

import { useEffect, useRef } from "react";

export function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Fill base color so trail fade works correctly
      ctx.fillStyle = "#050b15";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resize();

    const fontSize = 13;
    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array.from({ length: cols }, () => -Math.floor(Math.random() * 60));

    const onResize = () => {
      resize();
      cols = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () => -Math.floor(Math.random() * 60));
    };
    window.addEventListener("resize", onResize);

    let animId: number;
    let last = 0;

    const tick = (now: number) => {
      animId = requestAnimationFrame(tick);
      if (now - last < 80) return; // ~12fps — slow and ambient
      last = now;

      // Fade trail
      ctx.fillStyle = "rgba(5, 11, 21, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < cols; i++) {
        const y = drops[i] * fontSize;
        if (y < 0) { drops[i]++; continue; }

        // Brighter on the leading character
        const isHead = drops[i] % 24 < 2;
        ctx.fillStyle = isHead
          ? "rgba(6, 182, 212, 0.55)"
          : "rgba(6, 182, 212, 0.13)";

        ctx.fillText(Math.random() > 0.5 ? "1" : "0", i * fontSize, y);
        drops[i]++;

        if (y > canvas.height && Math.random() > 0.978) {
          drops[i] = -Math.floor(Math.random() * 30);
        }
      }
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
