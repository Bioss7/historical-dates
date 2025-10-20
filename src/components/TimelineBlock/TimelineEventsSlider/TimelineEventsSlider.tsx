import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TimelineEventsSliderProps } from "../types";

import "swiper/css";
import "swiper/css/navigation";

export const TimelineEventsSlider: React.FC<TimelineEventsSliderProps> = ({
  events,
  rangeName,
  isSwitching,
}) => {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`timeline__swiper-container ${
        isSwitching ? "timeline__swiper-container--switching" : ""
      }`}
      ref={swiperContainerRef}
    >
      <div className="timeline-name">{rangeName}</div>
      <div className="timeline__swiper-wrapper">
        <Swiper
          key={rangeName}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="timeline__swiper"
          slidesPerView="auto"
          spaceBetween={80}
          watchOverflow={true}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              spaceBetween: 25,
            },
            480: {
              spaceBetween: 50,
            },
            768: {
              spaceBetween: 80,
            },
          }}
        >
          {events.map((ev) => (
            <SwiperSlide key={ev.id}>
              <div className="timeline__slide">
                <h4 className="timeline__slide-title">{ev.year}</h4>
                <p className="timeline__slide-text">{ev.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};
