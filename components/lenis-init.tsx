"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisInit() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);
      if (!element) return;

      event.preventDefault();
      lenis.scrollTo(element, { offset: -80, immediate: false });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", handleAnchorClick);

    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
