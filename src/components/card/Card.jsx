import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./Card.css";
import { Pagination, Navigation } from "swiper";
export default function Card() {
  return (
    <div className="card">
     <Swiper
        slidesPerView={8}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404154940058.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404501355729.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404542676301.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404481916020.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2023042606014581630.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101405315369098.webp" alt="" className="card_img" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404450190315.webp" alt="" className="card_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" className="card_img" />
        </SwiperSlide>
      </Swiper>
      </div> 
  );
}
