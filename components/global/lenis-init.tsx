"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LenisInit() {
  const pathname = usePathname();
  const lenisRef = useRef<import("lenis").default | null>(null);
  const pendingPauseRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;
    let initialized = false;
    const originalRestoration = history.scrollRestoration;
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
      if (initialized || cancelled) return;
      initialized = true;
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      history.scrollRestoration = "manual";
      lenisRef.current = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      if (pendingPauseRef.current) {
        lenisRef.current.stop();
      }

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      document.addEventListener("click", handleAnchorClick);
      rafId = requestAnimationFrame(raf);
    };

    const triggerInit = () => {
      void init();
      window.removeEventListener("wheel", triggerInit);
      window.removeEventListener("touchstart", triggerInit);
      window.removeEventListener("pointerdown", triggerInit);
      window.removeEventListener("keydown", triggerInit);
    };

    window.addEventListener("wheel", triggerInit, { passive: true });
    window.addEventListener("touchstart", triggerInit, { passive: true });
    window.addEventListener("pointerdown", triggerInit);
    window.addEventListener("keydown", triggerInit);

    return () => {
      cancelled = true;
      window.removeEventListener("wheel", triggerInit);
      window.removeEventListener("touchstart", triggerInit);
      window.removeEventListener("pointerdown", triggerInit);
      window.removeEventListener("keydown", triggerInit);
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      history.scrollRestoration = originalRestoration;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handlePause = () => {
      pendingPauseRef.current = true;
      lenisRef.current?.stop();
    };
    const handleResume = () => {
      pendingPauseRef.current = false;
      lenisRef.current?.start();
    };
    window.addEventListener("lenis:pause", handlePause as EventListener);
    window.addEventListener("lenis:resume", handleResume as EventListener);
    return () => {
      window.removeEventListener("lenis:pause", handlePause as EventListener);
      window.removeEventListener("lenis:resume", handleResume as EventListener);
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
