"use client";

import { useEffect } from "react";

export default function LenisInit() {
  useEffect(() => {
    let cancelled = false;
    let lenis: import("lenis").default | null = null;
    let rafId = 0;
    const handleAnchorClick = (event: MouseEvent) => {
      if (!lenis) return;
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

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      document.addEventListener("click", handleAnchorClick);
      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      cancelled = true;
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
