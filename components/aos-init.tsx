
"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const [{ default: AOS }] = await Promise.all([
        import("aos"),
        import("aos/dist/aos.css"),
      ]);
      if (cancelled) return;
      AOS.init({
        once: true,
        disable: "phone",
        duration: 600,
        easing: "ease-out-sine",
      });
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
