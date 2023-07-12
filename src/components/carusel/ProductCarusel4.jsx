import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProductCarusel4.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ProductCard from "../card/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductCarusel4() {
  const [data,setData]= useState([])
async function getData() {
   await axios
    .get("https://dummyjson.com/products")
    .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  },[]);
  console.log("malumot",data?.products);
  return (
    <div className="productcarusel4">
      <h5>Подборки</h5>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.products?.map((item) => (
           <SwiperSlide>
           <ProductCard 
            image={item.thumbnail} 
            title={item.title}
            price={item.price}
            />
            </SwiperSlide>
        ))}
       
      </Swiper>
      </div>
  );
}
