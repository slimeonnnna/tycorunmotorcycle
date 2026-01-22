"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SolutionEcosystemSwiper from "./solution-ecosystem-swiper";

const ecosystemItems = [
  {
    title: "Purpose-Built Hardware",
    copy: "Chassis engineered for specific duty cycles across cargo and passenger scenarios.",
  },
  {
    title: "Advanced Energy System",
    copy: "CATL-cell battery packs and swapping stations designed for high utilization.",
  },
  {
    title: "Digital Fleet Management",
    copy: "IoT modules, GPS tracking, and BMS analytics for real-time operations control.",
  },
];

const verticals = [
  {
    title: "Last-Mile Delivery",
    pain: "High mileage, range anxiety, and heavy payloads on dense routes.",
    solution:
      "Dual-battery setup, reinforced racks, and 100km+ real-world range for daily routes.",
    keyword: "Logistics EV Solution",
    icon: "fa-boxes-stacked",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(30, 64, 175, 0.45))",
    image: "/webp/1.webp",
  },
  {
    title: "Food Delivery",
    pain: "Rapid stop-and-go routes, tight schedules, and cargo temperature demands.",
    solution:
      "Lightweight chassis, insulated cargo options, and fast swap cadence for uptime.",
    keyword: "Food Delivery Electric Bike",
    icon: "fa-utensils",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(34, 197, 94, 0.35))",
    image: "/webp/2.webp",
  },
  {
    title: "Ride-Hailing",
    pain: "High turnover, theft exposure, and costly downtime in shared fleets.",
    solution:
      "Rugged bodywork, IoT smart lock, and remote diagnostics for fast recovery.",
    keyword: "Shared Mobility Solution",
    icon: "fa-users",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(168, 85, 247, 0.35))",
    image: "/webp/3.webp",
  },
  {
    title: "Public Service & Security",
    pain: "Speed, reliability, and power for specialized equipment on duty.",
    solution:
      "High-speed motor options, siren/light integration, and rapid response support.",
    keyword: "Government Fleet Solution",
    icon: "fa-shield-halved",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(59, 130, 246, 0.35))",
    image: "/webp/4.webp",
  },
  {
    title: "Lease-to-Own",
    pain: "Predictable monthly costs and residual value risk for fleet buyers.",
    solution:
      "Standardized service plans, swap-ready batteries, and finance-ready BOM.",
    keyword: "Lease-to-Own EV Program",
    icon: "fa-file-invoice-dollar",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(251, 146, 60, 0.35))",
    image: "/webp/5.webp",
  },
];

const caseStudies = [
  {
    title: "Brazilian Logistics Fleet",
    result: "Cut fuel costs by 60% while maintaining 99% uptime on urban routes.",
    highlight: "Logistics Case Study",
  },
  {
    title: "Southeast Asia Shared Mobility",
    result: "Scaled to 5,000 units with standardized swaps and low service overhead.",
    highlight: "Rental Case Study",
  },
];

const engagementSteps = [
  {
    title: "Consultation",
    copy: "Analyze your route density, payload, and cost structure.",
  },
  {
    title: "Configuration",
    copy: "Select chassis, battery, and fleet management specifications.",
  },
  {
    title: "Pilot Run",
    copy: "Deploy a 10-50 unit batch to validate KPIs and workflows.",
  },
  {
    title: "Mass Deployment",
    copy: "Scale with SKD/CKD shipping, training, and support.",
  },
];

const energyCards = [
  {
    title: "6-Second Swap",
    copy:
      "Drivers swap and go instantly. No plug-in downtime means higher daily revenue per vehicle.",
    items: [
      { icon: "fa-motorcycle", label: "Vehicle" },
      { icon: "fa-boxes-stacked", label: "Swap Cabinet" },
      { icon: "fa-battery-full", label: "Full Battery" },
    ],
  },
  {
    title: "Safety & Protection",
    copy:
      "Fire-proof cabinets with aerosol suppression and constant BMS cloud monitoring.",
    items: [
      { icon: "fa-shield-halved", label: "Fire Protection" },
      { icon: "fa-cloud", label: "BMS Cloud" },
      { icon: "fa-bolt", label: "Instant Alerts" },
    ],
  },
  {
    title: "Modular Scalability",
    copy:
      "Start with a 6-port cabinet and scale to a city-wide network as your fleet grows.",
    items: [
      { icon: "fa-layer-group", label: "6-Port Start" },
      { icon: "fa-arrows-rotate", label: "Swap Network" },
      { icon: "fa-chart-line", label: "Fleet Growth" },
    ],
  },
];

