
import Link from "next/link";

function HeroAbout() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
              Factory-Direct OEM/ODM <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Global Distribution
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-2">We deliver complete electric motorcycle programs for OEMs and distributors.</p>
            <p className="text-lg text-gray-500">Compliance, QC, and supply chain execution are built into every platform.</p>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
               <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
                  <defs><pattern id="grid-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#374151" /></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#grid-hero)" />
                  <path d="M 50 112 H 350" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="112" r="4" fill="#2563EB" />
                  <circle cx="200" cy="112" r="8" fill="#1F2937" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="350" cy="112" r="4" fill="#2563EB" />
                  <rect x="180" y="40" width="40" height="40" rx="4" stroke="#4B5563" fill="#111827" />
                  <path d="M 200 80 V 112" stroke="#4B5563" />
                  <rect x="180" y="145" width="40" height="40" rx="4" stroke="#4B5563" fill="#111827" />
                  <path d="M 200 145 V 112" stroke="#4B5563" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-950/80 border border-gray-700 px-4 py-2 rounded-full backdrop-blur-md">
                    <span className="text-xs font-mono text-blue-400">SYS_ARCH_V4.0</span>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -left-6 z-10 bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-xl hidden md:block">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Platform</div>
              <div className="text-sm font-semibold text-gray-200">End-to-End OEM Supply</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5" data-aos="fade-right">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Why We Exist</h2>
            <h3 className="font-nacelle text-3xl font-semibold text-gray-100 mb-6">The market lacks factory-direct OEM/ODM partners.</h3>
            <p className="text-gray-400 leading-relaxed">
              Importers need confidence in compliance, QC, and delivery cadence,
              not just product specs.
              <br /><br />
              We build the entire platform so documentation, serviceability, and
              production stability stay consistent from sample to shipment.
            </p>
          </div>
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-6 flex flex-col justify-center space-y-8" data-aos="fade-left">
            <div className="pl-6 border-l-2 border-blue-500/30">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">OEM-Ready Systems</h4>
              <p className="text-gray-400 text-sm">We design the frame, motor, controls, and battery as one export-ready system with clear documentation.</p>
            </div>
            <div className="pl-6 border-l-2 border-gray-800">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Export Reliability</h4>
              <p className="text-gray-400 text-sm">We validate durability and QC to reduce warranty exposure across regions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
           <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4" data-aos="fade-up">What We Build</h2>
           <p className="text-gray-400 max-w-2xl" data-aos="fade-up" data-aos-delay="100">Our stack covers the full motorcycle platform, from chassis to connected services.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Electric Motorcycles</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Complete bikes designed for distributor readiness, compliance, and regional positioning.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Vehicle Platform</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Integrated Powertrain</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Motor and controller integration optimized for stable QC and documentation.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Powertrain</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Battery System</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">High-density packs integrated into the frame for stable handling and real-world range.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Energy System</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Connected Experience</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">App connectivity, diagnostics, and service insights designed for dealer operations.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Software Layer</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    { title: "Compliance First", desc: "Documentation, labeling, and tests are built into every program from day one." },
    { title: "Stable Supply", desc: "We plan sourcing and production for consistent deliveries, not one-off runs." },
    { title: "QC by Design", desc: "100% functional testing and traceability reduce warranty exposure." },
    { title: "Serviceability", desc: "Parts planning and diagnostics are designed for dealers and fleets." }
  ];

  return (
    <section className="relative bg-gray-900/30 border-y border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="md:flex md:justify-between md:items-start mb-12">
          <div className="max-w-xl">
             <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4" data-aos="fade-up">How We Think</h2>
             <p className="text-gray-400" data-aos="fade-up" data-aos-delay="100">Our principles guide how we build export-ready platforms for global partners.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-800" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
           <div className="lg:col-span-4" data-aos="fade-right">
             <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-6">Who We Serve</h2>
             <p className="text-gray-400 mb-6">We build for distributors, OEM partners, and fleet operators who need export-ready supply.</p>
             <div className="inline-flex items-center gap-2 text-sm text-blue-500 font-medium">
                <span>View Partnership Stories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </div>
           </div>
           <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">D</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Distributors</h3>
                <p className="text-xs text-gray-500">Importer-ready products with compliance packs and steady delivery cadence.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">O</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">OEM / ODM</h3>
                <p className="text-xs text-gray-500">Branding, trims, and SKD/CKD options to match local policy and duties.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">F</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Fleet Operators</h3>
                <p className="text-xs text-gray-500">High-uptime programs with parts planning and service documentation.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">2018</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Founded</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">Shenzhen</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Global HQ</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">ISO 9001</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Certified Mfg</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">50+</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">OEM Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactoryTour() {
  const highlights = [
    { label: "Production Base", value: "100,000+ sqm" },
    { label: "Cell Capacity", value: "10 GWh / year" },
    { label: "Pack Capacity", value: "20 GWh / year" },
    { label: "Automation", value: "750+ machines" },
  ];

  const footprint = [
    { label: "Swap Cabinets + EVs Shipped", value: "100,000+" },
    { label: "Export Coverage", value: "40+ countries" },
    { label: "Core Markets", value: "Africa / Middle East / LATAM" },
  ];

  return (
    <section className="border-t border-gray-800 bg-gray-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div data-aos="fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-sm uppercase tracking-widest font-mono">
                Factory Tour
              </span>
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
              End-to-End Manufacturing You Can Audit
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              TYCORUN operates a comprehensive production base that covers
              battery cells, battery swap cabinets, and electric vehicles. From
              R&amp;D and design to large-scale manufacturing and deployment, we
              deliver high-efficiency, high-ROI swapping solutions for two- and
              four-wheel platforms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We focus on fast-growing new-energy transportation markets and
              respond quickly to local needs while scaling globally with
              standardized processes and quality control.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-6" data-aos="fade-left">
            <div className="text-xs uppercase tracking-widest text-gray-500">Factory Metrics</div>
            <div className="mt-4 grid gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-500">{item.label}</span>
                  <span className="text-sm text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-gray-800 pt-4">
              <div className="text-xs uppercase tracking-widest text-gray-500">Global Footprint</div>
              <div className="mt-3 space-y-2">
                {footprint.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm text-gray-300">
                    <span>{item.label}</span>
                    <span className="text-blue-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <Mission />
      <Products />
      <Principles />
      <Markets />
      <FactoryTour />
      <Stats />
    </>
  );
}
