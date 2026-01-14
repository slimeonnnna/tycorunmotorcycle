
import Image from "next/image";
import ProductHeroBackground from "./product-hero-background";
import ProductCoreAdvantageSwiper from "./product-core-advantage-swiper";

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
            <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent font-mono text-sm tracking-wider uppercase">OEM / ODM Platform</span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl" data-aos="fade-up">
            Built for Global Distribution
          </h1>
          <p className="mx-auto text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
            TYCORUN delivers export-ready electric motorcycles with OEM branding,
            compliance support, and scalable supply chain execution.
          </p>
          <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay="300">
            <div className="hero-image-container">
              <div className="profile-image-glow"></div>
              <div className="profile-image-frame">
                <div className="profile-image" id="profileImage">
                  <div className="profile-placeholder">
                    <i className="fas fa-code"></i>
                  </div>
                </div>
              </div>
              <div className="floating-badge badge-1">
                <i className="fab fa-react"></i>
                <div className="badge-content">
                  <span className="badge-title">React</span>
                  <span className="badge-libs">Redux, Router, Hooks</span>
                </div>
              </div>
              <div className="floating-badge badge-2">
                <i className="fab fa-node-js"></i>
                <div className="badge-content">
                  <span className="badge-title">Node.js</span>
                  <span className="badge-libs">Express, Socket.io, MongoDB</span>
                </div>
              </div>
              <div className="floating-badge badge-3">
                <i className="fab fa-js"></i>
                <div className="badge-content">
                  <span className="badge-title">JavaScript</span>
                  <span className="badge-libs">ES6+, TypeScript, jQuery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemLayers() {
  const layers = [
    {
      id: "01",
      title: "Motor + Controller",
      subtitle: "Power Delivery",
      description: "High-efficiency motor paired with tuned controller mapping for smooth torque and consistent regen.",
      features: ["Ride-mode mapping", "Regen calibration", "Quiet drivetrain"],
    },
    {
      id: "02",
      title: "Battery Pack",
      subtitle: "Energy Core",
      description: "High-density pack integrated into the frame for a low center of gravity and real-world range.",
      features: ["Frame-integrated pack", "Balanced weight", "Thermal monitoring"],
    },
    {
      id: "03",
      title: "Chassis + Suspension",
      subtitle: "Market Durability",
      description: "Geometry and durability tuned for long-term service and regional road conditions.",
      features: ["Optimized rake/trail", "Adjustable suspension", "Predictable braking"],
    },
    {
      id: "04",
      title: "Safety Systems",
      subtitle: "Compliance",
      description: "ABS, lighting, and diagnostics aligned with regional certification needs.",
      features: ["ABS braking", "Traction management", "Diagnostic alerts"],
    }
  ];

  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
           <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">Anatomy of a TYCORUN Platform</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">A platform is a system of systems. We optimize every layer for compliance, durability, and serviceability.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="relative order-2 lg:order-1 product-core-advantage" data-aos="fade-right">
              <ProductCoreAdvantageSwiper />
           </div>
           <div className="order-1 lg:order-2 space-y-8">
              {layers.map((layer, index) => (
                 <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="flex items-baseline gap-4 mb-2">
                       <span className="text-sm font-mono text-blue-500 font-bold">{layer.id}</span>
                       <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">{layer.title} <span className="text-gray-600 font-normal text-base ml-2">/ {layer.subtitle}</span></h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3 pl-10 border-l border-gray-800 group-hover:border-blue-500/30 transition-colors">{layer.description}</p>
                    <ul className="pl-10 flex gap-4 text-xs font-mono text-gray-500">{layer.features.map((feat, i) => (<li key={i} className="flex items-center gap-1"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{feat}</li>))}</ul>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function SpecGrid() {
  const specs = [
    { category: "Performance", items: [{ label: "Top Speed", value: "110 to 130 km/h" }, { label: "Motor Output", value: "8 to 15 kW" }, { label: "Range (Real)", value: "120 to 180 km" }] },
    { category: "Certification", items: [{ label: "Road Class", value: "EEC L3e / DOT" }, { label: "Docs", value: "COC + compliance pack" }, { label: "Testing", value: "100% functional" }] },
    { category: "Logistics", items: [{ label: "Loading Qty", value: "50 units / 40HQ" }, { label: "Packaging", value: "Steel rack options" }, { label: "Incoterms", value: "FOB / CIF" }] },
    { category: "Partnership", items: [{ label: "OEM / ODM", value: "Branding + trims" }, { label: "SKD / CKD", value: "Duty-friendly" }, { label: "MOQ", value: "50 units / model" }] }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
         <div className="mb-12">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">Technical Capabilities</h2>
            <p className="text-gray-400">Commercial specs designed for importers, distributors, and regional assembly partners.</p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((group, idx) => (
               <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
                  <div className="bg-gray-800/50 px-6 py-3 border-b border-gray-800"><h3 className="font-semibold text-gray-200 text-sm">{group.category}</h3></div>
                  <div className="p-6 space-y-4">{group.items.map((item, i) => (<div key={i}><div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</div><div className="text-sm font-mono text-blue-400">{item.value}</div></div>))}</div>
               </div>
            ))}
         </div>
         <div className="mt-12 flex justify-center">
            <button className="btn-sm bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700 flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               Download OEM Catalog (PDF)
            </button>
         </div>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { title: "Inquiry", desc: "Model selection and target market fit." },
    { title: "Sampling", desc: "Pre-production samples and approvals." },
    { title: "Compliance", desc: "EEC/DOT docs and testing support." },
    { title: "Production", desc: "QC-controlled manufacturing runs." },
    { title: "Shipping", desc: "Packaging, loading, and export docs." },
  ];

  return (
    <section className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
           <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">From Inquiry to Shipment</h2>
           <p className="text-gray-400">A structured B2B process for predictable delivery and compliance.</p>
        </div>
        <div className="relative">
           <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-800 z-0"></div>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, idx) => (
                 <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-700 text-gray-400 flex items-center justify-center font-bold mb-4 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">{idx + 1}</div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 max-w-[150px]">{step.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
         <div className="mb-12">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">Built for Global Markets</h2>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3]">
               <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-90 z-10" />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-1">Retail</div>
                  <h3 className="text-xl font-semibold text-gray-100">Consumer Distribution</h3>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Dealer-friendly trims with compliance documents and sales-ready specs.</p>
               </div>
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg width="100%" height="100%"><pattern id="app-grid-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#4B5563" /></pattern><rect width="100%" height="100%" fill="url(#app-grid-1)" /></svg>
               </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3]">
               <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-90 z-10" />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-1">Fleet</div>
                  <h3 className="text-xl font-semibold text-gray-100">Delivery & Operations</h3>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Low running cost, reliable uptime, and spare parts planning for operators.</p>
               </div>
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                   <svg width="100%" height="100%"><path d="M0 0 L 100 100" stroke="#4B5563" strokeWidth="1"/><path d="M100 0 L 0 100" stroke="#4B5563" strokeWidth="1"/></svg>
               </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3]">
               <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-90 z-10" />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-1">Swap</div>
                  <h3 className="text-xl font-semibold text-gray-100">Battery Swap Programs</h3>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Swap-ready architecture for high-ROI mobility networks and public programs.</p>
               </div>
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg width="100%" height="100%"><rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#4B5563" strokeWidth="20" strokeDasharray="10 10" /></svg>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <SystemLayers />
      <SpecGrid />
      <Applications />
      <ProcessSteps />
    </>
  );
}
