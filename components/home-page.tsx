import Link from "next/link";

import {
  CapacityDashboard,
  Features,
  Faq,
  ProcessTimeline,
  Product,
  Spotlight,
  Testimonials,
} from "@/components/home-page-client";

// --- Sub-Component: HeroCard ---
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
                <svg
                  version="1.1"
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle fill="#1D4ED8" cx="32" cy="32" r="32" />
                  <path
                    fill="#0F172A"
                    d="M17 31c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6S13.7 31 17 31 M17 28c-5 0-9 4-9 9s4 9 9 9s9-4 9-9S22 28 17 28L17 28z"
                  />
                  <path
                    fill="#0F172A"
                    d="M47 31c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6S43.7 31 47 31 M47 28c-5 0-9 4-9 9s4 9 9 9s9-4 9-9S52 28 47 28L47 28z"
                  />
                  <polyline
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="18,36.5 33,36.5 35,35"
                  />
                  <line
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    x1="43"
                    y1="21.1"
                    x2="44"
                    y2="23"
                  />
                  <path
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M42 26c0 0 7-3 13 2"
                  />
                  <path
                    fill="#60A5FA"
                    d="M26 25.5h-4.6c8.8 10.3 15.6 4 15.6 4C37 26.6 32 25.5 26 25.5z"
                  />
                  <path
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M9 27c0 0 2-1.5 5-1.5h12c6 0 11 1.1 11 4c0 0-5 6.5-14-3.5"
                  />
                  <polyline
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="32,18.5 37,18.5 47,37"
                  />
                </svg>
              </div>

              {/* Logo Part 2: The Text 'TYCORUN' */}
              <div className="hc-logo-text flex items-center justify-center">
                <span className="block relative -top-[1px] font-nacelle text-xl font-semibold leading-none text-gray-100 tracking-tight">
                  TYCORUN
                </span>
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
                compliance support, and scalable manufacturing for global
                importers.
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
          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="pt-6 md:pt-12"
          >
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
                  <div className="text-center">
                    TYCO
                    <br />
                    RUN
                  </div>
                </div>
                <div className="min-w-0">
                  <h2
                    title="TYCORUN OEM Supply"
                    className="truncate text-lg font-bold text-white/90"
                  >
                    TYCORUN OEM Supply
                  </h2>
                  <span className="mt-1 inline-block rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-200/90">
                    Production Ready
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-xs font-semibold text-white">
                  Core Features
                </h3>
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
                <h3 className="mb-2 text-xs font-semibold text-white">
                  Other Features
                </h3>
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

// --- Sub-Component: Workflows ---
function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-10 md:pb-20 md:pt-20">
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            className="mx-auto max-w-3xl pb-12 text-center md:pb-20"
          >
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
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent z-10" />
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              data-aos="fade-up"
              data-aos-delay={200}
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
                  <svg
                    width="200"
                    height="160"
                    viewBox="0 0 200 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="40"
                      y="30"
                      width="120"
                      height="100"
                      rx="4"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <path d="M60 50 H140" stroke="#374151" />
                    <path d="M60 70 H140" stroke="#374151" />
                    <path d="M60 90 H140" stroke="#374151" />
                    <circle
                      cx="160"
                      cy="30"
                      r="10"
                      fill="#EF4444"
                      fillOpacity="0.2"
                      stroke="#EF4444"
                    />
                    <path d="M160 25 V35 M155 30 H165" stroke="#EF4444" />
                    <circle
                      cx="40"
                      cy="130"
                      r="10"
                      fill="#3B82F6"
                      fillOpacity="0.2"
                      stroke="#3B82F6"
                    />
                    <path d="M35 130 H45" stroke="#3B82F6" />
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
              data-aos="fade-up"
              data-aos-delay={200}
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
                  <svg
                    width="200"
                    height="160"
                    viewBox="0 0 200 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 20 L160 50 L160 110 L100 140 L40 110 L40 50 Z"
                      stroke="#2563EB"
                      strokeWidth="2"
                      fill="#1E3A8A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M100 20 V 80 M160 50 L100 80 M40 50 L100 80"
                      stroke="#2563EB"
                      strokeWidth="1"
                    />
                    <path
                      d="M100 80 V 140"
                      stroke="#2563EB"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <rect
                      x="20"
                      y="70"
                      width="160"
                      height="2"
                      fill="#60A5FA"
                      fillOpacity="0.8"
                    />
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
              data-aos="fade-up"
              data-aos-delay={200}
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
                  <svg
                    width="200"
                    height="160"
                    viewBox="0 0 200 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="40"
                      y="40"
                      width="40"
                      height="40"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <rect
                      x="90"
                      y="40"
                      width="40"
                      height="40"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <rect
                      x="140"
                      y="40"
                      width="40"
                      height="40"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <rect
                      x="40"
                      y="90"
                      width="40"
                      height="40"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <rect
                      x="90"
                      y="90"
                      width="40"
                      height="40"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <rect
                      x="140"
                      y="90"
                      width="40"
                      height="40"
                      stroke="#4B5563"
                      strokeWidth="2"
                      fill="#111827"
                    />
                    <path
                      d="M20 145 H 180"
                      stroke="#2563EB"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
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
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            className="mx-auto mt-6 max-w-sm lg:max-w-none"
          >
            <TrustBadgeStrip />
          </div>
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
      <Product />
      <Features />
      <Testimonials />
      <Faq />
    </>
  );
}
