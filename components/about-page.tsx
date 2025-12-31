
import Link from "next/link";

function HeroAbout() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
              Infrastructure for <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Scalable Electric Mobility
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-2">From custom battery systems to fleet-level energy operations.</p>
            <p className="text-lg text-gray-500">We bridge the gap between cell chemistry and industrial application.</p>
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
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Architecture</div>
              <div className="text-sm font-semibold text-gray-200">End-to-End Power</div>
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
            <h3 className="font-nacelle text-3xl font-semibold text-gray-100 mb-6">The electrification market is fragmented by design.</h3>
            <p className="text-gray-400 leading-relaxed">
              Industrial OEMs are forced to cobble together cells from Vendor A, BMS from Vendor B, and thermal management from Vendor C. 
              <br /><br />
              This fragmentation leads to integration failures, unscalable supply chains, and safety liabilities that stall production.
            </p>
          </div>
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-6 flex flex-col justify-center space-y-8" data-aos="fade-left">
            <div className="pl-6 border-l-2 border-blue-500/30">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Systems View</h4>
              <p className="text-gray-400 text-sm">We don't just sell batteries. We engineer the entire power architecture, ensuring mechanical, electrical, and thermal subsystems work as a unified organ.</p>
            </div>
            <div className="pl-6 border-l-2 border-gray-800">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Industrial Reality</h4>
              <p className="text-gray-400 text-sm">We build for the real world—dust, vibration, and temperature extremes—not just for controlled lab environments.</p>
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
           <p className="text-gray-400 max-w-2xl" data-aos="fade-up" data-aos-delay="100">Our technology stack extends beyond the cell, covering every layer required to deploy reliable electric fleets.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Battery Systems</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Custom-engineered packs ranging from 24V to 800V. Optimized for specific duty cycles, C-rates, and thermal environments.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Hardware Layer</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Intelligent BMS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Proprietary Battery Management Systems with edge computing capabilities for state-of-health prediction and safety lockout.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Control Layer</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Fleet Infrastructure</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Charging connectors, swapping stations, and thermal management units designed for high-uptime industrial operations.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Infrastructure</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Tycorun OS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Cloud-connected telemetry and fleet management dashboard for real-time monitoring of asset health and warranty tracking.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Software Layer</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    { title: "Design for Scale", desc: "We prototype with mass production in mind. If a design relies on manual assembly steps that cannot be automated, we reject it at the concept phase." },
    { title: "Economics First", desc: "Performance matters, but unit economics dictate adoption. We engineer to hit your BOM targets without compromising safety." },
    { title: "Hardware + Software Co-design", desc: "The BMS isn't an afterthought. We develop firmware in parallel with cell selection to maximize usable capacity and lifespan." },
    { title: "Operate in the Real World", desc: "We test for edge cases—extreme heat, shock, and user error—because industrial equipment doesn't live in a cleanroom." }
  ];

  return (
    <section className="relative bg-gray-900/30 border-y border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="md:flex md:justify-between md:items-start mb-12">
          <div className="max-w-xl">
             <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4" data-aos="fade-up">How We Think</h2>
             <p className="text-gray-400" data-aos="fade-up" data-aos-delay="100">Our engineering principles serve as our decision-making framework, distinguishing us from simple assembly shops.</p>
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
             <p className="text-gray-400 mb-6">We partner with OEMs and operators who require more than off-the-shelf components. Our technology powers critical infrastructure across three core sectors.</p>
             <div className="inline-flex items-center gap-2 text-sm text-blue-500 font-medium">
                <span>View Case Studies</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </div>
           </div>
           <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">🚜</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Commercial EVs</h3>
                <p className="text-xs text-gray-500">Agriculture, Construction, and Mining equipment requiring high-torque discharge.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">🤖</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Robotics</h3>
                <p className="text-xs text-gray-500">AMRs and AGVs operating 24/7 with autonomous charging requirements.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">⚡</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Energy Infra</h3>
                <p className="text-xs text-gray-500">Stationary storage and grid-tie systems for industrial power backup.</p>
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

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <Mission />
      <Products />
      <Principles />
      <Markets />
      <Stats />
    </>
  );
}
