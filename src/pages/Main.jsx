import React from "react";
import "../pages/css/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper";
import Event from "../components/Event";
import Best from "../components/Best";
import Promotion from "../components/Promotion";
import BrandStory from "../components/BrandStory";
export default function Main() {
  return (
    <>
      <div className="main_visual">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay
          speed={500}
          navigation
          pagination
        >
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/img/main_page/main_visual01.png"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/img/main_page/main_visual02.png"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/img/main_page/main_visual03.png"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/img/main_page/main_visual.png"}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Event />

      <Best />

      <Promotion />

      <BrandStory />
    </>
  );
}
