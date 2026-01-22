"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type VerticalItem = {
  title: string;
  pain: string;
  solution: string;
  keyword: string;
  icon: string;
  background: string;
};

type SolutionVerticalsCoverflowProps = {
  items: VerticalItem[];
};

export default function SolutionVerticalsCoverflow({
  items,
}: SolutionVerticalsCoverflowProps) {
  const resumeTimerRef = useRef<number | null>(null);

  const pauseLenis = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("lenis:pause"));
  };

  const resumeLenis = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("lenis:resume"));
  };

  const pauseLenisWithResume = () => {
    pauseLenis();
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      resumeLenis();
      resumeTimerRef.current = null;
    }, 400);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="solution-coverflow">
      <div className="solution-coverflow__intro">
        <span>discover</span>
        <h1>scenario solutions</h1>
        <hr />
        <p>
          Purpose-built electric motorcycles for delivery, shared mobility, and
          public service fleets worldwide.
        </p>
        <Link href="/contact">download app</Link>
      </div>
      <div
        className="solution-coverflow__swiper"
        onWheel={pauseLenisWithResume}
        onMouseLeave={resumeLenis}
      >
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          modules={[EffectCoverflow, Keyboard, Mousewheel, Pagination]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          keyboard={{ enabled: true }}
          mousewheel={{ thresholdDelta: 70 }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          onTouchStart={pauseLenis}
          onSliderFirstMove={pauseLenis}
          onTouchEnd={resumeLenis}
          onTouchCancel={resumeLenis}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1560: { slidesPerView: 2.4 },
          }}
        >
          {items.map((item, index) => {
            const slideClass = `solution-coverflow__slide solution-coverflow__slide--${
              index + 1
            }`;
            return (
              <SwiperSlide key={item.title} className={slideClass}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.solution}</p>
                  <Link href="/contact">explore</Link>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <div className="solution-coverflow__bg" aria-hidden="true"></div>
      <div className="solution-coverflow__bg2" aria-hidden="true"></div>
    </section>
  );
}
