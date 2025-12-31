
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
      {/* Background decoration: Technical Radar/Target */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-30"
        aria-hidden="true"
      >
         <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="299.5" stroke="#1F2937" strokeDasharray="4 4"/>
            <circle cx="300" cy="300" r="200" stroke="#1F2937"/>
            <circle cx="300" cy="300" r="100" stroke="#1F2937" strokeDasharray="2 2"/>
            <line x1="300" y1="0" x2="300" y2="600" stroke="#1F2937"/>
            <line x1="0" y1="300" x2="600" y2="300" stroke="#1F2937"/>
            
            {/* Active Sector */}
            <path d="M300 300 L 512 87 A 300 300 0 0 1 600 300 Z" fill="url(#radar-gradient)" fillOpacity="0.1"/>
            <defs>
              <radialGradient id="radar-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(-45) scale(300)">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#1F2937" stopOpacity="0"/>
              </radialGradient>
            </defs>
         </svg>
      </div>

      {/* Interactive Card */}
      {/* We scale it up on medium screens to act as a proper hero visual */}
      <div className="relative transform md:scale-150">
        <div className="hc-card cursor-pointer group relative z-10">
          <div className="hc-card-border"></div>
          <div className="hc-content">
            <div className="hc-logo-container">
              {/* Logo Part 1: The 'S' Icon */}
              <div className="hc-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="tycorun-card-gradient"
                      x1="4"
                      y1="4"
                      x2="28"
                      y2="28"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2563EB" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#tycorun-card-gradient)"
                    d="M26 6H12.5L6.5 12V15H17L26 6Z"
                  />
                  <circle cx="26" cy="6" r="2" fill="#2563EB" />
                  <path
                    fill="url(#tycorun-card-gradient)"
                    d="M6 26H19.5L25.5 20V17H15L6 26Z"
                  />
                  <circle cx="6" cy="26" r="2" fill="#3B82F6" />
                </svg>
              </div>
              
              {/* Logo Part 2: The Text 'Tycorun' */}
              <div className="hc-logo-text">
                <span className="font-nacelle text-2xl font-semibold text-gray-100 tracking-tight">Tycorun</span>
              </div>
              
              <span className="hc-trail"></span>
            </div>
            <span className="hc-logo-bottom-text">tycorun.com</span>
          </div>
          <span className="hc-bottom-text">Custom Power</span>
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
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Custom Engineered Power Systems
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-400"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                High-performance lithium solutions designed for mission-critical applications. 
                From robotics to aerospace, we deliver reliability where failure is not an option.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      View Specifications
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
                    Contact Engineering
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay={800}>
            <HeroCard />
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
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Precision-Engineered for Your Platform
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Map your power architecture
            </h2>
            <p className="text-lg text-gray-400">
              Seamless integration with your chassis and BMS. We align physical dimensions 
              and electrical characteristics to your exact hardware specifications.
            </p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
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
                        Extreme Tolerance
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Operating temperatures from -40°C to +80°C. Engineered for the harshest environments on Earth.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
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
                        Rapid Prototyping
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400">
                    From CAD to physical prototype in just 7 days. Accelerate your development cycle without compromising quality.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
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
                        Scalable Production
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400">
                     Flexible manufacturing lines supporting low-volume pilots to high-volume mass production runs.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
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
                Industrial Grade
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Engineered for Mission-Critical Systems
            </h2>
            <p className="text-lg text-gray-400">
              Our cell-matching protocol and thermal simulation ensure zero-defect reliability 
              for the most demanding applications.
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
                 <text x="100" y="70" textAnchor="middle" fill="#9CA3AF" fontFamily="monospace" fontSize="14">BMS CONTROLLER</text>
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
              <text x="150" y="225" fill="#9CA3AF" fontSize="12" fontFamily="monospace">Li-Ion Cell Array</text>
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
                Cell-Level Traceability
              </h3>
              <p className="text-gray-400">
                Every cell is tracked from production to pack assembly, ensuring total quality control and history.
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
                BMS Integration
              </h3>
              <p className="text-gray-400">
                Full communication protocol support (CAN, RS485) for seamless integration with your master control unit.
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
                Thermal Simulation
              </h3>
              <p className="text-gray-400">
                Advanced CFD modeling allows us to optimize heat dissipation before a single cell is welded.
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
                Cycle Life Validation
              </h3>
              <p className="text-gray-400">
                Rigorous lab testing confirms performance over thousands of cycles under real-world load profiles.
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
                UN 38.3 Certification
              </h3>
              <p className="text-gray-400">
                We handle all regulatory compliance and safety certifications for global shipping and deployment.
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
                IP67 Enclosures
              </h3>
              <p className="text-gray-400">
                Custom-molded, sealed enclosures designed to withstand dust, water immersion, and high vibration.
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
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="mb-6 font-nacelle text-3xl font-semibold text-gray-200">
                Engineering Constraints & Reliability Metrics
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  We design for worst-case scenarios, not nominal averages. Our engineering process explicitly evaluates thermal runaway propagation risks, mechanical resonance frequencies, and electromagnetic compatibility (EMC) early in the architecture phase.
                </p>
                <p>
                  <strong>Thermal Strategy:</strong> We utilize a "Zero-Convection" baseline for thermal simulation. If a pack cannot maintain safe junction temperatures (&lt;60°C) under load without airflow, we mandate liquid cooling or phase-change material integration.
                </p>
                <p>
                  <strong>Redundancy Layers:</strong> Critical safety functions are handled by a dual-core lockstep processor in the BMS, with a hardwired analog backup loop that bypasses digital logic to disconnect the main contactor in &lt;10ms during fault conditions.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/50 p-6 font-mono text-sm shadow-2xl">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                System_Spec_v2.4
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-800 pb-2">
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-gray-500">Operating Envelope</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Discharge_Temp_Range</span>
                    <span className="text-blue-400">-20°C to +60°C</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Charge_Temp_Range</span>
                    <span className="text-blue-400">0°C to +45°C</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Max_Cont_Discharge</span>
                    <span className="text-blue-400">3C (Active Cooling)</span>
                  </div>
                </div>
                <div className="border-b border-gray-800 pb-2">
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-gray-500">Compliance & Safety</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Transport</span>
                    <span className="text-blue-400">UN 38.3 Class 9</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Ingress_Protection</span>
                    <span className="text-blue-400">IP67 / IP6K9K</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Functional_Safety</span>
                    <span className="text-blue-400">ISO 26262 ASIL-C</span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-gray-500">Data Interface</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Protocol</span>
                    <span className="text-blue-400">CANOpen / J1939</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-gray-300">Telemetry_Rate</span>
                    <span className="text-blue-400">10ms - 1000ms</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-dashed border-gray-700 pt-4 text-xs text-gray-500">
                * Performance metrics subject to cell selection (NMC vs LFP) and thermal architecture.
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
  { name: "Thomas W.", company: "Kuka Robotics", content: "Tycorun's rapid prototyping saved our project. We went from CAD model to a fully functional, custom-fit pack in under two weeks. Their engineering support was phenomenal.", categories: [1, 2, 5] },
  { name: "Sarah L.", company: "Siemens Healthineers", content: "For our life-support system, battery failure is not an option. Tycorun's zero-defect protocol gave us the confidence we needed. They are a true engineering partner.", categories: [1, 3] },
  { name: "David R.", company: "SAAB Aerospace", content: "The energy density they achieved for our drone fleet was unmatched. 15% more flight time compared to off-the-shelf solutions we tested previously.", categories: [1, 4] },
  { name: "Michael C.", company: "Boston Dynamics", content: "Their BMS integration support was phenomenal. Seamless communication with our central controller right out of the box, saving us weeks of debugging.", categories: [1, 2] },
  { name: "Elena G.", company: "Medtronic", content: "We needed a custom shape to fit a very tight housing. Tycorun engineered a solution that maximized capacity without compromising thermals or safety.", categories: [1, 3, 5] },
  { name: "James F.", company: "Caterpillar", content: "Reliability in sub-zero temps was critical for our AGVs. Tycorun delivered a pack that performs perfectly at -20°C in the field.", categories: [1, 2, 5] },
  { name: "Robert P.", company: "Lockheed Martin", content: "Professional, transparent, and technically competent. The best engineering partner we've worked with for mission-critical power systems.", categories: [1, 4] },
  { name: "Lisa K.", company: "Honeywell", content: "Supply chain security is huge for us. Tycorun's UN 38.3 certification handling smoothed our global logistics significantly.", categories: [1, 5] },
  { name: "Mark T.", company: "Stryker", content: "From the first consultation to mass production, the process was seamless. High quality, on time, every time.", categories: [1, 3] },
];

