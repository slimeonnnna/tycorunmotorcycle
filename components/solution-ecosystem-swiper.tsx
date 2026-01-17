"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

const slides = [
  {
    icon: "fa-motorcycle",
    title: "Smart Hardware",
    copy: "Purpose-built chassis engineered for heavy-duty logistics.",
    corner: "V-FRAME",
    style: "hardware",
    emoji: "🏍️",
  },
  {
    icon: "fa-arrows-rotate",
    title: "Battery Swapping",
    copy: "6-second energy replenishment for zero downtime operations.",
    corner: "⚡ 100% CHARGED",
    style: "swap",
    emoji: "🔋",
  },
  {
    icon: "fa-network-wired",
    title: "Fleet IoT",
    copy: "Real-time tracking and predictive BMS diagnostics.",
    corner: "● REC",
    style: "iot",
    emoji: "📡",
  },
  {
    icon: "fa-chart-line",
    title: "TCO Optimized",
    copy: "Minimize OPEX with lower maintenance and fuel savings.",
    corner: "ROI: POSITIVE",
    style: "tco",
    emoji: "💰",
  },
];

export default function SolutionEcosystemSwiper() {
  return (
    <div className="core-advantage-swiper">
      <Swiper
        className="swiper core-advantage-swiper-slider solution-cube-swiper"
        modules={[Autoplay, EffectCube]}
        effect="cube"
        grabCursor
        loop
        speed={700}
        threshold={12}
        resistanceRatio={0.65}
        longSwipesRatio={0.2}
        longSwipesMs={200}
        preventInteractionOnTransition={false}
        touchEventsTarget="container"
        touchStartForcePreventDefault
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2600,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className={`solution-cube-card solution-cube-card--${slide.style}`}>
              <span className="solution-cube-emoji" aria-hidden="true">
                {slide.emoji}
              </span>
              <div className="solution-cube-icon">
                <i className={`fas ${slide.icon}`} aria-hidden="true"></i>
              </div>
              <p className="solution-cube-title font-semibold">{slide.title}</p>
              <p className="solution-cube-copy">{slide.copy}</p>
              <div className="solution-cube-corner">{slide.corner}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