function SolutionHero() {
  return (
    <section className="hero-grid-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
                <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-sm uppercase tracking-widest">
                  Turnkey Electric Solutions
                </span>
              </div>
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Turnkey Electric Motorcycle Solutions for Global Operations
              </h1>
              <p className="mt-5 text-lg text-gray-400 max-w-2xl">
                Beyond manufacturing. We deliver integrated hardware, battery
                swapping infrastructure, and fleet management intelligence to
                optimize your commercial TCO.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn group bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                >
                  <span className="relative inline-flex items-center">
                    Consult a Solution Architect
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <SolutionEcosystemSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
            A Unified Solution Architecture
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            One coordinated platform that aligns product hardware, energy
            infrastructure, and digital operations.
          </p>
        </div>
        <div className="solution-ecosystem-grid">
          {ecosystemItems.map((item, index) => (
            <div
              key={item.title}
              className="solution-ecosystem-card rounded-2xl border border-gray-800 bg-gray-900/60 p-6"
            >
              <span className="solution-ecosystem-index" aria-hidden="true">
                {`0${index + 1}`}
              </span>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">
                {index === 0 && <i className="fas fa-motorcycle" aria-hidden="true"></i>}
                {index === 1 && <i className="fas fa-charging-station" aria-hidden="true"></i>}
                {index === 2 && <i className="fas fa-network-wired" aria-hidden="true"></i>}
              </div>
              <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
              <p className="mt-3 text-gray-400">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Verticals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const items = verticals;
  const dragStartXRef = useRef<number | null>(null);
  const dragStartYRef = useRef<number | null>(null);
  const dragMovedRef = useRef(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabListRef = useRef<HTMLDivElement | null>(null);

  const scrollToTab = (index: number, behavior: ScrollBehavior) => {
    const activeTab = tabRefs.current[index];
    const tabList = tabListRef.current;
    if (!activeTab || !tabList) return;
    if (tabList.scrollWidth <= tabList.clientWidth) return;

    const targetLeft =
      activeTab.offsetLeft -
      (tabList.clientWidth - activeTab.offsetWidth) / 2;
    const maxScrollLeft = tabList.scrollWidth - tabList.clientWidth;
    const nextScrollLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    tabList.style.scrollSnapType = "none";
    window.requestAnimationFrame(() => {
      tabList.scrollTo({ left: nextScrollLeft, behavior });
      window.setTimeout(() => {
        tabList.style.scrollSnapType = "";
      }, 300);
    });
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const showPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [items.length]);

  useEffect(() => {
    scrollToTab(activeIndex, "smooth");
  }, [activeIndex]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragMovedRef.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartXRef.current === null) return;
    const deltaX = event.clientX - dragStartXRef.current;
    const deltaY = dragStartYRef.current !== null ? event.clientY - dragStartYRef.current : 0;
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
      dragStartXRef.current = null;
      dragStartYRef.current = null;
      dragMovedRef.current = false;
      setIsDragging(false);
      event.currentTarget.releasePointerCapture(event.pointerId);
      return;
    }
    if (Math.abs(deltaX) > 6) {
      dragMovedRef.current = true;
    }
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartXRef.current === null) return;
    const deltaX = event.clientX - dragStartXRef.current;
    const threshold = 60;
    if (Math.abs(deltaX) >= threshold) {
      if (deltaX < 0) {
        showNext();
      } else {
        showPrevious();
      }
    }
    dragStartXRef.current = null;
    dragStartYRef.current = null;
    dragMovedRef.current = false;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <section className="solution-travel">
      <div className="solution-travel__heading">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
            Scenario-Based Electric Motorcycle Solutions
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Dedicated stacks for delivery, shared mobility, and public service
            fleets with SEO-focused vertical keywords.
          </p>
        </div>
      </div>
      <div className="intro-section">
        <div className="container">
          <div className="grid">
            <div className="column-xs-12">
              <ul className="slider">
                {items.map((item, index) => (
                  <li
                    key={item.title}
                    className={`slider-item${index === activeIndex ? " active" : ""}`}
                  >
                    <div className="grid vertical">
                      <div className="column-xs-12 column-md-10">
                        <div className="image-holder">
                          <div
                            className={`image-card${isDragging ? " is-dragging" : ""}`}
                            style={{ backgroundImage: `url(${item.image})` }}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerEnd}
                            onPointerCancel={handlePointerEnd}
                            onPointerLeave={handlePointerEnd}
                          >
                            <div
                              className="image-card__controls"
                              onPointerDown={(event) => event.stopPropagation()}
                              onPointerUp={(event) => event.stopPropagation()}
                              onPointerMove={(event) => event.stopPropagation()}
                            >
                              <button
                                type="button"
                                className="carousel-arrow-button"
                                aria-label="Previous slide"
                                onClick={showPrevious}
                              >
                                <div className="button-box">
                                  <span className="button-elem" aria-hidden="true">
                                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                    </svg>
                                  </span>
                                  <span className="button-elem" aria-hidden="true">
                                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                    </svg>
                                  </span>
                                </div>
                              </button>
                              <button
                                type="button"
                                className="carousel-arrow-button carousel-arrow-button--next"
                                aria-label="Next slide"
                                onClick={showNext}
                              >
                                <div className="button-box">
                                  <span className="button-elem" aria-hidden="true">
                                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                    </svg>
                                  </span>
                                  <span className="button-elem" aria-hidden="true">
                                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                    </svg>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="image-card__text">
                            <h3 className="image-card__title">
                              <span className="underline">{item.title}</span>
                            </h3>
                            <p className="image-card__description">{item.solution}</p>
                          </div>
                        </div>
                        <div className="grid">
                          <div className="column-xs-12 column-md-9">
                            <div className="intro show-mobile"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className="solution-travel-tabs"
                role="tablist"
                aria-label="Solution tabs"
                ref={tabListRef}
              >
                {items.map((tab, tabIndex) => (
                  <button
                    key={tab.title}
                    type="button"
                    role="tab"
                    aria-selected={tabIndex === activeIndex}
                    className={`solution-travel-tab${
                      tabIndex === activeIndex ? " is-active" : ""
                    }`}
                    onClick={() => setActiveIndex(tabIndex)}
                    ref={(el) => {
                      tabRefs.current[tabIndex] = el;
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergySolution() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          <div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
              Stop Charging, Start Swapping
            </h2>
            <p className="mt-4 text-gray-400">
              Battery swapping keeps riders moving. A 6-second swap can double
              daily utilization without charging downtime.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Battery Swapping Station deployment planning.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                6-second swap workflow with live inventory.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Energy analytics for cost and uptime optimization.
              </li>
            </ul>
          </div>
          <div className="energy-swap-card">
            <input
              className="energy-swap-card__input"
              type="radio"
              name="energy-swap"
              id="energy-slide-0"
              defaultChecked
            />
            <input
              className="energy-swap-card__input"
              type="radio"
              name="energy-swap"
              id="energy-slide-1"
            />
            <input
              className="energy-swap-card__input"
              type="radio"
              name="energy-swap"
              id="energy-slide-2"
            />
            <div className="energy-swap-card__glow"></div>
            <div className="energy-swap-card__header">
              <div className="energy-swap-card__controls image-card__controls">
                <div className="energy-swap-card__control-set" data-for="0">
                  <label
                    className="carousel-arrow-button"
                    aria-label="Previous slide"
                    htmlFor="energy-slide-2"
                  >
                    <div className="button-box">
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </label>
                  <label
                    className="carousel-arrow-button carousel-arrow-button--next"
                    aria-label="Next slide"
                    htmlFor="energy-slide-1"
                  >
                    <div className="button-box">
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </label>
                </div>
                <div className="energy-swap-card__control-set" data-for="1">
                  <label
                    className="carousel-arrow-button"
                    aria-label="Previous slide"
                    htmlFor="energy-slide-0"
                  >
                    <div className="button-box">
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </label>
                  <label
                    className="carousel-arrow-button carousel-arrow-button--next"
                    aria-label="Next slide"
                    htmlFor="energy-slide-2"
                  >
                    <div className="button-box">
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </label>
                </div>
                <div className="energy-swap-card__control-set" data-for="2">
                  <label
                    className="carousel-arrow-button"
                    aria-label="Previous slide"
                    htmlFor="energy-slide-1"
                  >
                    <div className="button-box">
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </label>
                  <label
                    className="carousel-arrow-button carousel-arrow-button--next"
                    aria-label="Next slide"
                    htmlFor="energy-slide-0"
                  >
                    <div className="button-box">
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                      <span className="button-elem" aria-hidden="true">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="energy-swap-card__panels">
              {energyCards.map((card, index) => (
                <div key={card.title} className="energy-swap-card__panel" data-index={index}>
                  <h3 className="energy-swap-card__headline">{card.title}</h3>
                  <p className="energy-swap-card__copy">{card.copy}</p>
                  <div className="energy-swap-card__divider"></div>
                  <ul className="energy-swap-card__list">
                    {card.items.map((item) => (
                      <li key={item.label} className="energy-swap-card__list-item">
                        <span className="energy-swap-card__list-icon">
                          <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                        </span>
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="energy-swap-card__watermark">SWAP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return null;
}

function EngagementProcess() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
            Deployment Roadmap
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            3-stage deployment roadmap across discovery, validation, and scale.
          </p>
        </div>
        <div className="deployment-roadmap">
          <div className="deployment-roadmap__grid">
            <div className="a deployment-roadmap__phase">
              <p>PHASE 01</p>
              <span>Discovery &amp; Config</span>
            </div>
            <div className="b deployment-roadmap__card">
              <h3>Requirement Audit</h3>
              <span>
                Analyze route topology, daily mileage, and payload needs to define the
                TCO baseline.
              </span>
            </div>
            <div className="c deployment-roadmap__card">
              <h3>Solution Architecture</h3>
              <span>
                Select chassis platform, battery capacity, and IoT protocols tailored
                to your fleet.
              </span>
            </div>
            <div className="d deployment-roadmap__card">
              <h3>ODM Engineering</h3>
              <span>
                Rapid prototyping of custom racks, branding livery, and software/UI
                modifications.
              </span>
            </div>
            <div className="e deployment-roadmap__phase">
              <p>PHASE 02</p>
              <span>Validation Pilot</span>
            </div>
            <div className="f deployment-roadmap__card">
              <h3>Prototype Delivery</h3>
              <span>
                Shipping 10-50 pilot units for real-world stress testing in your target
                city.
              </span>
            </div>
            <div className="g deployment-roadmap__card">
              <h3>Data Optimization</h3>
              <span>
                Fine-tuning motor logic and suspension based on pilot driver feedback.
              </span>
            </div>
            <div className="h deployment-roadmap__card">
              <h3>Global Certification</h3>
              <span>
                Finalizing EEC, DOT, or local homologation paperwork for mass import
                legality.
              </span>
            </div>
            <div className="i deployment-roadmap__phase">
              <p>PHASE 03</p>
              <span>Scale &amp; Support</span>
            </div>
            <div className="j deployment-roadmap__card">
              <h3>Mass Production</h3>
              <span>
                Automated assembly with ISO-9001 QC standards. Capacity: 500+ units/day.
              </span>
            </div>
            <div className="k deployment-roadmap__card">
              <h3>Logistics (SKD/CKD)</h3>
              <span>
                Customized container nesting plans to minimize freight costs and import
                duties.
              </span>
            </div>
            <div className="l deployment-roadmap__card">
              <h3>Local Training</h3>
              <span>
                Handover of repair manuals, spare parts lists (RSPL), and mechanic
                training.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionPage() {
  return (
    <div className="solution-page">
      <SolutionHero />
      <Ecosystem />
      <Verticals />
      <EnergySolution />
      <EngagementProcess />
    </div>
  );
}
