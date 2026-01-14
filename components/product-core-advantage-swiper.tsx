"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

const slides = [
  {
    image: "/about/unified-powertrain-logic.webp",
    title: "Model A: The City Runner",
    copy: "Lightweight platform tuned for food delivery and tight urban routes.",
  },
  {
    image: "/about/direct-bom-savings.webp",
    title: "Model B: The Cargo King",
    copy: "Extended wheelbase, oversized racks, and heavy-duty logistics torque.",
  },
  {
    image: "/about/secured-core-supply.webp",
    title: "Model C: The Patrol / Utility",
    copy: "Durable multi-purpose trim for security, rentals, and public programs.",
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
