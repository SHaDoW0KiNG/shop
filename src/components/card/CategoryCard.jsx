import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./CategoryCard.css";
import { Pagination, Navigation } from "swiper";
export default function CategoryCard() {
  const { t } = useTranslation();
  return (
    <div className="categorycard">
        <h5>{t("CategoryCard.part1")}</h5>
     <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide style={{backgroundColor:"azure"}}>
          <img src="https://texnomart.uz/_nuxt/img/kondicionery.dd448f3.svg" alt="" className="Categorycard_img " />
          <span>{t("CategoryCard.part2")}</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/smartfon.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part3")}</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part4")}</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part5")}</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part6")}</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part7")}</span>
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part8")}</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg" alt="" className="Categorycard_img" />
          <span>{t("CategoryCard.part9")} <br />{t("CategoryCard.part10")} </span>
        </SwiperSlide>
      </Swiper>
      </div> 
  );
}
