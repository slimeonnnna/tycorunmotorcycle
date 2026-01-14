import ProductHeroBackground from "./product-hero-background";
import ProductCoreAdvantageSwiper from "./product-core-advantage-swiper";
import ProductTcoCalculator from "./product-tco-calculator";

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
            <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent font-mono text-sm tracking-wider uppercase">
              Commercial Electric Motorcycle Platform
            </span>
          </div>
          <h1
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
            data-aos="fade-up"
          >
            Heavy-Duty Commercial Electric Motorcycles for Global Fleets
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Engineered for last-mile delivery and logistics: high payload, long-range swappable
            batteries, and minimal maintenance costs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="btn-sm bg-blue-600 text-white hover:bg-blue-500">
              Download Fleet Catalog
            </button>
            <button className="btn-sm border border-gray-700 text-gray-200 hover:border-blue-500">
              Request Bulk Pricing
            </button>
          </div>
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
  const cards = [
    {
      title: "Reinforced Chassis",
      copy: "Tested for 200kg+ payloads vs. consumer 150kg limits.",
    },
    {
      title: "Fleet Battery Life",
      copy: "2000+ cycle LFP packs vs. standard Li-ion degradation.",
    },
    {
      title: "Maintenance Free",
      copy: "Hub motor (no belt/chain) vs. frequent drivetrain service.",
    },
  ];

  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
            Why Choose Commercial Grade Over Consumer Models?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consumer scooters look cheaper upfront, but fleet downtime destroys margins. Commercial
            specs are engineered for daily routes, heavier loads, and predictable maintenance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-gray-100">{card.title}</h3>
              <p className="mt-3 text-sm text-gray-400">{card.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lineup() {
  const models = [
    {
      title: "Model A: The City Runner",
      copy:
        "Lightweight Electric Delivery Scooter for food delivery electric bike fleets. Quick swap access and agile handling.",
    },
    {
      title: "Model B: The Cargo King",
      copy:
        "Heavy-Duty Cargo Bike platform for logistics with extended wheelbase, oversized racks, and high torque.",
    },
    {
      title: "Model C: The Patrol / Utility",
      copy:
        "Multi-purpose Fleet Management EV for security, patrol, and rental programs with impact-resistant trims.",
    },
  ];

  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
            Specialized Platforms for Every Business
          </h2>
          <p className="text-gray-400">
            A commercial electric motorcycle lineup tuned for last-mile delivery solution fleets.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {models.map((model) => (
              <div key={model.title} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <h3 className="text-lg font-semibold text-gray-100">{model.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{model.copy}</p>
              </div>
            ))}
          </div>
          <div className="product-core-advantage" data-aos="fade-left">
            <ProductCoreAdvantageSwiper />
          </div>
        </div>
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
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
            Built for 99% Uptime
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Commercial-grade systems engineered for predictable availability and lower operating
            costs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {specs.map((spec) => (
            <div key={spec.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
              <h3 className="text-lg font-semibold text-gray-100">{spec.title}</h3>
              <p className="mt-3 text-sm text-gray-400">{spec.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TcoCalculatorSection() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
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
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
              Your Brand on The Road
            </h2>
            <p className="text-gray-400 mb-6">
              We offer full livery customization for fleets of 50+ units, including colorways,
              decals, and cargo box branding.
            </p>
            <div className="flex gap-3">
              {["#1e40af", "#2563eb", "#0f172a", "#0ea5e9"].map((color) => (
                <span
                  key={color}
                  className="h-10 w-10 rounded-full border border-gray-700"
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-gray-300">
            <p className="text-sm uppercase tracking-widest text-blue-300">Customization Options</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Fleet color palette + reflective decals</li>
              <li>Custom cargo box sizes and mounts</li>
              <li>Embossed branding on seat and panels</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
            Trusted by Logistics Leaders
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-5 text-center text-gray-400 text-sm">
          {["SwiftFleet", "MetroLogix", "QuickDrop", "UrbanFresh", "PrimeCourier"].map((logo) => (
            <div
              key={logo}
              className="rounded-xl border border-gray-800 bg-gray-900/50 py-4"
            >
              {logo}
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-gray-300">
          <p className="text-lg text-gray-100">
            “TYCORUN helped us cut delivery costs by 32% while improving rider uptime.”
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Operations Director, National Pizza Chain
          </p>
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 text-center">
        <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
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
      <CommercialDifference />
      <Lineup />
      <TechSpecs />
      <TcoCalculatorSection />
      <Branding />
      <SocialProof />
      <BottomCta />
    </>
  );
}
