"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: "200,000+",
    title: "Annual Capacity (Units)",
  },
  {
    value: "15 Days",
    title: "Rapid Prototyping",
  },
  {
    value: "1%",
    title: "Free Spare Parts",
  },
  {
    value: "30+",
    title: "Export Countries",
  },
];

export default function ProductInfoWall() {
  const metricScrollRef = useRef<HTMLDivElement>(null);
  const [metricActiveIndex, setMetricActiveIndex] = useState(0);

  useEffect(() => {
    const container = metricScrollRef.current;
    if (!container) return;

    let rafId = 0;
    const updateActive = () => {
      const items = Array.from(
        container.querySelectorAll<HTMLElement>(".metric-item")
      );
      if (!items.length) return;

      const center = container.scrollLeft + container.clientWidth / 2;
      let nextIndex = 0;
      let closest = Infinity;
      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(itemCenter - center);
        if (distance < closest) {
          closest = distance;
          nextIndex = index;
        }
      });
      setMetricActiveIndex(nextIndex);
    };

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateActive);
    };

    const handleResize = () => {
      updateActive();
    };

    updateActive();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-xl font-semibold text-transparent sm:text-2xl md:text-4xl mb-4">
            Trusted by Logistics Leaders
          </h2>
          <p className="text-gray-400">
            Proof points from production, compliance, and fleet readiness.
          </p>
        </div>

        <div className="metric-grid" ref={metricScrollRef}>
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="metric-item group cursor-pointer transform-gpu transition-transform duration-500 hover:-rotate-1 hover:scale-105"
            >
              <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-blue-900/10 to-blue-500/5 text-white shadow-2xl backdrop-blur-2xl duration-700 hover:border-blue-300/40 hover:bg-blue-500/15 hover:shadow-3xl hover:shadow-blue-500/20">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-blue-300/10 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
                  <div
                    style={{ animationDelay: "0.5s" }}
                    className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent opacity-30 blur-3xl transition-all duration-700 group-hover:animate-bounce group-hover:scale-110 group-hover:opacity-60"
                  />
                  <div className="absolute left-10 top-10 h-16 w-16 rounded-full bg-blue-400/10 blur-xl group-hover:animate-ping" />
                  <div
                    style={{ animationDelay: "1s" }}
                    className="absolute bottom-16 right-16 h-12 w-12 rounded-full bg-blue-300/10 blur-lg group-hover:animate-ping"
                  />
                  <div className="absolute inset-0 -skew-x-12 translate-x-full bg-gradient-to-r from-transparent via-blue-500/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[-200%]" />
                </div>

                <div className="relative z-10 p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 transition-transform duration-300 group-hover:scale-105">
                      <p className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 bg-clip-text text-3xl font-bold text-transparent group-hover:animate-pulse">
                        {metric.value}
                      </p>
                    </div>

                    <div className="max-w-sm space-y-1">
                      <p className="text-sm font-semibold leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {metric.title}
                      </p>
                    </div>

                    <div className="mt-6 h-0.5 w-1/3 origin-center rounded-full bg-gradient-to-r from-transparent via-blue-500/70 to-transparent transition-transform duration-500 group-hover:animate-pulse group-hover:scale-x-[1.5] group-hover:scale-y-[2]" />
                  </div>
                </div>

                <div className="absolute left-0 top-0 h-20 w-20 rounded-br-3xl bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-3xl bg-gradient-to-tl from-blue-500/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="metric-dots" aria-hidden="true">
          {metrics.map((metric, index) => (
            <span
              key={metric.title}
              className={index === metricActiveIndex ? "metric-dot is-active" : "metric-dot"}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