const getCategoryLabel = (categories: number[]) => {
  if (categories.includes(2)) return "ROBOTICS";
  if (categories.includes(3)) return "MEDICAL";
  if (categories.includes(4)) return "AEROSPACE";
  if (categories.includes(5)) return "INDUSTRIAL";
  return "ENGINEERING";
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
            Trusted by Engineering Leaders
          </h2>
          <p className="text-lg text-gray-400">
            We provide power solutions that empower the next generation of
            robotics, medical devices, and autonomous vehicles.
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
    question: "What is typical lead time for custom battery packs?",
    answer: <>For initial prototypes, our rapid engineering track delivers functional samples in <strong className="text-gray-200">7-10 business days</strong>. Full-scale mass production lead times depend on cell availability, typically ranging from <strong className="text-gray-200">4 to 8 weeks</strong> after design freeze.</>,
    schemaAnswer: "For initial prototypes, our rapid engineering track delivers functional samples in 7-10 business days. Full-scale mass production lead times depend on cell availability, typically ranging from 4 to 8 weeks after design freeze."
  },
  {
    question: "Do you handle UN 38.3 and UL certification?",
    answer: <>Yes. Regulatory compliance is part of our turnkey process. We manage <strong className="text-gray-200">UN 38.3</strong>, <strong className="text-gray-200">IEC 62133</strong>, and <strong className="text-gray-200">UL 2054</strong> testing. We can facilitate pre-compliance testing in our internal lab to ensure a first-pass success rate at certified third-party labs.</>,
    schemaAnswer: "Yes. Regulatory compliance is part of our turnkey process. We manage UN 38.3, IEC 62133, and UL 2054 testing. We can facilitate pre-compliance testing in our internal lab to ensure a first-pass success rate at certified third-party labs."
  },
  {
    question: "Can you integrate with our custom BMS protocol?",
    answer: <>Absolutely. Our BMS modules support standard <strong className="text-gray-200">CANOpen</strong>, <strong className="text-gray-200">J1939</strong>, and <strong className="text-gray-200">RS-485</strong>. For proprietary protocols, our firmware engineering team can write custom drivers to ensure a seamless handshake with your master controller.</>,
    schemaAnswer: "Absolutely. Our BMS modules support standard CANOpen, J1939, and RS-485. For proprietary protocols, our firmware engineering team can write custom drivers to ensure a seamless handshake with your master controller."
  },
  {
    question: "What cell chemistries do you support?",
    answer: <>We focus on <strong className="text-gray-200">NMC (Nickel Manganese Cobalt)</strong> for high energy density applications (drones, robotics) and <strong className="text-gray-200">LFP (Lithium Iron Phosphate)</strong> for high cycle life and safety-critical stationary or industrial applications.</>,
    schemaAnswer: "We focus on NMC (Nickel Manganese Cobalt) for high energy density applications (drones, robotics) and LFP (Lithium Iron Phosphate) for high cycle life and safety-critical stationary or industrial applications."
  },
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: <>We do not have a strict MOQ for the <strong className="text-gray-200">NRE (Non-Recurring Engineering)</strong> phase. For serial production, we typically aim for batch sizes of <strong className="text-gray-200">50+ units</strong>, but we remain flexible based on project complexity and annual volume commitments.</>,
    schemaAnswer: "We do not have a strict MOQ for the NRE (Non-Recurring Engineering) phase. For serial production, we typically aim for batch sizes of 50+ units, but we remain flexible based on project complexity and annual volume commitments."
  },
  {
    question: "How do you manage thermal runaway risks?",
    answer: <>Safety is our primary constraint. We employ <strong className="text-gray-200">cell-level fusing</strong>, propagation-resistant materials (mica/aerogels), and advanced BMS logic to isolate faults immediately. We validate these designs with CFD thermal simulation and physical nail-penetration testing.</>,
    schemaAnswer: "Safety is our primary constraint. We employ cell-level fusing, propagation-resistant materials (mica/aerogels), and advanced BMS logic to isolate faults immediately. We validate these designs with CFD thermal simulation and physical nail-penetration testing."
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
            Engineering FAQ
          </h2>
          <p className="text-lg text-gray-400">Common questions regarding our manufacturing process, compliance, and systems integration.</p>
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
      <Features />
      <TechnicalData />
      <Testimonials />
      <Faq />
    </>
  );
}
