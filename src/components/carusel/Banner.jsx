import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
   <div className="banner">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className="ssb">
          <img className="ssbi" src="https://backend.texnomart.uz/uploads/slides/979803Artboard_rus1.webp" />
        </SwiperSlide >
        <SwiperSlide className="ssb">
          <img className="ssbi" src="https://backend.texnomart.uz/uploads/slides/987971Artboard_rus1.webp" />
        </SwiperSlide>
        <SwiperSlide className="ssb">
          <img className="ssbi" src="https://backend.texnomart.uz/uploads/slides/1106491920ru.webp" />
        </SwiperSlide>
        <SwiperSlide className="ssb">
          <img className="ssbi" src="https://backend.texnomart.uz/uploads/slides/7988191920ru.webp" />
        </SwiperSlide>
      </Swiper>
   </div>
  );
}