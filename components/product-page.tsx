import ProductHeroBackground from "./product-hero-background";
import ProductCoreAdvantageSwiper from "./product-core-advantage-swiper";
import ProductTcoCalculator from "./product-tco-calculator";
import ProductSpotlight from "./product-spotlight";
import { Product } from "./product-section";
import { Testimonials } from "./home-page-client";

function ProductHero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 product-hero">
      <ProductHeroBackground />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 product-hero-content">
        <div className="text-center pb-12 md:pb-16">
          <div
            className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent font-mono text-base tracking-wider uppercase">
              Commercial Electric Motorcycle Platform
            </span>
          </div>
          <h1
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-5xl"
            data-aos="fade-up"
          >
            Heavy-Duty Commercial Electric Motorcycles for Global Fleets
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Engineered for last-mile delivery and logistics: high payload, long-range swappable
            batteries, and minimal maintenance costs.
          </p>
          <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay="300">
            <div className="hero-image-container">
              <div className="profile-image-glow"></div>
              <div className="profile-image-frame">
                <div className="profile-image" id="profileImage">
                  <div className="profile-placeholder">
                    <i className="fas fa-motorcycle"></i>
                  </div>
                </div>
              </div>
              <div className="floating-badge badge-1">
                <i className="fas fa-boxes-stacked"></i>
                <div className="badge-content">
                  <span className="badge-title">High Payload</span>
                  <span className="badge-libs">Reinforced chassis, 200kg+ rating</span>
                </div>
              </div>
              <div className="floating-badge badge-2">
                <i className="fas fa-bolt"></i>
                <div className="badge-content">
                  <span className="badge-title">Swap Ready</span>
                  <span className="badge-libs">30s battery swap, nonstop shifts</span>
                </div>
              </div>
              <div className="floating-badge badge-3">
                <i className="fas fa-shield-halved"></i>
                <div className="badge-content">
                  <span className="badge-title">Fleet Durable</span>
                  <span className="badge-libs">Built for daily commercial duty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommercialDifference() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
            <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent font-mono text-base tracking-wider uppercase">
              The Commercial Difference
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-xl font-semibold text-transparent sm:text-2xl md:text-4xl mb-4">
            Why Choose Commercial Grade Over Consumer Models?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consumer scooters look cheaper upfront, but fleet downtime destroys margins. Commercial
            specs are engineered for daily routes, heavier loads, and predictable maintenance.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent z-10" />
        </div>
        <ProductSpotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 after:-top-32 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            href="#0"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <div className="flex h-72 items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="30" width="120" height="100" rx="4" stroke="#4B5563" strokeWidth="2" fill="#111827" />
                  <path d="M60 50 H140" stroke="#374151" />
                  <path d="M60 70 H140" stroke="#374151" />
                  <path d="M60 90 H140" stroke="#374151" />
                  <circle cx="160" cy="30" r="10" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" />
                  <path d="M155 30 H165" stroke="#3B82F6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                      Reinforced Chassis
                    </span>
                  </span>
                </div>
                <p className="text-gray-400">
                  Tested for 200kg+ payloads vs. consumer 150kg limits.
                </p>
              </div>
            </div>
          </a>

          <a
            data-aos="fade-up"
            data-aos-delay="300"
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 after:-top-32 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            href="#0"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <div className="flex h-72 items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="30" width="120" height="100" rx="4" stroke="#4B5563" strokeWidth="2" fill="#111827" />
                  <circle cx="100" cy="80" r="30" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M100 50 V110" stroke="#3B82F6" />
                  <path d="M70 80 H130" stroke="#3B82F6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                      Fleet Battery Life
                    </span>
                  </span>
                </div>
                <p className="text-gray-400">
                  2000+ cycle LFP packs vs. standard Li-ion degradation.
                </p>
              </div>
            </div>
          </a>

          <a
            data-aos="fade-up"
            data-aos-delay="400"
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 after:-top-32 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            href="#0"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <div className="flex h-72 items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="40" width="140" height="80" rx="8" stroke="#4B5563" strokeWidth="2" fill="#111827" />
                  <path d="M60 80 H140" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" />
                  <circle cx="60" cy="80" r="6" fill="#3B82F6" />
                  <circle cx="140" cy="80" r="6" fill="#3B82F6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                      Maintenance Free
                    </span>
                  </span>
                </div>
                <p className="text-gray-400">
                  Hub motor (no belt/chain) vs. frequent drivetrain service.
                </p>
              </div>
            </div>
          </a>
        </ProductSpotlight>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 bg-gray-950 grid gap-12 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] overflow-x-hidden product-lineup">
      <div className="w-full max-w-full space-y-6 min-w-0 overflow-hidden [overflow-wrap:anywhere]">
        <div className="text-base uppercase tracking-widest text-blue-300">
          Lineup Focus
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text mt-2 w-full text-xl font-semibold text-transparent sm:text-2xl md:text-4xl break-words min-w-0 [overflow-wrap:anywhere]">
          Configure the Right Platform for Every Route
        </h2>
        <p className="mt-3 w-full text-base text-gray-400 break-words min-w-0 [overflow-wrap:anywhere]">
          Select a commercial electric motorcycle platform based on payload, route density, and
          service needs. Each option is optimized for uptime, operator comfort, and ROI.
        </p>
        <ul className="mt-4 w-full space-y-2 text-base text-gray-300 break-words min-w-0 [overflow-wrap:anywhere]">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"></span>
            <span className="min-w-0 flex-1">
              Lightweight city runner for food delivery and dense urban stops.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"></span>
            <span className="min-w-0 flex-1">
              Cargo-heavy logistics platform with extended racks and torque.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"></span>
            <span className="min-w-0 flex-1">
              Patrol/utility trim built for security, rental, and public fleets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"></span>
            <span className="min-w-0 flex-1">
              Modular battery bays for rapid swap workflows and mixed routes.
            </span>
          </li>
        </ul>
      </div>
      <div className="product-core-advantage" data-aos="fade-left">
        <ProductCoreAdvantageSwiper />
      </div>
    </section>
  );
}

