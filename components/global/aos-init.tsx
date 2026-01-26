
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/product/")) {
      return;
    }
    let cancelled = false;
    const init = async () => {
      const { default: AOS } = await import("aos");
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
  }, [pathname]);

  return null;
}
