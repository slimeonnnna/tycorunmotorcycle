
"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

import AboutAuthHero from "./about/about-auth-hero";
import RoadmapSection from "./about/roadmap-section";

function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="who-we-are pt-24 pb-16 md:pt-42 md:pb-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <div className="who-subP mb-3">
          <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
            Who We Are
          </span>
        </div>
        <h2
          className="text-white text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-10 leading-snug"
        >
          <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
            The Industrial Backbone of Electric Mobility
          </span>
        </h2>
        <div
          className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-6"
        >
          <div className="who-card p-8 md:p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
            <h3 className="who-card-title mb-4 text-2xl xl:text-3xl">
              <span>Industry</span>
              <span>Leadership</span>
            </h3>
            <p className="text-gray-400">
              Founded with a vision to revolutionize urban mobility. Over the past
              decade, TYCORUN has evolved from a battery pioneer into a
              comprehensive electric vehicle manufacturer, setting benchmarks for
              durability and performance in the two-wheeler sector.
            </p>
          </div>
          <div className="icon"></div>
        </div>
        <div className="who-card p-8 md:p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-52">
            <h3 className="who-card-title mb-4 text-2xl xl:text-3xl">
              <span>Manufacturing</span>
              <span>Infrastructure</span>
            </h3>
            <p className="text-gray-400">
              Our purpose-built facility spans 50,000+ square meters, integrating
              advanced robotic welding, automated painting, and final assembly
              lines. This self-owned infrastructure guarantees supply stability
              and consistent output quality.
            </p>
          </div>
        </div>
        <div className="who-card p-8 md:p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-52">
            <h3 className="who-card-title mb-4 text-2xl xl:text-3xl">
              <span>Quality</span>
              <span>Assurance</span>
            </h3>
            <p className="text-gray-400">
              Operated under strict ISO 9001 management systems. We implement
              automotive-grade QC protocols, from incoming material inspection
              (IQC) to 100% road-test simulations, ensuring every unit meets
              international safety standards.
            </p>
          </div>
        </div>
        <div className="who-card p-8 md:p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-52">
            <h3 className="who-card-title mb-4 text-2xl xl:text-3xl">
              <span>Global</span>
              <span>Presence</span>
            </h3>
            <p className="text-gray-400">
              With a footprint extending across Europe, Southeast Asia, and South
              America, we understand diverse regulatory landscapes. Our global
              network ensures that TYCORUN products are compliant, supported, and
              trusted worldwide.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function CoreAdvantageSection() {
  const slides = [
    {
      image: "/about/unified-powertrain-logic.webp",
      title: "Unified Powertrain Logic",
      copy:
        "BMS algorithms are calibrated directly to motor controllers for maximum range and energy efficiency.",
    },
    {
      image: "/about/direct-bom-savings.webp",
      title: "Direct BOM Savings",
      copy:
        "Eliminating third-party battery suppliers removes markups, delivering the market's most competitive landing cost.",
    },
    {
      image: "/about/secured-core-supply.webp",
      title: "Secured Core Supply",
      copy:
        "In-house pack assembly guarantees production continuity, protecting your orders from global component shortages.",
    },
    {
      image: "/about/system-level-qc.webp",
      title: "System-Level QC",
      copy:
        "Batteries are tested under actual chassis loads, ensuring perfect compatibility and thermal safety.",
    },
  ];
  return (
    <section className="core-advantage py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-sm uppercase tracking-widest">
                Our Core Advantage
              </span>
            </div>
            <h2 className="mt-3 font-nacelle text-3xl font-semibold text-white md:text-4xl">
              True Vertical Integration: Battery + Vehicle
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Unlike assemblers who outsource power systems, TYCORUN manufactures
              both the lithium battery pack and the vehicle chassis. This unique
              synergy eliminates compatibility risks, optimizes BMS performance,
              and significantly lowers the BOM cost for our partners.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Unified Engineering: BMS mapped directly to motor logic.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Cost Efficiency: No middleman markups on the battery.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Supply Security: Core components made in-house.
              </li>
            </ul>
          </div>
          <div className="core-advantage-swiper">
            <Swiper
              className="swiper core-advantage-swiper-slider"
              modules={[Autoplay, EffectCube]}
              effect="cube"
              grabCursor
              loop
              speed={1000}
              touchEventsTarget="container"
              touchStartForcePreventDefault
              cubeEffect={{
                shadow: false,
                slideShadows: true,
                shadowOffset: 10,
                shadowScale: 0.94,
              }}
              autoplay={{
                delay: 2600,
                pauseOnMouseEnter: true,
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.title}>
                  <img src={slide.image} alt={slide.title} draggable={false} />
                  <div className="overlay">
                    <h3>{slide.title}</h3>
                    <p>{slide.copy}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}


function OurTeamSection() {
  const team = [
    {
      name: "Raymond",
      role: "Founder & CEO",
      description: "Leads the company vision, product direction, and global strategy.",
      image: "/about/Raymond_is_the_founder_and_CEO_of_TYCORUN.webp",
    },
    {
      name: "Joseph",
      role: "CBO",
      description: "Drives partnerships, commercial strategy, and market expansion.",
      image: "/about/Joseph_is_TYCORUN_s_Chief_Business_Officer_CBO.webp",
    },
    {
      name: "Owen",
      role: "COO",
      description: "Oversees operations, manufacturing execution, and delivery cadence.",
      image: "/about/Owen.webp",
    },
    {
      name: "Maggie",
      role: "CSO",
      description: "Leads global sales, distributor programs, and key accounts.",
      image: "/about/Maggie.webp",
    },
    {
      name: "Lin",
      role: "CFO",
      description: "Manages finance, risk control, and investment planning.",
      image: "/about/Lin_is_Chief_Financial_Officer_CFO_in_TYCORUN.webp",
    },
    {
      name: "Joe",
      role: "HRD",
      description: "Builds the talent pipeline, culture, and people operations.",
      image: "/about/Joe_is_Director_of_Human_Resources_HRD_in_TYCORUN.webp",
    },
  ];

  return (
    <section className="team-section py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="who-subP mb-3">
            <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
              Our Team
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-4 leading-snug">
            Leadership Behind the Platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A cross-functional team spanning manufacturing, compliance, and global OEM delivery.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="team-card">
              <div
                className="team-card-bg"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <div className="team-card-border">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutAuthHero />
      <WhoWeAreSection />
      <CoreAdvantageSection />
      <RoadmapSection />
      <OurTeamSection />
    </>
  );
}
