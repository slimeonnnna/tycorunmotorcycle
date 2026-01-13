
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import imagesLoaded from "imagesloaded";
import { TweenMax } from "gsap";
import * as THREE from "three";

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

// --- Sub-Component: CapacityDashboard ---
function CapacityDashboard() {
  const metricScrollRef = useRef<HTMLDivElement>(null);
  const [metricActiveIndex, setMetricActiveIndex] = useState(0);
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
  const metricCount = metrics.length;

  useEffect(() => {
    const container = metricScrollRef.current;
    if (!container) {
      return;
    }

    let rafId = 0;
    const updateActive = () => {
      const items = Array.from(
        container.querySelectorAll<HTMLElement>(".metric-item")
      );
      if (!items.length) {
        return;
      }

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
  }, [metricCount]);

  return (
    <div className="border-gray-800 -mx-4 sm:mx-0">
      <div className="mx-auto w-full max-w-none sm:max-w-6xl">
        <div className="py-10 md:py-20">
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
                className={
                  index === metricActiveIndex
                    ? "metric-dot is-active"
                    : "metric-dot"
                }
              ></span>
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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const slides = [
    {
      kicker: "Define Your Path",
      heading: "One Factory. Four Ways to Scale.",
      paragraph:
        "We don't force a take-it-or-leave-it catalog. Select the cooperation tier that best fits your engineering capabilities and target market maturity.",
      items: [
        "Private Label & Visual OEM",
        "ODM & Architecture Tuning",
        "SKD/CKD Tariff Optimization",
        "Regional Sales & Support",
      ],
    },
    {
      kicker: "Visual Identity",
      heading: "Private Label & Visual OEM",
      paragraph:
        "Don't just sticker it. We integrate your brand DNA into the hardware, from laser-etched VINs to custom dashboard startup screens and unboxing experiences.",
      items: [
        "Custom Dashboard UI/UX",
        "Laser-Etched Components",
        "Localized User Manuals",
        "Exclusive Color Schemes",
      ],
    },
    {
      kicker: "Architecture Tuning",
      heading: "ODM & Performance Configs",
      paragraph:
        "Generic specs fail in niche markets. We open our BOM to fine-tune suspension valves, motor windings, and battery chemistry for your specific terrain.",
      items: [
        "Suspension Re-valving",
        "High-Torque Windings",
        "Reinforced Cargo Racks",
        "Climate-Specific Cells",
      ],
    },
    {
      kicker: "Tariff Engineering",
      heading: "Cost Optimization (SKD/CKD)",
      paragraph:
        "Transition from importer to assembler. We provide container nesting plans and step-by-step SOPs to drastically reduce import duties and shipping costs.",
      items: [
        "High-Density Loading",
        "Step-by-Step SOP Manuals",
        "Engineer On-Site Support",
        "Local Tooling Guides",
      ],
    },
    {
      kicker: "Distributor Success",
      heading: "Regional Sales & Service",
      paragraph:
        "Solve the after-sales anxiety. We empower distributors with studio-quality marketing assets and data-driven spare parts lists (RSPL) to ensure fleet uptime.",
      items: [
        "White-Label Marketing Kit",
        "Recommended Spares (RSPL)",
        "Rapid RMA Process",
        "Dealer Service Training",
      ],
    },
  ];

  const totalSlides = slides.length;
  const goToSlide = (index: number) => {
    const safeIndex = Math.max(0, Math.min(totalSlides - 1, index));
    setActiveIndex(safeIndex);
  };
  const nextSlide = () => goToSlide(activeIndex + 1);
  const prevSlide = () => goToSlide(activeIndex - 1);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const dragRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragThreshold = 12;
  const [dragOffset, setDragOffset] = useState(0);
  const getEdgeOffset = () => {
    const containerWidth = dragRef.current?.getBoundingClientRect().width ?? 0;
    if (!containerWidth || typeof window === "undefined") return 0;
    return Math.max(0, (window.innerWidth - containerWidth) / 2);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (target.closest("a,button")) return;
    const slideEl = target.closest<HTMLElement>("[data-slide-index]");
    if (slideEl) {
      const slideIndex = Number(slideEl.dataset.slideIndex);
      if (!Number.isNaN(slideIndex) && slideIndex !== activeIndex) {
        goToSlide(slideIndex);
        return;
      }
    }
    isDragging.current = true;
    dragStartX.current = event.clientX;
    dragRef.current?.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const liveDeltaX = event.clientX - dragStartX.current;
    const isAtStart = activeIndex === 0;
    const isAtEnd = activeIndex === totalSlides - 1;
    const edgeOffset = getEdgeOffset();
    let clampedDeltaX = liveDeltaX;
    if (isAtStart && liveDeltaX > 0) {
      clampedDeltaX = Math.min(liveDeltaX, edgeOffset);
    } else if (isAtEnd && liveDeltaX < 0) {
      clampedDeltaX = Math.max(liveDeltaX, -edgeOffset);
    }
    setDragOffset(clampedDeltaX);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const deltaX = dragOffset;
    const isAtStart = activeIndex === 0;
    const isAtEnd = activeIndex === totalSlides - 1;
    isDragging.current = false;
    setDragOffset(0);
    if (Math.abs(deltaX) >= dragThreshold) {
      if (deltaX > 0 && !isAtStart) {
        prevSlide();
      } else if (deltaX < 0 && !isAtEnd) {
        nextSlide();
      }
    }
    dragRef.current?.releasePointerCapture(event.pointerId);
  };

  const renderOverviewSlide = (
    slide: {
      kicker: string;
      heading: string;
      paragraph: string;
      items: string[];
    },
    suffix: string,
    index: number,
    isActive: boolean,
    key?: string,
  ) => {
    const isAnimReady = isActive && isInView;
    const flowId = `main-flow-${suffix}`;
    const glowId = `glow-${suffix}`;
    const hqGradientId = `hq-gradient-${suffix}`;
    const kickerIcon =
      index === 1 ? (
        <svg
          className="card_kicker__icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="5" y="4.5" width="14" height="15" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 8.5h8M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : index === 2 ? (
        <svg
          className="card_kicker__icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : index === 3 ? (
        <svg
          className="card_kicker__icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 9l8-4 8 4v8l-8 4-8-4V9z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M4 9l8 4 8-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.5a3 3 0 1 0 0 .01M12 6.8v-1.6M12 13.2v1.6M9.2 9.5H7.6M16.4 9.5h-1.6M10.1 7.6l-1.1-1.1M14.9 11.4l1.1 1.1M14.9 7.6l1.1-1.1M10.1 11.4l-1.1 1.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          className="card_kicker__icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 16l6-6 4 4 6-8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 6H20v2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    return (
      <section
        key={key}
        className="card card--wide card--split relative flex-none"
        style={{ flex: "0 0 var(--panel-width)" }}
        data-active={isActive ? "true" : "false"}
        data-slide-index={index}
      >
        <div
          className="process-flow pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="card__border"></div>
        <div className="card__body">
          <div className="card__left">
            <div className="card_title__container">
              <div className="card_kicker">
                {kickerIcon}
                <span className="card_title">{slide.kicker}</span>
              </div>
              <h3 className="card_heading process-card-heading text-white">
                {slide.heading}
              </h3>
              <p className="card_paragraph">{slide.paragraph}</p>
            </div>
            <ul className="card__list">
              {slide.items.map((item) => (
                <li key={item} className="card__list_item">
                  <span className="check">
                    <svg
                      className="check_svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="list_text">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
            >
              <span className="relative z-20">Contact Us</span>
              <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6" />
              <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6" />
            </Link>
          </div>
          <div
            className={`card__visual ${index === 2 ? "card__visual--bom" : ""}`}
            aria-hidden="true"
            data-anim-ready={isAnimReady ? "true" : "false"}
          >
            {index === 1 ? (
              <div className="dna-progress">
                <div className="full-progress">
                  <div className="content">
                    <div className="text">
                      <span>100%</span>
                      <span>DNA</span>
                    </div>
                    <div className="progresses">
                      <div className="main-prog">
                        <div className="separ"></div>
                        <div className="separ"></div>
                        <div className="separ"></div>
                        <div className="separ"></div>
                        <div className="separ"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : index === 2 ? (
              <div className="w-full font-sans">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-2 pt-10 shadow-2xl">
                    <div className="absolute left-3 top-3 flex items-center space-x-2 bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                      <span className="perf-pulse w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">
                        BOM OPEN
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                      <div className="space-y-1">
                        <p className="text-lg font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-nacelle">
                          Performance Arch.
                        </p>
                        <p className="text-xs text-gray-400 font-mono tracking-wide uppercase">
                          ODM Configuration V2
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-6 sm:gap-3">
                      <div className="relative overflow-hidden rounded-lg p-2 sm:p-3 bg-gray-800/50 border border-gray-700/50 group/item hover:border-blue-500/50 transition-colors">
                        <div className="relative z-10">
                          <svg className="perf-icon absolute right-2 top-2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                          <span className="block text-xl font-bold text-gray-200 font-mono">
                            180<span className="text-xs ml-0.5 text-gray-500">mm</span>
                          </span>
                          <span className="text-[10px] text-blue-300 font-medium uppercase tracking-tight">
                            Re-valved
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 opacity-50"></div>
                      </div>

                      <div className="relative overflow-hidden rounded-lg p-2 sm:p-3 bg-gray-800/50 border border-gray-700/50 group/item hover:border-blue-500/50 transition-colors">
                        <div className="relative z-10">
                          <svg className="perf-icon absolute right-2 top-2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="block text-xl font-bold text-gray-200 font-mono">
                            250<span className="text-xs ml-0.5 text-gray-500">Nm</span>
                          </span>
                          <span className="text-[10px] text-blue-400 font-medium uppercase tracking-tight">
                            Hi-Torque
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 opacity-50"></div>
                      </div>

                      <div className="relative overflow-hidden rounded-lg p-2 sm:p-3 bg-gray-800/50 border border-gray-700/50 group/item hover:border-blue-500/50 transition-colors">
                        <div className="relative z-10">
                          <svg className="perf-icon absolute right-2 top-2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <span className="block text-xl font-bold text-gray-200 font-mono">
                            -20<span className="text-xs ml-0.5 text-gray-500">°C</span>
                          </span>
                          <span className="text-[10px] text-blue-300 font-medium uppercase tracking-tight">
                            Cold Cell
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 opacity-50"></div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                          <span>Torque Mapping</span>
                          <span className="text-white">Aggressive</span>
                        </div>
                          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="perf-load-bar h-full w-[85%] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-full transform origin-left"></div>
                          </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center z-30" title="Reinforced Racks">
                          <span className="text-[10px] text-gray-300 font-bold">R</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center z-20" title="Suspension">
                          <span className="text-[10px] text-gray-300 font-bold">S</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center z-10" title="Battery">
                          <span className="text-[10px] text-gray-300 font-bold">B</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center z-0">
                          <span className="text-[9px] text-gray-500">+4</span>
                        </div>
                      </div>

                      <button className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 text-gray-200 text-xs font-medium rounded-lg transition-all">
                        View Specs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : index === 3 ? (
              <div className="w-full grid grid-cols-2 gap-4 h-full content-center">
                <div className="group relative bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 rounded-xl border border-gray-700 p-4 hover:border-blue-500 transition-colors duration-300">
                  <div className="absolute top-4 right-4 text-blue-500/30 group-hover:text-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2">Loading Density</div>
                  <div className="text-3xl font-bold text-white font-mono flex items-baseline">
                    52<span className="text-xs text-gray-500 ml-1 font-sans font-normal">Units</span>
                  </div>
                  <div className="mt-2 flex items-center text-[10px] text-blue-400">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>+115% vs CBU</span>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 rounded-xl border border-gray-700 p-4 hover:border-green-500 transition-colors duration-300">
                  <div className="absolute top-4 right-4 text-green-500/30 group-hover:text-green-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2">Duty Savings</div>
                  <div className="text-3xl font-bold text-white font-mono flex items-baseline">
                    -25<span className="text-xs text-gray-500 ml-1 font-sans font-normal">%</span>
                  </div>
                  <div className="mt-2 flex items-center text-[10px] text-green-400">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span>Avg. Reduction</span>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-900 rounded-xl border border-gray-700 p-4 hover:border-purple-500 transition-colors duration-300">
                  <div className="absolute top-4 right-4 text-purple-500/30 group-hover:text-purple-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2">Tech Transfer</div>
                  <div className="text-3xl font-bold text-white font-mono flex items-baseline">
                    SOP<span className="text-xs text-gray-500 ml-1 font-sans font-normal">v4</span>
                  </div>
                  <div className="mt-2 text-[10px] text-purple-400">Step-by-Step Video Guides</div>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800/60 to-slate-900 rounded-xl border border-gray-700 p-4 hover:border-gray-400 transition-colors duration-300">
                  <div className="absolute top-4 right-4 text-gray-500/30 group-hover:text-gray-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2">Damage Rate</div>
                  <div className="text-3xl font-bold text-white font-mono flex items-baseline">
                    &lt;1<span className="text-xs text-gray-500 ml-1 font-sans font-normal">%</span>
                  </div>
                  <div className="mt-2 text-[10px] text-gray-400">Steel Frame Packing</div>
                </div>
              </div>
            ) : index === 4 ? (
              <div className="w-full p-2 bg-gray-900 rounded-xl border border-gray-700 shadow-[0_0_18px_rgba(59,130,246,0.2)] hover:shadow-[0_0_26px_rgba(59,130,246,0.35)] transition-shadow relative overflow-hidden group">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]"></div>
                <div className="pointer-events-none absolute inset-0 opacity-15 [background:linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:28px_28px]"></div>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>

                <div className="mb-6 relative z-10">
                  <h3 className="text-xl font-bold text-white font-nacelle mb-1">Distributor Success Kit</h3>
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">
                    Status: ALL SYSTEMS GO
                  </p>
                </div>

                <div id="b2b-checklist" className="grid grid-cols-1 gap-2 relative z-10">
                  <div className="check-item">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">White-Label Marketing Kit</span>
                      <span className="status-tag min-w-[84px] text-center text-[10px] bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                        READY
                      </span>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">Recommended Spares (RSPL)</span>
                      <span className="status-tag min-w-[84px] text-center text-[10px] bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                        VERIFIED
                      </span>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">Rapid RMA Process</span>
                      <span className="status-tag min-w-[84px] text-center text-[10px] bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                        ONLINE
                      </span>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">Dealer Service Training</span>
                      <span className="status-tag min-w-[84px] text-center text-[10px] bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                        UNLOCKED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <svg
                className="card__visual-svg w-full h-full max-h-[400px] overflow-visible text-gray-700"
                viewBox="0 0 400 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={flowId} x1="0" y1="200" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#3B82F6" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#60A5FA" />
                  </linearGradient>
                  <filter id={glowId}>
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id={hqGradientId} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#93C5FD" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                <path d="M40 0 V400 M120 0 V400 M200 0 V400 M280 0 V400 M360 0 V400" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
                <path d="M0 40 H400 M0 120 H400 M0 200 H400 M0 280 H400 M0 360 H400" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />

                <circle cx="40" cy="200" r="12" fill="#1D4ED8" stroke="#3B82F6" strokeWidth="2">
                  {isAnimReady ? (
                    <animate attributeName="r" values="12;14;12" dur="3s" begin="1s" repeatCount="indefinite" />
                  ) : null}
                </circle>
                <text x="40" y="252" fill={`url(#${hqGradientId})`} fontSize="20" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TYCORUN HQ</text>

                <path d="M52 200 C 120 200, 150 80, 280 80 H 340" stroke={`url(#${flowId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
                <circle cx="340" cy="80" r="6" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
                <text x="340" y="108" fill="#E5E7EB" fontSize="20" textAnchor="middle">Private Label</text>

                <path d="M52 200 C 120 200, 150 160, 280 160 H 340" stroke={`url(#${flowId})`} strokeWidth="2" fill="none" opacity="0.8" />
                <circle cx="340" cy="160" r="6" fill="#1E3A8A" stroke="#A78BFA" strokeWidth="2" />
                <text x="340" y="192" fill="#E5E7EB" fontSize="20" textAnchor="middle">ODM Tuning</text>

                <path d="M52 200 C 120 200, 150 240, 280 240 H 340" stroke={`url(#${flowId})`} strokeWidth="2" fill="none" opacity="0.8" />
                <circle cx="340" cy="240" r="6" fill="#1E3A8A" stroke="#34D399" strokeWidth="2" />
                <text x="340" y="272" fill="#E5E7EB" fontSize="20" textAnchor="middle">SKD/CKD</text>

                <path d="M52 200 C 120 200, 150 320, 280 320 H 340" stroke={`url(#${flowId})`} strokeWidth="2" fill="none" opacity="0.6" />
                <circle cx="340" cy="320" r="6" fill="#1E3A8A" stroke="#FBBF24" strokeWidth="2" />
                <text x="340" y="352" fill="#E5E7EB" fontSize="20" textAnchor="middle">Distribution</text>

                {isAnimReady ? (
                  <>
                    <circle r="3" fill="white">
                      <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M52 200 C 120 200, 150 80, 280 80 H 340" />
                    </circle>
                    <circle r="3" fill="white">
                      <animateMotion dur="2.5s" begin="1s" repeatCount="indefinite" path="M52 200 C 120 200, 150 160, 280 160 H 340" />
                    </circle>
                    <circle r="3" fill="white">
                      <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M52 200 C 120 200, 150 240, 280 240 H 340" />
                    </circle>
                    <circle r="3" fill="white">
                      <animateMotion dur="3.5s" begin="1s" repeatCount="indefinite" path="M52 200 C 120 200, 150 320, 280 320 H 340" />
                    </circle>
                  </>
                ) : null}
              </svg>
            )}
          </div>
        </div>
      </section>
    );
  };

  return (
    <section
      className="grid-wrapper process-timeline relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="grid-background pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="process-flow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="mx-auto pb-10 text-center" data-aos="fade-up" data-aos-delay={200}>
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Commercial Partnership Frameworks
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Manufacturing Aligned With Your Profit Model
            </h2>
            <p className="text-lg text-gray-400">
              Global markets operate on diverse regulatory and fiscal frameworks.
              TYCORUN structures production not just to export vehicles, but to
              integrate with your specific business strategy—whether that requires
              total brand control, tariff mitigation, or rapid market entry.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                disabled={activeIndex === 0}
                className="carousel-arrow-button"
                aria-label="Previous slide"
              >
                <div className="button-box">
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                    </svg>
                  </span>
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                    </svg>
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                disabled={activeIndex === totalSlides - 1}
                className="carousel-arrow-button carousel-arrow-button--next"
                aria-label="Next slide"
              >
                <div className="button-box">
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                    </svg>
                  </span>
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
          </div>
          <div
            className="relative mx-auto w-full max-w-none overflow-visible"
            data-aos="fade-up"
            data-aos-delay={400}
            style={
              {
                "--carousel-gap": "25px",
                "--panel-width": "100%",
              } as React.CSSProperties
            }
          >
            <div
              ref={dragRef}
              className="process-carousel-track flex cursor-grab select-none transition-transform duration-700 ease-out active:cursor-grabbing"
              style={{
                transform: `translateX(calc(-${activeIndex} * (var(--panel-width) + var(--carousel-gap)) + ${Math.round(dragOffset)}px))`,
                gap: "var(--carousel-gap)",
                paddingRight: "var(--peek-space)",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              {slides.map((slide, index) =>
                renderOverviewSlide(
                  slide,
                  `slide-${index}`,
                  index,
                  activeIndex === index,
                  `slide-${index}`,
                ),
              )}
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={`carousel-dot-${index}`}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`carousel-dot ${activeIndex === index ? "carousel-dot--active" : ""}`}
              />
            ))}
          </div>
          </div>
        </div>
      </section>
  );
}

// --- Sub-Component: Features ---
function Features() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const featureCards = [
    {
      title: "Full-Process Traceability",
      description:
        "Full batch tracking across assembly, testing, and packaging for audit-ready deliveries.",
      icon: (
        <svg
          className="h-6 w-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          aria-hidden="true"
        >
          <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
          <path
            fillOpacity=".48"
            d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
          />
        </svg>
      ),
    },
    {
      title: "Compliance-Ready Design",
      description:
        "Built to match EEC/COC and DOT documentation requirements with localization support.",
      icon: (
        <svg
          className="h-6 w-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          aria-hidden="true"
        >
          <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
          <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
        </svg>
      ),
    },
    {
      title: "Serviceability Focus",
      description:
        "Modules and components designed for fast service and lower dealer maintenance cost.",
      icon: (
        <svg
          className="h-6 w-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          aria-hidden="true"
        >
          <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
          <path
            fillOpacity=".48"
            d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
          />
        </svg>
      ),
    },
    {
      title: "Reliability Testing",
      description:
        "100% functional testing, burn-in, and road simulation to reduce warranty claims.",
      icon: (
        <svg
          className="h-6 w-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          aria-hidden="true"
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
      ),
    },
    {
      title: "Logistics Optimization",
      description:
        "Packaging engineered for container loading efficiency and reduced shipping damage.",
      icon: (
        <svg
          className="h-6 w-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          aria-hidden="true"
        >
          <path
            fillOpacity=".48"
            d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
          />
          <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
        </svg>
      ),
    },
    {
      title: "Global Supply Assurance",
      description:
        "Stable sourcing for motor, controller, and pack components with long-term availability.",
      icon: (
        <svg
          className="h-6 w-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          aria-hidden="true"
        >
          <path
            fillOpacity=".48"
            d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
          />
          <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const cardElements = Array.from(
      cards.getElementsByClassName("glitter-card"),
    ) as HTMLElement[];

    const handlePointerMove = (e: PointerEvent) => {
      for (const card of cardElements) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const box = card.getBoundingClientRect();
        const point = { x, y };
        const ratio = { x: point.x / box.width, y: point.y / box.height };
        card.style.setProperty("--ratio-x", `${ratio.x}`);
        card.style.setProperty("--ratio-y", `${ratio.y}`);
      }
    };

    cards.addEventListener("pointermove", handlePointerMove);
    return () => {
      cards.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);


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
          <div data-aos="fade-up" data-aos-delay={200} className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
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
          
          <section data-aos="fade-up" data-aos-delay={200} className="glitter-cards-section">
            <img
              className="glitter"
              src="/webp/noise-base.webp"
              loading="lazy"
              alt=""
              aria-hidden="true"
            />
            <img
              className="glitter"
              src="/webp/noise-top.png"
              loading="lazy"
              alt=""
              aria-hidden="true"
            />

            <div id="cards" ref={cardsRef}>
              {featureCards.map((card) => (
                <div key={card.title} className="glitter-card">
                  <div className="card-content">
                    {card.icon}
                    <h3 className="text-base font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: Product Slider ---
const productSlides = [
  {
    subtitle: "Performance Series",
    title: ["Amur", "Leopard"],
    description: "High-torque commuter platform with durable frame and extended battery range.",
    image: "/webp/1.webp",
  },
  {
    subtitle: "Urban Mobility",
    title: ["Asiatic", "Lion"],
    description: "Compact city scooter tuned for comfort, efficiency, and daily deliveries.",
    image: "/webp/2.webp",
  },
  {
    subtitle: "All-Weather",
    title: ["Siberian", "Tiger"],
    description: "Weather-ready commuter build with reinforced suspension and lighting kit.",
    image: "/webp/3.webp",
  },
  {
    subtitle: "Touring Pack",
    title: ["Brown", "Bear"],
    description: "Comfort-focused touring setup with cargo support and long-range options.",
    image: "/webp/4.webp",
  },
];

function Product() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (initializedRef.current || !sliderRef.current) return;

    initializedRef.current = true;
    const parent = sliderRef.current;
    const images = Array.from(parent.querySelectorAll("img"));

    let cleanup = () => {};
    const displacementSlider = (opts: {
      parent: HTMLElement;
      images: HTMLImageElement[];
    }) => {
      const vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;

      const fragment = `
        varying vec2 vUv;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float dispFactor;
        void main() {
            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;
            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);
            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
            gl_FragColor = finalTexture;
        }
      `;

      const sliderImages: any[] = [];
      const baseWidth = 500;
      const baseHeight = 500;
      let renderW = baseWidth;
      let renderH = baseHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);
      const setRendererSize = () => {
        const parentWidth = opts.parent.clientWidth || baseWidth;
        const isMobile = window.matchMedia("(max-width: 1024px)").matches;
        const maxSize = isMobile ? parentWidth : 500;
        const nextSize = Math.max(260, Math.round(maxSize));
        renderW = nextSize;
        renderH = nextSize;
        renderer.setSize(renderW, renderH);
        renderer.domElement.style.width = `${nextSize}px`;
        renderer.domElement.style.height = `${nextSize}px`;
        renderer.domElement.style.maxWidth = "500px";
        renderer.domElement.style.maxHeight = "500px";
        if (isMobile) {
          renderer.domElement.style.left = "0";
          renderer.domElement.style.top = "0";
          renderer.domElement.style.transform = "none";
          renderer.domElement.style.margin = "0 auto";
          renderer.domElement.style.display = "block";
        } else {
          renderer.domElement.style.left = "55%";
          renderer.domElement.style.top = "15%";
          renderer.domElement.style.transform = "none";
          renderer.domElement.style.margin = "0";
          renderer.domElement.style.display = "block";
        }
      };
      setRendererSize();
      opts.parent.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      loader.crossOrigin = "anonymous";

      images.forEach((img) => {
        const image = loader.load(`${img.getAttribute("src")}?v=${Date.now()}`);
        image.magFilter = image.minFilter = THREE.LinearFilter;
        image.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages.push(image);
      });

      const scene = new THREE.Scene();
      scene.background = null;
      const camera = new THREE.OrthographicCamera(
        renderW / -2,
        renderW / 2,
        renderH / 2,
        renderH / -2,
        1,
        1000,
      );
      camera.position.z = 1;

      const mat = new THREE.ShaderMaterial({
        uniforms: {
          dispFactor: { type: "f", value: 0.0 },
          currentImage: { type: "t", value: sliderImages[0] },
          nextImage: { type: "t", value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
      });

      const geometry = new THREE.PlaneGeometry(baseWidth, baseHeight, 1, 1);
      const object = new THREE.Mesh(geometry, mat);
      object.position.set(0, 0, 0);
      scene.add(object);

      const addEvents = () => {
        const pagination = opts.parent.querySelector("#product-pagination");
        if (!pagination) return;
        const pagButtons = Array.from(
          pagination.querySelectorAll<HTMLButtonElement>("button"),
        );
        let isAnimating = false;
        let currentIndex = 0;
        let startTime = performance.now();
        let pausedAt: number | null = null;
        let isInView = true;
        let rafId = 0;
        const duration = 6000;

        const setProgress = (progress: number) => {
          const progressDeg = `${progress * 360}deg`;
          pagButtons.forEach((button, index) => {
            button.style.setProperty(
              "--progress",
              index === currentIndex ? progressDeg : "0deg",
            );
          });
        };

        const pause = () => {
          if (pausedAt === null) {
            pausedAt = performance.now();
          }
        };

        const resume = () => {
          if (pausedAt !== null) {
            startTime += performance.now() - pausedAt;
            pausedAt = null;
          }
        };

        const applySlideContent = (slideId: number) => {
          const slideSubtitleEl = opts.parent.querySelector(
            "#product-slide-subtitle",
          ) as HTMLElement | null;
          const slideTitleEl = opts.parent.querySelector(
            "#product-slide-title",
          ) as HTMLElement | null;
          const slideDescEl = opts.parent.querySelector(
            "#product-slide-desc",
          ) as HTMLElement | null;
          const nextSlideTitle = opts.parent.querySelector(
            `[data-slide-title="${slideId}"]`,
          ) as HTMLElement | null;
          const nextSlideSubtitle = opts.parent.querySelector(
            `[data-slide-subtitle="${slideId}"]`,
          ) as HTMLElement | null;
          const nextSlideDesc = opts.parent.querySelector(
            `[data-slide-desc="${slideId}"]`,
          ) as HTMLElement | null;

          if (slideSubtitleEl && nextSlideSubtitle) {
            TweenMax.killTweensOf(slideSubtitleEl);
            TweenMax.fromTo(
              slideSubtitleEl,
              0.5,
              { autoAlpha: 1, y: 0 },
              {
                autoAlpha: 0,
                y: 20,
                ease: "expo.in",
                onComplete: () => {
                  slideSubtitleEl.innerHTML = nextSlideSubtitle.innerHTML;
                  TweenMax.to(slideSubtitleEl, 0.5, { autoAlpha: 1, y: 0 });
                },
              },
            );
          }

          if (slideTitleEl && nextSlideTitle) {
            TweenMax.killTweensOf(slideTitleEl);
            TweenMax.fromTo(
              slideTitleEl,
              0.5,
              { autoAlpha: 1, y: 0 },
              {
                autoAlpha: 0,
                y: 20,
                ease: "expo.in",
                onComplete: () => {
                  slideTitleEl.innerHTML = nextSlideTitle.innerHTML;
                  TweenMax.to(slideTitleEl, 0.5, { autoAlpha: 1, y: 0 });
                },
              },
            );
          }

          if (slideDescEl && nextSlideDesc) {
            TweenMax.killTweensOf(slideDescEl);
            TweenMax.fromTo(
              slideDescEl,
              0.5,
              { autoAlpha: 1, y: 0 },
              {
                autoAlpha: 0,
                y: 20,
                ease: "expo.in",
                onComplete: () => {
                  slideDescEl.innerHTML = nextSlideDesc.innerHTML;
                  TweenMax.to(slideDescEl, 0.5, { autoAlpha: 1, y: 0 });
                },
              },
            );
          }
        };

        const goToSlide = (slideId: number, startFactor = 0) => {
          if (isAnimating || slideId === currentIndex) return;
          isAnimating = true;

          const active = pagination.querySelector(".active");
          if (active) active.className = "";
          pagButtons[slideId].className = "active";

          currentIndex = slideId;
          setProgress(0);

          mat.uniforms.nextImage.value = sliderImages[slideId];
          mat.uniforms.nextImage.needsUpdate = true;
          if (startFactor > 0) {
            mat.uniforms.dispFactor.value = startFactor;
          }

          TweenMax.to(
            mat.uniforms.dispFactor,
            Math.max(0.2, 1 - startFactor),
            {
              value: 1,
              ease: "expo.inOut",
              onComplete: () => {
                mat.uniforms.currentImage.value = sliderImages[slideId];
                mat.uniforms.currentImage.needsUpdate = true;
                mat.uniforms.dispFactor.value = 0.0;
                isAnimating = false;
                startTime = performance.now();
                setProgress(0);
              },
            },
          );

          applySlideContent(slideId);
        };

        pagButtons.forEach((el) => {
          el.addEventListener("click", function handleClick() {
            const slideId = parseInt(this.dataset.slide || "0", 10);
            goToSlide(slideId);
          });
        });

        const hoverTarget = opts.parent.parentElement || opts.parent;
        let isTouchMode = false;
        const handlePointerEnter = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          pause();
        };
        const handlePointerLeave = (event: PointerEvent) => {
          if (event.pointerType === "touch" || isTouchMode) return;
          resume();
        };
        const handlePointerDown = (event: PointerEvent) => {
          if (event.pointerType !== "touch") return;
          isTouchMode = true;
          if (pausedAt === null) {
            pause();
          } else {
            resume();
          }
        };
        hoverTarget.addEventListener("pointerenter", handlePointerEnter);
        hoverTarget.addEventListener("pointerleave", handlePointerLeave);
        hoverTarget.addEventListener("pointerdown", handlePointerDown);

        let dragStartX = 0;
        let dragStartY = 0;
        let isDragging = false;
        const dragThreshold = 30;

        const handleDragEnd = (event: PointerEvent) => {
          if (!isDragging) return;
          const deltaX = event.clientX - dragStartX;
          const absX = Math.abs(deltaX);
          const absY = Math.abs(event.clientY - dragStartY);
          isDragging = false;
          window.removeEventListener("pointerup", handleDragEnd);
          window.removeEventListener("pointercancel", handleDragEnd);
          if (absX < dragThreshold || absX < absY * 1.73) return;
          const goNext = deltaX < 0;
          const nextIndex = goNext
            ? (currentIndex + 1) % sliderImages.length
            : (currentIndex - 1 + sliderImages.length) % sliderImages.length;
          goToSlide(nextIndex);
        };

        const handleDragStart = (event: PointerEvent) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          const rect = renderer.domElement.getBoundingClientRect();
          const isInsideCanvas =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
          if (!isInsideCanvas) return;
          isDragging = true;
          dragStartX = event.clientX;
          dragStartY = event.clientY;
          if (event.pointerType === "touch") {
            event.preventDefault();
          }
          window.addEventListener("pointerup", handleDragEnd);
          window.addEventListener("pointercancel", handleDragEnd);
        };

        opts.parent.addEventListener("pointerdown", handleDragStart);

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              isInView = entry.isIntersecting;
              if (!isInView) {
                pause();
              } else {
                resume();
              }
            });
          },
          { threshold: 0.4 },
        );
        observer.observe(opts.parent);

        const tick = (now: number) => {
          if (isInView && pausedAt === null && !isAnimating) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setProgress(progress);
            if (elapsed >= duration) {
              const nextIndex = (currentIndex + 1) % sliderImages.length;
              goToSlide(nextIndex);
            }
          }
          rafId = requestAnimationFrame(tick);
        };

        setProgress(0);
        rafId = requestAnimationFrame(tick);

        cleanup = () => {
          hoverTarget.removeEventListener("pointerenter", handlePointerEnter);
          hoverTarget.removeEventListener("pointerleave", handlePointerLeave);
          hoverTarget.removeEventListener("pointerdown", handlePointerDown);
          opts.parent.removeEventListener("pointerdown", handleDragStart);
          window.removeEventListener("pointerup", handleDragEnd);
          window.removeEventListener("pointercancel", handleDragEnd);
          observer.disconnect();
          cancelAnimationFrame(rafId);
        };
      };

      addEvents();

      const handleResize = () => {
        setRendererSize();
        const isMobile = window.matchMedia("(max-width: 1024px)").matches;
        const fitScale = isMobile ? 1 : 1;
        camera.left = renderW / -2;
        camera.right = renderW / 2;
        camera.top = renderH / 2;
        camera.bottom = renderH / -2;
        camera.updateProjectionMatrix();
        object.scale.set(
          (renderW / baseWidth) * fitScale,
          (renderH / baseHeight) * fitScale,
          1,
        );
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      cleanup = () => window.removeEventListener("resize", handleResize);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    };

    imagesLoaded(images, () => {
      setIsLoading(false);
      displacementSlider({ parent, images: images as HTMLImageElement[] });
    });
    return () => cleanup();
  }, []);

  return (
    <section
      className={`product-slider${
        isLoading ? "product-slider--loading" : ""
      }`}
    >
      <div data-aos="fade-up" data-aos-delay={200} className="py-12 mx-auto max-w-6xl px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
          <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
            Commercial Partnership Frameworks
          </span>
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Manufacturing Aligned With Your Profit Model
        </h2>
        <p className="mt-3 text-base text-gray-500">
          Global markets operate on diverse regulatory and fiscal frameworks.
          TYCORUN structures production not just to export vehicles, but to
          integrate with your specific business strategy—whether that requires
          total brand control, tariff mitigation, or rapid market entry.
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
      </div>
      <div data-aos="fade-up" data-aos-delay={400} className="product-bubbles" aria-hidden="true">
        <ul className="product-bubbles__list">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={`bubble-${index}`}></li>
          ))}
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-delay={400} className="mx-auto max-w-6xl px-4 sm:px-6">
        <div id="product-slider" ref={sliderRef}>
          <div className="slider-inner">
            <div id="product-slider-content">
              <div id="product-slide-subtitle">{productSlides[0].subtitle}</div>
              <h3 id="product-slide-title" className="process-card-heading text-white">
                {productSlides[0].title[0]} {productSlides[0].title[1]}
              </h3>
              <p id="product-slide-desc">{productSlides[0].description}</p>
              {productSlides.map((slide, index) => (
                <span key={slide.image} data-slide-title={index}>
                  {slide.title[0]} {slide.title[1]}
                </span>
              ))}
              {productSlides.map((slide, index) => (
                <span key={`${slide.image}-subtitle`} data-slide-subtitle={index}>
                  {slide.subtitle}
                </span>
              ))}
              {productSlides.map((slide, index) => (
                <span key={`${slide.image}-desc`} data-slide-desc={index}>
                  {slide.description}
                </span>
              ))}
              <Link
                className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                href="/contact"
              >
                <span className="relative z-20">Contact Us</span>
                <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
              </Link>
            </div>
          </div>

          {productSlides.map((slide) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={`${slide.title.join(" ")} photo`}
            />
          ))}

          <div id="product-pagination">
            {productSlides.map((_, index) => (
              <button
                key={`slide-${index}`}
                className={index === 0 ? "active" : ""}
                data-slide={index}
                aria-label={`Show slide ${index + 1}`}
                type="button"
              ></button>
            ))}
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
        <div data-aos="fade-up" data-aos-delay={200} className="mx-auto max-w-3xl px-4 pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trusted by Global Distributors
          </h2>
          <p className="text-lg text-gray-400">
            Factory-direct supply with OEM/ODM programs, documentation, and
            export-ready quality control.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay={400} className="group relative w-full">
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
              const bgClass = isKeyClient ? "bg-linear-to-br from-gray-900 via-blue-900/10 to-gray-900 border-blue-500/40 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]" : "bg-linear-to-br from-gray-900 via-gray-800/20 to-gray-900 border-gray-800 hover:border-blue-500/40";

              return (
                <div key={index} className={`testimonial-card relative flex flex-col justify-between rounded-xl border p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ${widthClass} ${marginTop} ${bgClass}`}>
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
          <div className="px-5 pb-4 pt-4 text-sm leading-relaxed text-gray-400">{faq.answer}</div>
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
        <div data-aos="fade-up" data-aos-delay={200} className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            OEM / ODM FAQ
          </h2>
          <p className="text-lg text-gray-400">Commercial terms, compliance support, and partnership details.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay={400} className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">{faqs.slice(0, 3).map((faq, index) => <FaqItem key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />)}</div>
          <div className="flex flex-col gap-4">{faqs.slice(3, 6).map((faq, index) => <FaqItem key={index + 3} faq={faq} isOpen={openIndex === index + 3} onToggle={() => handleToggle(index + 3)} />)}</div>
        </div>
      </div>
    </section>
  );
}

export {
  CapacityDashboard,
  Features,
  Faq,
  ProcessTimeline,
  Product,
  Spotlight,
  Testimonials,
};

