// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useParams } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect, } from "react"
import "./ProductDetailCarusel.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductDetailCarusel() {
  const { id } = useParams();
  const [data,setData] = useState()
  async function getData () {
      await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setData(res.data));
  }
  useEffect (() => {
      getData();
  }, [])
  console.log("datas",data?.products);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
  <div className="product_detail_carusel">
    <div className="productdetailcarusel">
     <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper&& !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.images?.map((i) => (
 <SwiperSlide>
 <img src={i} alt=""/>
</SwiperSlide>
        ))}
       
      </Swiper>
      </div>
      <div className="productdetailcarusel2">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={55}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
    {data?.images?.map((i) => (
    <SwiperSlide>
    <img src={i} alt=""/>
    </SwiperSlide>
        ))}
      </Swiper>
      </div>
  </div>
  );
}
