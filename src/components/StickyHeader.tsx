"use client";

import { useEffect, useRef, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topBar = topBarRef.current;
    const container = containerRef.current;
    if (!topBar || !container) return;

    // Measure the existing responsive bar, including its border.
    const measure = () => {
      container.style.setProperty("--top-bar-height", `${topBar.getBoundingClientRect().height}px`);
    };
    const onScroll = () => {
      // Restore only at the top, avoiding toggles around the hide threshold.
      setScrolled((previous) => window.scrollY > 24 || (window.scrollY > 0 && previous));
    };
    measure();
    onScroll();
    const observer = new ResizeObserver(measure);
    observer.observe(topBar);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 z-50 flex flex-col w-full transition-transform duration-300 ease-out motion-reduce:transition-none"
      style={{ transform: scrolled ? "translateY(calc(-1 * var(--top-bar-height, 0px)))" : "translateY(0)" }}
    >
      {/* Keep layout height stable so hiding the bar cannot change scrollY. */}
      <div ref={topBarRef} inert={scrolled} aria-hidden={scrolled}>
        <TopBar />
      </div>
      <Header />
    </div>
  );
}
