"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

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

export default function ProductCoreAdvantageSwiper() {
  return (
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
  );
}
