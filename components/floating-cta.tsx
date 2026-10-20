"use client";

import { useState, useEffect } from "react";
import { BookCallButton } from "@/components/book-call-button";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const booking = document.getElementById("calendly");
    let pastHero = false;
    let bookingInView = false;
    const update = () => setVisible(pastHero && !bookingInView);

    const onScroll = () => {
      pastHero = window.scrollY > 600;
      update();
    };
    // Hide while the booking widget itself is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      bookingInView = entry.isIntersecting;
      update();
    });
    if (booking) observer.observe(booking);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 ease-[var(--ease-out-expo)] lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="border-t border-border bg-background/90 p-3 backdrop-blur-md">
        <BookCallButton className="w-full" />
      </div>
    </div>
  );
}
