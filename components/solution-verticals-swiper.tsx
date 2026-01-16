"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type VerticalItem = {
  title: string;
  pain: string;
  solution: string;
  keyword: string;
  icon: string;
  background: string;
};

type SolutionVerticalsSwiperProps = {
  items: VerticalItem[];
};

export default function SolutionVerticalsSwiper({
  items,
}: SolutionVerticalsSwiperProps) {
  return (
    <div className="solution-verticals-swiper">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={18}
        loop
        grabCursor
        speed={700}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3600,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 1.2, spaceBetween: 24 },
          1024: { slidesPerView: 1.6, spaceBetween: 28 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              className="solution-verticals-card"
              style={{ ["--cardBackground" as string]: item.background }}
            >
              <div className="solution-verticals-card__meta">
                <span className="solution-verticals-card__icon">
                  <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                </span>
                <span className="solution-verticals-card__keyword">
                  {item.keyword}
                </span>
              </div>
              <h3 className="solution-verticals-card__title">{item.title}</h3>
              <div className="solution-verticals-card__block">
                <div className="solution-verticals-card__label">Pain Point</div>
                <p className="solution-verticals-card__copy">{item.pain}</p>
              </div>
              <div className="solution-verticals-card__block">
                <div className="solution-verticals-card__label">Solution</div>
                <p className="solution-verticals-card__copy">{item.solution}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
