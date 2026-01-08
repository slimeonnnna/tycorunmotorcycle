"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LenisInit() {
  const pathname = usePathname();
  const lenisRef = useRef<import("lenis").default | null>(null);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;
    const originalRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";
    const handleAnchorClick = (event: MouseEvent) => {
      if (!lenisRef.current) return;
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
      lenisRef.current.scrollTo(element, { offset: -80, immediate: false });
      history.replaceState(null, "", hash);
    };

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenisRef.current = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
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
      lenisRef.current?.destroy();
      lenisRef.current = null;
      history.scrollRestoration = originalRestoration;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    history.scrollRestoration = "manual";
    const reset = () => {
      lenisRef.current?.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    const rafId = requestAnimationFrame(reset);
    const timeoutId = window.setTimeout(reset, 0);
    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