function TechSpecs() {
  const specs = [
    {
      title: "Swappable Battery System",
      copy: "30-second swap keeps vehicles on the road while riders rotate shifts.",
    },
    {
      title: "IoT Fleet Management",
      copy: "Remote monitoring for location, battery health, and rider behavior.",
    },
    {
      title: "Customizable Cargo System",
      copy: "Compatible with pizza boxes, 200L trunks, and front racks.",
    },
  ];

  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-xl font-semibold text-transparent sm:text-2xl md:text-4xl mb-4">
            Built for 99% Uptime
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Commercial-grade systems engineered for predictable availability and lower operating
            costs.
          </p>
        </div>
        <div className="core-spec-grid">
          {specs.map((spec, index) => (
            <div key={spec.title} className="core-spec-card">
              <div className="core-spec-border"></div>
              <div className="core-spec-header">
                <span className="core-spec-index">0{index + 1}</span>
                <span className="core-spec-kicker">Core Spec</span>
              </div>
              <h3 className="core-spec-title">{spec.title}</h3>
              <p className="core-spec-copy">{spec.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TcoCalculatorSection() {
  return (
    <section className="relative bg-gray-950 section-glow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-xl font-semibold text-transparent sm:text-2xl md:text-4xl mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-gray-400">
            See yearly savings when replacing fuel fleets with commercial EVs.
          </p>
        </div>
        <ProductTcoCalculator />
      </div>
    </section>
  );
}

function Branding() {
  return (
    <section className="relative bg-gray-950 product-services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-xl font-semibold text-transparent sm:text-2xl md:text-4xl mb-4">
            Service Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end support for OEM fleets, from compliance and pilot runs to scale delivery.
          </p>
        </div>
        <div className="service-card-grid">
          <div className="service-card service-card--blue">
            <div className="service-card-header">
              <span className="service-card-label">Capability 01</span>
              <span className="service-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </svg>
              </span>
            </div>
            <div className="service-card-body">
              <h3>OEM Launch Readiness</h3>
              <p>Rapid Prototyping Cycle</p>
              <div className="service-metric">
                <span className="service-metric-value">15 Days</span>
              </div>
            </div>
            <div className="service-card-footer">
              <div className="service-card-tags">
                <span className="service-tag">QA Check</span>
                <span className="service-tag">Eng</span>
                <span className="service-tag">Launch</span>
              </div>
            </div>
          </div>

          <div className="service-card service-card--teal">
            <div className="service-card-header">
              <span className="service-card-label">Capability 02</span>
              <span className="service-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </svg>
              </span>
            </div>
            <div className="service-card-body">
              <h3>Global Compliance</h3>
              <p>Certified for Export</p>
              <div className="service-metric">
                <span className="service-metric-value">30+ Mkts</span>
              </div>
            </div>
            <div className="service-card-footer">
              <div className="service-card-tags">
                <span className="service-tag">EEC/DOT</span>
                <span className="service-tag">Lab Test</span>
                <span className="service-tag">Legal</span>
              </div>
            </div>
          </div>

          <div className="service-card service-card--cyan">
            <div className="service-card-header">
              <span className="service-card-label">Capability 03</span>
              <span className="service-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </svg>
              </span>
            </div>
            <div className="service-card-body">
              <h3>Supply Chain Scaling</h3>
              <p>On-Time Delivery Rate</p>
              <div className="service-metric">
                <span className="service-metric-value">98% OTD</span>
              </div>
            </div>
            <div className="service-card-footer">
              <div className="service-card-tags">
                <span className="service-tag">Planning</span>
                <span className="service-tag">Sourcing</span>
                <span className="service-tag">Scale</span>
              </div>
            </div>
          </div>

          <div className="service-card service-card--navy">
            <div className="service-card-header">
              <span className="service-card-label">Capability 04</span>
              <span className="service-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </svg>
              </span>
            </div>
            <div className="service-card-body">
              <h3>After-Sales Support</h3>
              <p>Spare Parts Allocation</p>
              <div className="service-metric">
                <span className="service-metric-value">1% Free</span>
              </div>
            </div>
            <div className="service-card-footer">
              <div className="service-card-tags">
                <span className="service-tag">Spares</span>
                <span className="service-tag">Training</span>
                <span className="service-tag">RMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const testimonials = [
    {
      name: "European Distributor",
      company: "EEC Market",
      content:
        "Documentation was complete and the EEC compliance package made homologation straightforward for multiple EU countries.",
      categories: [1, 2],
    },
    {
      name: "South American Assembler",
      company: "CKD Program",
      content:
        "Switching from CBU to CKD reduced duties and shortened our landed cost cycle by 25%.",
      categories: [1, 4],
    },
    {
      name: "Middle East Importer",
      company: "Regional Dealer Network",
      content:
        "Fast lead times and consistent QC allowed us to plan monthly arrivals with low warranty exposure.",
      categories: [1, 3],
    },
    {
      name: "African Fleet Operator",
      company: "Delivery & Mobility",
      content:
        "Spare parts planning and service documentation helped our technicians scale after-sales support quickly.",
      categories: [1, 5],
    },
    {
      name: "LATAM Distributor",
      company: "ODM Partner",
      content:
        "We launched a localized trim within 60 days using their ODM process and tooling support.",
      categories: [1, 5],
    },
    {
      name: "SEA Importer",
      company: "Urban Mobility",
      content:
        "Container loading specs and steel rack packaging improved our shipping efficiency immediately.",
      categories: [1, 2],
    },
    {
      name: "GCC Dealer Group",
      company: "Hot Climate Market",
      content:
        "Climate durability testing reduced heat-related failures and improved our dealer confidence.",
      categories: [1, 3],
    },
    {
      name: "OEM Partner",
      company: "Private Label",
      content:
        "Branding, badge engineering, and compliance support were handled end-to-end.",
      categories: [1, 4],
    },
    {
      name: "Global Integrator",
      company: "Multi-Region Supply",
      content:
        "They operate like a true factory partner, not a reseller. That trust enabled repeat orders.",
      categories: [1, 2],
    },
  ];

  return (
    <Testimonials
      data={testimonials}
      heading="Trusted by Global Distributors"
      subheading="Factory-direct supply with OEM/ODM programs, documentation, and export-ready quality control."
    />
  );
}
function BottomCta() {
  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 text-center">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-xl font-semibold text-transparent sm:text-2xl md:text-4xl mb-4">
          Ready to Electrify Your Fleet?
        </h2>
        <p className="text-gray-400 mb-6">
          Speak with a commercial specialist and build your fleet roadmap.
        </p>
        <button className="btn-sm bg-blue-600 text-white hover:bg-blue-500">
          Speak to a Commercial Specialist
        </button>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <Product />
      <CommercialDifference />
      <Lineup />
      <TechSpecs />
      <TcoCalculatorSection />
      <Branding />
      <SocialProof />
    </>
  );
}

