"use client";

import { useState } from "react";
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
  },
  {
    title: "Food Delivery",
    pain: "Rapid stop-and-go routes, tight schedules, and cargo temperature demands.",
    solution:
      "Lightweight chassis, insulated cargo options, and fast swap cadence for uptime.",
    keyword: "Food Delivery Electric Bike",
    icon: "fa-utensils",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(34, 197, 94, 0.35))",
  },
  {
    title: "Ride-Hailing",
    pain: "High turnover, theft exposure, and costly downtime in shared fleets.",
    solution:
      "Rugged bodywork, IoT smart lock, and remote diagnostics for fast recovery.",
    keyword: "Shared Mobility Solution",
    icon: "fa-users",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(168, 85, 247, 0.35))",
  },
  {
    title: "Public Service & Security",
    pain: "Speed, reliability, and power for specialized equipment on duty.",
    solution:
      "High-speed motor options, siren/light integration, and rapid response support.",
    keyword: "Government Fleet Solution",
    icon: "fa-shield-halved",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(59, 130, 246, 0.35))",
  },
  {
    title: "Lease-to-Own",
    pain: "Predictable monthly costs and residual value risk for fleet buyers.",
    solution:
      "Standardized service plans, swap-ready batteries, and finance-ready BOM.",
    keyword: "Lease-to-Own EV Program",
    icon: "fa-file-invoice-dollar",
    background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(251, 146, 60, 0.35))",
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
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
            Scenario-Based Electric Motorcycle Solutions
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Dedicated stacks for delivery, shared mobility, and public service
            fleets with SEO-focused vertical keywords.
          </p>
        </div>
        <div className="solution-options">
          {verticals.map((item, index) => (
            <div
              key={item.title}
              className={`option${activeIndex === index ? " active" : ""}`}
              style={{ ["--optionBackground" as string]: item.background }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div className="info">
                  <div className="main">{item.title}</div>
                  <div className="sub">{item.keyword}</div>
                </div>
              </div>
            </div>
          ))}
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
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-blue-300">
              Swap Flow
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 text-sm text-gray-300">
              <div className="flex flex-col items-center gap-3">
                <div className="h-16 w-16 rounded-2xl border border-blue-500/30 bg-blue-500/10"></div>
                Vehicle
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-16 w-16 rounded-2xl border border-blue-500/30 bg-blue-500/10"></div>
                Swap Cabinet
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-16 w-16 rounded-2xl border border-blue-500/30 bg-blue-500/10"></div>
                Full Battery
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-center text-blue-100">
              6-Second Swap Efficiency Loop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
            Solutions in Action
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-300">
                {caseStudy.highlight}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-100">
                {caseStudy.title}
              </h3>
              <p className="mt-4 text-gray-400">{caseStudy.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementProcess() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
            From Concept to Fleet Deployment
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-300">
                {`Step 0${index + 1}`}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-100">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SolutionPage() {
  return (
    <>
      <SolutionHero />
      <Ecosystem />
      <Verticals />
      <EnergySolution />
      <CaseStudies />
      <EngagementProcess />
    </>
  );
}
