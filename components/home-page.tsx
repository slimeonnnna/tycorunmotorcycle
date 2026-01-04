
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Utility Hook: useMousePosition (Merged) ---
interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

// --- Sub-Component: Spotlight (Merged) ---
type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

function Spotlight({ children, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    containerRef.current &&
      setBoxes(
        Array.from(containerRef.current.children).map(
          (el) => el as HTMLElement,
        ),
      );
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);
    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [boxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

// --- Sub-Component: HeroCard (Merged) ---
function HeroCard() {
  return (
    <div className="relative flex justify-center items-center py-12 md:py-20">
      {/* Interactive Card */}
      {/* We scale it up on medium screens to act as a proper hero visual */}
      <div className="relative transform md:scale-150">
        <div className="hc-card cursor-pointer group relative z-10">
          <div className="hc-card-border"></div>
          <div className="hc-content">
            <div className="hc-logo-container">
              {/* Logo Part 1: The 'S' Icon */}
              <div className="hc-logo-icon">
                <svg version="1.1" width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                  <circle fill="#1D4ED8" cx="32" cy="32" r="32" />
                  <path fill="#0F172A" d="M17 31c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6S13.7 31 17 31 M17 28c-5 0-9 4-9 9s4 9 9 9s9-4 9-9S22 28 17 28L17 28z"/>
                  <path fill="#0F172A" d="M47 31c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6S43.7 31 47 31 M47 28c-5 0-9 4-9 9s4 9 9 9s9-4 9-9S52 28 47 28L47 28z"/>
                  <polyline fill="none" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="18,36.5 33,36.5 35,35" />
                  <line fill="none" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="43" y1="21.1" x2="44" y2="23" />
                  <path fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M42 26c0 0 7-3 13 2" />
                  <path fill="#60A5FA" d="M26 25.5h-4.6c8.8 10.3 15.6 4 15.6 4C37 26.6 32 25.5 26 25.5z" />
                  <path fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M9 27c0 0 2-1.5 5-1.5h12c6 0 11 1.1 11 4c0 0-5 6.5-14-3.5" />
                  <polyline fill="none" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="32,18.5 37,18.5 47,37" />
                </svg>
              </div>
              
              {/* Logo Part 2: The Text 'TYCORUN' */}
              <div className="hc-logo-text flex items-center justify-center">
                <span className="block relative -top-[1px] font-nacelle text-xl font-semibold leading-none text-gray-100 tracking-tight">TYCORUN</span>
              </div>
              
              <span className="hc-trail"></span>
            </div>
          <span className="hc-logo-bottom-text">tycorun.com</span>
          </div>
          <span className="hc-bottom-text">OEM / ODM Supply</span>
        </div>
        {/* Ripple Element */}
        <div className="hc-ripple z-0"></div>
      </div>
    </div>
  );
}

// --- Sub-Component: Hero ---
function Hero() {
  return (
    <section className="hero-grid-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Leading Electric Motorcycle Manufacturer for Global OEMs
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-400"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Factory-direct OEM/ODM supply with SKD/CKD options, market-ready
                compliance support, and scalable manufacturing for global importers.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/product"
                  >
                    <span className="relative inline-flex items-center">
                      Explore OEM Catalog
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="/contact"
                  >
                    Get Factory Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay={800}>
            <HeroCard />
          </div>
          <div className="pt-6 md:pt-12">
            <CapacityDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: TrustBadgeStrip ---
function TrustBadgeStrip() {
  return (
    <div className="border-gray-800 bg-gray-950/70 backdrop-blur">
      <div className="mx-auto w-full">
        <div className="w-full rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/70 via-blue-950/40 to-slate-950/60 overflow-hidden relative transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]">
          <div className="relative z-10 flex flex-col md:flex-row">
            <div className="p-4 md:w-1/2">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-blue-300/30 bg-gradient-to-br from-blue-500 to-blue-600 text-[0.6rem] font-bold leading-tight text-white shadow-lg">
                  <div className="text-center">TYCO<br />RUN</div>
                </div>
                <div className="min-w-0">
                  <h2 title="TYCORUN OEM Supply" className="truncate text-lg font-bold text-white/90">
                    TYCORUN OEM Supply
                  </h2>
                  <span className="mt-1 inline-block rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-200/90">
                    Production Ready
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-xs font-semibold text-white/80">Core Features</h3>
                <div className="flex flex-wrap -mx-1">
                  {[
                    "OEM / ODM Programs",
                    "SKD / CKD Options",
                    "Scalable Manufacturing",
                    "Compliance Support",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="m-0.5 rounded-full border border-blue-300/20 bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-100/80 shadow-sm transition-all duration-300 hover:bg-blue-500/20"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/2">
              <div>
                <h3 className="mb-2 text-xs font-semibold text-white/80">Other Features</h3>
                <ul className="grid grid-cols-1 gap-2 text-xs text-blue-100/70">
                  {[
                    "EEC Certified",
                    "ISO 9001 Factory",
                    "DOT Compliant",
                    "UN38.3 Battery Safety",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="mr-2 h-3 w-3 text-blue-200/80"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    className="inline-flex items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-100 transition-colors hover:bg-blue-500/25"
                    href="/contact"
                  >
                    Inquiry Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-Component: CapacityDashboard ---
function CapacityDashboard() {
  const metrics = [
    {
      value: "200,000+",
      title: "Annual Capacity (Units)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8 text-white drop-shadow-lg transition-colors duration-300 group-hover:text-gray-200"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 24h24" />
          <path d="M6 24V14l6-4v14" />
          <path d="M14 24V10l6-4v18" />
          <path d="M22 24V12l4-2v14" />
          <path d="M6 16h6" />
          <path d="M14 12h6" />
          <path d="M23 8l3-3" />
          <path d="M26 5h-3" />
          <path d="M26 5v3" />
        </svg>
      ),
    },
    {
      value: "15 Days",
      title: "Rapid Prototyping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8 text-white drop-shadow-lg transition-colors duration-300 group-hover:text-gray-200"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="16" cy="18" r="9" />
          <path d="M16 18l4-3" />
          <path d="M12 6h8" />
          <path d="M14 4h4" />
          <path d="M22 6l2-2" />
          <path d="M6 18h4" />
          <path d="M8 22h3" />
        </svg>
      ),
    },
    {
      value: "1%",
      title: "Free Spare Parts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8 text-white drop-shadow-lg transition-colors duration-300 group-hover:text-gray-200"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 18h6l3-3 4 4 7-7" />
          <path d="M24 10h4v4" />
          <rect x="6" y="20" width="10" height="8" rx="2" />
          <path d="M11 22v4" />
          <path d="M20 22l4 4" />
          <path d="M24 22l-4 4" />
        </svg>
      ),
    },
    {
      value: "30+",
      title: "Export Countries",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8 text-white drop-shadow-lg transition-colors duration-300 group-hover:text-gray-200"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="16" cy="16" r="10" />
          <path d="M6 16h20" />
          <path d="M16 6c3 3.5 3 16.5 0 20" />
          <path d="M16 6c-3 3.5-3 16.5 0 20" />
          <path d="M23 9l3-2" />
          <path d="M24 13l4 1" />
          <circle cx="23" cy="9" r="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="border-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="py-10 md:py-20">
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="group cursor-pointer transform-gpu transition-transform duration-500 hover:-rotate-1 hover:scale-105"
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
                      <div className="relative mb-6">
                        <div className="rounded-full border border-blue-200/30 bg-blue-500/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 hover:shadow-blue-400/30">
                          <div className="transition-transform duration-700 group-hover:rotate-[360deg]">
                            {metric.icon}
                          </div>
                        </div>
                      </div>

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

                      <div className="mt-4 flex space-x-2 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="h-2 w-2 rounded-full bg-blue-400/80 group-hover:animate-bounce" />
                        <div
                          style={{ animationDelay: "0.1s" }}
                          className="h-2 w-2 rounded-full bg-blue-400/80 group-hover:animate-bounce"
                        />
                        <div
                          style={{ animationDelay: "0.2s" }}
                          className="h-2 w-2 rounded-full bg-blue-400/80 group-hover:animate-bounce"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-20 w-20 rounded-br-3xl bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-3xl bg-gradient-to-tl from-blue-500/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-Component: ProcessTimeline ---
function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {
      step: "01",
      label: "Inquiry",
      title: "Specs Confirmation",
      overviewTime: "24 hours",
      detailTime: "24 hours",
      description:
        "We review your requirements, confirm specs, and align on target markets and compliance needs.",
      visual: {
        title: "Specs Intake",
        tags: ["BOM", "Compliance", "Target Market"],
      },
    },
    {
      step: "02",
      label: "Sample",
      title: "Prototype Development",
      overviewTime: "15 days",
      detailTime: "15 days",
      description:
        "Prototype build and validation with iterative feedback to lock in performance and fit.",
      visual: {
        title: "Prototype Lab",
        tags: ["Bench Test", "Road Test", "Revisions"],
      },
    },
    {
      step: "03",
      label: "Contract",
      title: "Agreement & Deposit",
      overviewTime: "30% deposit",
      detailTime: "30% deposit",
      description:
        "Final agreement, production plan, and deposit confirmation to trigger tooling and scheduling.",
      visual: {
        title: "Contract Gate",
        tags: ["Schedule", "Tooling", "Deposit"],
      },
    },
    {
      step: "04",
      label: "Delivery",
      title: "Mass Production & Shipping",
      overviewTime: "35–45 days",
      detailTime: "35–45 days",
      description:
        "Mass production, QC checkpoints, and export-ready shipping documentation.",
      visual: {
        title: "Shipment Panel",
        tags: ["QC", "Packing", "Export Docs"],
      },
    },
  ];

  const totalSlides = steps.length + 1;
  const isOverview = activeIndex === 0;
  const goToSlide = (index: number) => {
    const safeIndex = Math.max(0, Math.min(totalSlides - 1, index));
    setActiveIndex(safeIndex);
  };
  const jumpToStep = (stepIndex: number) => goToSlide(stepIndex + 1);
  const backToOverview = () => goToSlide(0);
  const nextSlide = () => goToSlide(activeIndex + 1);
  const prevSlide = () => goToSlide(activeIndex - 1);

  return (
    <section className="relative">
      <div
        className="process-flow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                OEM Process
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Collaboration Timeline
            </h2>
            <p className="text-lg text-gray-400">
              A clear, repeatable workflow from specification to delivery.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                disabled={activeIndex === 0}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gray-900/60 text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-all hover:border-white/30 hover:bg-gray-900/80 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.25)] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                  <path d="M21 12H9" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                disabled={activeIndex === totalSlides - 1}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gray-900/60 text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-all hover:border-white/30 hover:bg-gray-900/80 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.25)] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                  <path d="M3 12h12" />
                </svg>
              </button>
            </div>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
          </div>
          <div
            className="relative mx-auto w-full max-w-none overflow-visible"
            style={
              {
                "--carousel-gap": "16px",
                "--panel-width": "100%",
              } as React.CSSProperties
            }
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${activeIndex} * (var(--panel-width) + var(--carousel-gap))))`,
                gap: "var(--carousel-gap)",
                paddingRight: "var(--peek-space)",
              }}
            >
              <section
                className="relative flex-none overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur-lg md:p-8"
                style={{ flex: "0 0 var(--panel-width)" }}
              >
                <div
                  className="process-flow pointer-events-none absolute inset-0"
                  aria-hidden="true"
                />
                <div className="relative grid gap-6 sm:grid-cols-2">
                  {steps.map((step, index) => {
                    const isKeyStep = index === 1 || index === 2;
                    return (
                      <button
                        type="button"
                        key={step.step}
                        onClick={() => jumpToStep(index)}
                        className={`group flex h-full flex-col rounded-xl border p-5 text-left text-white/90 shadow-sm backdrop-blur-lg transition-all duration-300 hover:shadow-md ${
                          isKeyStep
                            ? "border-white/30 bg-white/14 hover:border-white/40 hover:bg-white/18"
                            : "border-white/20 bg-white/10 hover:border-white/30 hover:bg-white/14"
                        }`}
                      >
                        <div className="text-2xl font-semibold tracking-[0.2em] text-white/20">
                          {step.step}
                        </div>
                        <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/60">
                          {step.label}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">
                          <strong className="font-semibold text-white">
                            {step.overviewTime}
                          </strong>
                        </p>
                      </button>
                    );
                  })}
                </div>
                <p className="relative mt-6 text-center text-xs text-white/60">
                  Lead times are based on in-house production and stable supply
                  chain control.
                </p>
              </section>

              {steps.map((step, index) => (
                <section
                  key={step.step}
                  className="relative flex-none overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur-lg md:p-8"
                  style={{ flex: "0 0 var(--panel-width)" }}
                >
                  <div
                    className="process-flow pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />
                  <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                          <div className="space-y-4 text-white/80">
                            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                              Step {step.step} / {step.label}
                            </div>
                            <h3 className="text-2xl font-semibold text-white">
                              {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/70">
                              {step.description}
                            </p>
                            <div className="text-sm text-white/70">
                              Key timing:{" "}
                              <strong className="font-semibold text-white">
                                {step.detailTime}
                              </strong>
                            </div>
                            <button
                              type="button"
                              onClick={backToOverview}
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors hover:border-white/40 hover:text-white"
                            >
                              Back to overview
                            </button>
                          </div>
                          <div className="relative rounded-xl border border-white/15 bg-white/5 p-6">
                            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-white/40">
                              <span>{step.visual.title}</span>
                              <span>Module {index + 1}</span>
                            </div>
                            <div className="space-y-4">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-2 text-[10px] uppercase tracking-widest text-white/40">
                                  Signals
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  {step.visual.tags.map((tag) => (
                                    <div
                                      key={tag}
                                      className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] text-white/70"
                                    >
                                      {tag}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-4">
                                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40">
                                  <span>Status Grid</span>
                                  <span className="text-blue-200/70">Live</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                  {Array.from({ length: 8 }).map((_, tileIndex) => (
                                    <div
                                      key={tileIndex}
                                      className={`h-6 rounded-md border ${
                                        tileIndex % 3 === 0
                                          ? "border-blue-300/40 bg-blue-400/20"
                                          : "border-white/10 bg-white/5"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-2 text-[10px] uppercase tracking-widest text-white/40">
                                  Flow Diagram
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-white/60">
                                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">
                                    Input
                                  </span>
                                  <span className="text-white/30">→</span>
                                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">
                                    Review
                                  </span>
                                  <span className="text-white/30">→</span>
                                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">
                                    Output
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </section>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>
  );
}

// --- Sub-Component: ProfitTable ---
function ProfitTable() {
  return (
    <section className="border-t border-gray-800 bg-gray-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Margin Advantage
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              CBU vs CKD Profit Impact
            </h2>
            <p className="text-lg text-gray-400">
              Reduce duties, shipping, and landed cost with CKD programs.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/60">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-gray-900/70 text-xs uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="px-6 py-4">Import Mode</th>
                  <th className="px-6 py-4">Duty Rate (Avg)</th>
                  <th className="px-6 py-4">Shipping Cost/Unit</th>
                  <th className="px-6 py-4">Assembly Cost</th>
                  <th className="px-6 py-4">Total Margin Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-gray-950">
                  <td className="px-6 py-4 font-semibold text-gray-200">CBU (Full Bike)</td>
                  <td className="px-6 py-4">30-80%</td>
                  <td className="px-6 py-4">High ($150)</td>
                  <td className="px-6 py-4">$0</td>
                  <td className="px-6 py-4 text-gray-400">Standard</td>
                </tr>
                <tr className="bg-gray-900/40">
                  <td className="px-6 py-4 font-semibold text-gray-200">CKD (Parts)</td>
                  <td className="px-6 py-4">0-10%</td>
                  <td className="px-6 py-4">Low ($40)</td>
                  <td className="px-6 py-4">$30</td>
                  <td className="px-6 py-4 font-semibold text-green-400">+25% Profit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: SpecOnlyCards ---
function SpecOnlyCards() {
  return (
    <section className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Spec-Only Cards
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Engineering-First Product Deck
            </h2>
            <p className="text-lg text-gray-400">
              No placeholders. Pure technical specification for fast evaluation.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-6 shadow-2xl">
              <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-gray-950 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-400 ring-1 ring-gray-800">
                spec_sheet
              </div>
              <div className="font-mono text-sm text-gray-300">
                <div className="text-gray-200">MODEL: R-70 SPORT</div>
                <div className="text-gray-600">------------------</div>
                <div className="mt-3 space-y-2">
                  <div>&gt; Motor: 5000W Brushless</div>
                  <div>&gt; Battery: 72V 50Ah (CATL Cells)</div>
                  <div>&gt; Max Speed: 100 km/h</div>
                  <div>&gt; Tires: 120/70-12 (Tubeless)</div>
                  <div>&gt; Certification: EEC L3e</div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-300 transition-colors hover:bg-blue-500/20"
                  href="/contact"
                >
                  Download Datasheet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: Workflows ---
function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-10 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Market-Ready Engineering
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Build for global distribution
            </h2>
            <p className="text-lg text-gray-400">
              We engineer products for compliance, serviceability, and margin.
              Documentation, certification support, and QC are built in.
            </p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 after:-top-32 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                <div className="flex h-72 items-center justify-center">
                  <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="30" width="120" height="100" rx="4" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <path d="M60 50 H140" stroke="#374151"/>
                    <path d="M60 70 H140" stroke="#374151"/>
                    <path d="M60 90 H140" stroke="#374151"/>
                    <circle cx="160" cy="30" r="10" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444"/>
                    <path d="M160 25 V35 M155 30 H165" stroke="#EF4444"/>
                    <circle cx="40" cy="130" r="10" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6"/>
                    <path d="M35 130 H45" stroke="#3B82F6"/>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                        Global Climate Durability
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Validated for heat, humidity, dust, and rain to reduce
                    warranty risk in export markets.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 after:-top-32 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                <div className="flex h-72 items-center justify-center">
                  <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 20 L160 50 L160 110 L100 140 L40 110 L40 50 Z" stroke="#2563EB" strokeWidth="2" fill="#1E3A8A" fillOpacity="0.2"/>
                    <path d="M100 20 V 80 M160 50 L100 80 M40 50 L100 80" stroke="#2563EB" strokeWidth="1"/>
                    <path d="M100 80 V 140" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4"/>
                    <rect x="20" y="70" width="160" height="2" fill="#60A5FA" fillOpacity="0.8" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                        OEM / ODM Co-Development
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Rapid samples, engineering support, and custom trims for
                    regional market positioning.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 after:-top-32 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                <div className="flex h-72 items-center justify-center">
                  <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="40" width="40" height="40" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <rect x="90" y="40" width="40" height="40" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <rect x="140" y="40" width="40" height="40" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <rect x="40" y="90" width="40" height="40" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <rect x="90" y="90" width="40" height="40" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <rect x="140" y="90" width="40" height="40" stroke="#4B5563" strokeWidth="2" fill="#111827"/>
                    <path d="M20 145 H 180" stroke="#2563EB" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                        Scalable Supply Chain
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400">
                     Flexible capacity planning for pilot runs, launches, and
                     volume orders.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
          <div className="mx-auto mt-6 max-w-sm lg:max-w-none">
            <TrustBadgeStrip />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: Features ---
function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-1/2 opacity-20"
        aria-hidden="true"
      >
        <svg className="h-full w-full" preserveAspectRatio="none">
           <pattern id="feature-grid-left" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" />
           </pattern>
           <rect width="100%" height="100%" fill="url(#feature-grid-left)" />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 -z-10 h-full w-1/2 opacity-20"
        aria-hidden="true"
      >
         <svg className="h-full w-full" preserveAspectRatio="none">
           <pattern id="feature-grid-right" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="19" y="19" width="2" height="2" fill="#374151" />
           </pattern>
           <rect width="100%" height="100%" fill="url(#feature-grid-right)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                B2B Ready
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Engineered for Global Sales
            </h2>
            <p className="text-lg text-gray-400">
              Products are built for local compliance, serviceability, and
              predictable landed cost.
            </p>
          </div>
          
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <svg
              className="max-w-none drop-shadow-2xl"
              width="800"
              height="300"
              viewBox="0 0 800 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="50" y="50" width="700" height="200" rx="10" stroke="#374151" strokeWidth="2" fill="#111827" fillOpacity="0.5" />
              <g transform="translate(100, 80)">
                 <rect width="40" height="80" rx="4" stroke="#2563EB" strokeWidth="2" fill="#1E40AF" fillOpacity="0.2" />
                 <path d="M20 0 V 80" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 2"/>
              </g>
              <g transform="translate(160, 80)">
                 <rect width="40" height="80" rx="4" stroke="#2563EB" strokeWidth="2" fill="#1E40AF" fillOpacity="0.2" />
                 <path d="M20 0 V 80" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 2"/>
              </g>
              <g transform="translate(220, 80)">
                 <rect width="40" height="80" rx="4" stroke="#2563EB" strokeWidth="2" fill="#1E40AF" fillOpacity="0.2" />
                 <path d="M20 0 V 80" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 2"/>
              </g>
              <g transform="translate(400, 80)">
                 <rect width="200" height="140" stroke="#4B5563" strokeWidth="2" fill="#1F2937" />
                 <text x="100" y="70" textAnchor="middle" fill="#9CA3AF" fontFamily="monospace" fontSize="14">QC + CERTS</text>
                 <path d="M10 20 H 190" stroke="#374151" />
                 <path d="M10 40 H 190" stroke="#374151" />
                 <rect x="20" y="80" width="40" height="40" fill="#374151" />
                 <rect x="80" y="80" width="40" height="40" fill="#374151" />
                 <rect x="140" y="80" width="40" height="40" fill="#374151" />
              </g>
              <path d="M 260 120 H 400" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="260" cy="120" r="4" fill="#60A5FA" />
              <circle cx="400" cy="120" r="4" fill="#60A5FA" />
              <path d="M 120 160 V 220 H 140" stroke="#9CA3AF" strokeWidth="1" />
              <text x="150" y="225" fill="#9CA3AF" fontSize="12" fontFamily="monospace">Export Platform</text>
            </svg>
          </div>

          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Full-Process Traceability
              </h3>
              <p className="text-gray-400">
                Full batch tracking across assembly, testing, and packaging for
                audit-ready deliveries.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Compliance-Ready Design
              </h3>
              <p className="text-gray-400">
                Built to match EEC/COC and DOT documentation requirements with
                localization support.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Serviceability Focus
              </h3>
              <p className="text-gray-400">
                Modules and components designed for fast service and lower
                dealer maintenance cost.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                />
                <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                <path
                  d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                  opacity=".48"
                />
                <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Reliability Testing
              </h3>
              <p className="text-gray-400">
                100% functional testing, burn-in, and road simulation to reduce
                warranty claims.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Logistics Optimization
              </h3>
              <p className="text-gray-400">
                Packaging engineered for container loading efficiency and
                reduced shipping damage.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Global Supply Assurance
              </h3>
              <p className="text-gray-400">
                Stable sourcing for motor, controller, and pack components with
                long-term availability.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: TechnicalData ---
function TechnicalData() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="mb-6 font-nacelle text-3xl font-semibold text-gray-200">
                Export Readiness & Commercial Metrics
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  We design for repeatable production and global distribution.
                  QC checkpoints, certification support, and packaging are built
                  into every program.
                </p>
                <p>
                  <strong>Partnership Models:</strong> OEM branding, ODM
                  customization, and SKD/CKD programs to fit local policy and
                  duties.
                </p>
                <p>
                  <strong>Quality Control:</strong> 100% functional testing,
                  end-of-line inspection, and shipment documentation.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/50 p-6 font-mono text-sm shadow-2xl">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                System_Spec_v2.4
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-800 pb-2">
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-gray-500">Commercial Metrics</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">MOQ</span>
                    <span className="text-blue-400">50 units / model</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Lead_Time</span>
                    <span className="text-blue-400">45 to 60 days</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Spare_Parts</span>
                    <span className="text-blue-400">1% free spares</span>
                  </div>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-gray-500">Compliance & Safety</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Certifications</span>
                    <span className="text-blue-400">EEC/COC, DOT</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Quality Tests</span>
                    <span className="text-blue-400">100% functional</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Packaging</span>
                    <span className="text-blue-400">Steel rack options</span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-gray-500">Trade Terms</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Incoterms</span>
                    <span className="text-blue-400">FOB / CIF</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Payment</span>
                    <span className="text-blue-400">T/T, LC</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-dashed border-gray-700 pt-4 text-xs text-gray-500">
                * Commercial terms and certifications vary by region and model.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: Testimonials ---
const getAvatarStyle = (name: string) => {
  const colors = ["#2563EB", "#4F46E5", "#3B82F6", "#60A5FA", "#1D4ED8"];
  const index = name.length % colors.length;
  return colors[index];
};

const EngineerAvatar = ({ name }: { name: string }) => {
  const color = getAvatarStyle(name);
  const initials = name.split(" ").map((n) => n[0]).join("").substring(0, 2);

  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#1F2937" />
      <circle cx="18" cy="18" r="17" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
      <text x="18" y="23" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="bold" fontFamily="monospace">
        {initials}
      </text>
    </svg>
  );
};

const testimonialsData = [
  { name: "European Distributor", company: "EEC Market", content: "Documentation was complete and the EEC compliance package made homologation straightforward for multiple EU countries.", categories: [1, 2] },
  { name: "South American Assembler", company: "CKD Program", content: "Switching from CBU to CKD reduced duties and shortened our landed cost cycle by 25%.", categories: [1, 4] },
  { name: "Middle East Importer", company: "Regional Dealer Network", content: "Fast lead times and consistent QC allowed us to plan monthly arrivals with low warranty exposure.", categories: [1, 3] },
  { name: "African Fleet Operator", company: "Delivery & Mobility", content: "Spare parts planning and service documentation helped our technicians scale after-sales support quickly.", categories: [1, 5] },
  { name: "LATAM Distributor", company: "ODM Partner", content: "We launched a localized trim within 60 days using their ODM process and tooling support.", categories: [1, 5] },
  { name: "SEA Importer", company: "Urban Mobility", content: "Container loading specs and steel rack packaging improved our shipping efficiency immediately.", categories: [1, 2] },
  { name: "GCC Dealer Group", company: "Hot Climate Market", content: "Climate durability testing reduced heat-related failures and improved our dealer confidence.", categories: [1, 3] },
  { name: "OEM Partner", company: "Private Label", content: "Branding, badge engineering, and compliance support were handled end-to-end.", categories: [1, 4] },
  { name: "Global Integrator", company: "Multi-Region Supply", content: "They operate like a true factory partner, not a reseller. That trust enabled repeat orders.", categories: [1, 2] },
];

const getCategoryLabel = (categories: number[]) => {
  if (categories.includes(2)) return "DISTRIBUTOR";
  if (categories.includes(3)) return "IMPORTER";
  if (categories.includes(4)) return "OEM/ODM";
  if (categories.includes(5)) return "FLEET";
  return "PARTNER";
};

const CARD_WIDTH = 300;
const GAP = 24;

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const tripleTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animationFrameId = useRef<number>(0);
  const isDown = useRef(false);
  const singleSetWidth = testimonialsData.length * (CARD_WIDTH + GAP);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, [singleSetWidth]);

  const checkInfiniteScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
      scrollLeftRef.current -= singleSetWidth;
    } else if (container.scrollLeft < singleSetWidth) {
      container.scrollLeft += singleSetWidth;
      scrollLeftRef.current += singleSetWidth;
    }
  }, [singleSetWidth]);

  const applyInertia = useCallback(() => {
    if (!scrollRef.current) return;
    velocity.current *= 0.95; 
    scrollRef.current.scrollLeft -= velocity.current;
    checkInfiniteScroll();
    if (Math.abs(velocity.current) > 0.1) {
      animationFrameId.current = requestAnimationFrame(applyInertia);
    }
  }, [checkInfiniteScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    lastX.current = e.pageX;
    velocity.current = 0;
    cancelAnimationFrame(animationFrameId.current);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current); 
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
      checkInfiniteScroll();
      const newVelocity = e.pageX - lastX.current;
      velocity.current = newVelocity;
      lastX.current = e.pageX;
    };
    const handleMouseUp = () => {
      if (!isDown.current) return;
      isDown.current = false;
      setIsDragging(false);
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(applyInertia);
    };
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, applyInertia, checkInfiniteScroll]);

  useEffect(() => {
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  return (
    <div className="mx-auto w-full border-t border-gray-800 bg-gray-950 overflow-hidden">
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trusted by Global Distributors
          </h2>
          <p className="text-lg text-gray-400">
            Factory-direct supply with OEM/ODM programs, documentation, and
            export-ready quality control.
          </p>
        </div>

        <div className="group relative w-full">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-linear-to-r from-gray-950 to-transparent md:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-linear-to-l from-gray-950 to-transparent md:w-32" />
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto px-6 pb-16 pt-8 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} !scroll-auto`}
            onMouseDown={handleMouseDown}
          >
            {tripleTestimonials.map((testimonial, index) => {
              const staggerOffsets = ["mt-0", "mt-12", "mt-4", "mt-16", "mt-2"];
              const relativeIndex = index % testimonialsData.length;
              const marginTop = staggerOffsets[relativeIndex % staggerOffsets.length];
              const isKeyClient = testimonial.company.includes("Siemens") || testimonial.company.includes("Lockheed") || testimonial.company.includes("Boston");
              const widthClass = "w-[300px] flex-none";
              const bgClass = isKeyClient ? "bg-linear-to-br from-gray-900 via-blue-900/10 to-gray-900 border-blue-500/40 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]" : "bg-linear-to-br from-gray-900 via-gray-800/20 to-gray-900 border-gray-800 hover:border-gray-700";

              return (
                <div key={index} className={`relative flex flex-col justify-between rounded-xl border p-6 backdrop-blur-sm transition-transform duration-300 ${widthClass} ${marginTop} ${bgClass}`}>
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-[10px] font-medium tracking-wide ring-1 ring-inset ${isKeyClient ? 'bg-blue-900/20 text-blue-300 ring-blue-500/30' : 'bg-gray-800/50 text-gray-400 ring-gray-700'}`}>
                        {getCategoryLabel(testimonial.categories)}
                      </div>
                      {isKeyClient && (
                         <div className="flex gap-1">
                            <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse delay-150"></div>
                         </div>
                      )}
                    </div>
                    <p className="mb-6 font-light leading-relaxed text-gray-300 text-sm">"{testimonial.content}"</p>
                  </div>
                  <div className={`flex items-center gap-4 border-t pt-4 ${isKeyClient ? 'border-blue-500/20' : 'border-gray-800/50'}`}>
                    <EngineerAvatar name={testimonial.name} />
                    <div>
                      <div className="text-sm font-semibold text-gray-200">{testimonial.name}</div>
                      <div className={`font-mono text-xs ${isKeyClient ? 'text-blue-400' : 'text-gray-500'}`}>{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-Component: FAQ ---
const faqs = [
  {
    question: "What is your MOQ?",
    answer: <>Standard MOQ starts at <strong className="text-gray-200">50 units per model</strong>. We can support pilot orders for qualified partners.</>,
    schemaAnswer: "Standard MOQ starts at 50 units per model. Pilot orders are available for qualified partners."
  },
  {
    question: "Do you support OEM and ODM?",
    answer: <>Yes. We provide OEM branding and ODM customization, including regional trims and compliance documentation.</>,
    schemaAnswer: "Yes. We provide OEM branding and ODM customization with compliance documentation."
  },
  {
    question: "Do you offer SKD/CKD?",
    answer: <>Yes. SKD/CKD programs are available to reduce duties and support local assembly.</>,
    schemaAnswer: "Yes. SKD/CKD programs are available to reduce duties and support local assembly."
  },
  {
    question: "Which certifications do you support?",
    answer: <>We support <strong className="text-gray-200">EEC/COC</strong> and <strong className="text-gray-200">DOT</strong> documentation depending on target market.</>,
    schemaAnswer: "We support EEC/COC and DOT documentation depending on target market."
  },
  {
    question: "What are payment terms?",
    answer: <>We accept <strong className="text-gray-200">T/T</strong> and <strong className="text-gray-200">LC</strong> with standard production milestones.</>,
    schemaAnswer: "We accept T/T and LC with standard production milestones."
  },
  {
    question: "What spare parts support is included?",
    answer: <>We provide <strong className="text-gray-200">1% free spare parts</strong> and optional parts kits per shipment.</>,
    schemaAnswer: "We provide 1% free spare parts and optional parts kits per shipment."
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: React.ReactNode }; isOpen: boolean; onToggle: () => void; }) {
  return (
    <div className="group rounded-xl border border-gray-800 bg-gray-900/40">
      <button className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-200 transition-colors hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-inset rounded-xl" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <span className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-700 bg-gray-800 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <svg className={`h-3 w-3 fill-current ${isOpen ? "text-blue-400" : "text-gray-400"}`} viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" /></svg>
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-4 text-sm leading-relaxed text-gray-400">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.schemaAnswer } })) };

  return (
    <section className="bg-gray-950 border-t border-gray-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            OEM / ODM FAQ
          </h2>
          <p className="text-lg text-gray-400">Commercial terms, compliance support, and partnership details.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">{faqs.slice(0, 3).map((faq, index) => <FaqItem key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />)}</div>
          <div className="flex flex-col gap-4">{faqs.slice(3, 6).map((faq, index) => <FaqItem key={index + 3} faq={faq} isOpen={openIndex === index + 3} onToggle={() => handleToggle(index + 3)} />)}</div>
        </div>
      </div>
    </section>
  );
}

// --- Main Export: HomePage ---
export default function HomePage() {
  return (
    <>
      <Hero />
      <Workflows />
      <ProcessTimeline />
      <ProfitTable />
      <SpecOnlyCards />
      <Features />
      <TechnicalData />
      <Testimonials />
      <Faq />
    </>
  );
}
