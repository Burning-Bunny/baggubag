import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useEffect } from "react";
export default function Promotion() {
  useEffect(() => {
    const Patterns = document.querySelectorAll(".pattern");
    const SwiperSlides = document.querySelectorAll(".swiper");
    const PatternImgNames = document.querySelectorAll(".promotion_pattern_img");
    let PatternName = document.getElementById("pattern_name");

    Patterns.forEach((Pattern) => {
      Pattern.addEventListener("click", Promotion_tab);
    });

    function Promotion_tab(e) {
      SwiperSlides.forEach((SwiperSlide) => {
        SwiperSlide.classList.remove("promotion_active");
      });

      let currentTab = e.currentTarget;
      let parentEl = currentTab.parentElement;
      let childEl = parentEl.children;
      let tabIndex = Array.from(childEl).indexOf(currentTab);

      SwiperSlides[tabIndex + 1].classList.add("promotion_active");
    }

    PatternImgNames.forEach((PatternImgName) => {
      PatternImgName.addEventListener("click", () => {
        let Name = PatternImgName.getAttribute("alt");
        PatternName.innerText = Name;
      });
    });
  });
  return (
    <section className="promotion">
      <div className="promotion_name">
        <h3>Product Feature</h3>
      </div>
      <div className="promotion_container">
        <div className="promotion_txt">
          <div>
            <h3 className="promotion_item">스탠다드 바꾸 세트</h3>
            <p className="promotion_item_price">40,000원</p>
            <p className="promotion_item_detail">
              스탠다드 바쿠세트는 섬세하고 재사용 가능한 파우치 입니다.
            </p>
            <p className="promotion_item_detail">
              각 세트는 세가지의 유니크한 프린트를 포함하고 있고 선물하기에 가장
              이상적입니다.
            </p>

            <h5 className="promotion_item_pattern">
              COLOR : <span id="pattern_name">일렉트릭 스트로베리즈</span>
            </h5>

            <ul className="promotion_pattern">
              <li className="pattern">
                <img
                  src="./img/main_page/promotion1.png"
                  className="promotion_pattern_img"
                  alt="일렉트릭 스트로베리즈"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion2.png"
                  className="promotion_pattern_img"
                  alt="메달리온 플로랄"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion3.png"
                  className="promotion_pattern_img"
                  alt="플러피 캣"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion4.png"
                  className="promotion_pattern_img"
                  alt="옐로우 해피"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion5.png"
                  className="promotion_pattern_img"
                  alt="레이디버그 리프"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion6.png"
                  className="promotion_pattern_img"
                  alt="체크 멀티"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion7.png"
                  className="promotion_pattern_img"
                  alt="체커보드 갱"
                />
              </li>
              <li className="pattern">
                <img
                  src="./img/main_page/promotion8.png"
                  className="promotion_pattern_img"
                  alt="데스크스탁 오렌지 스트로베리"
                />
              </li>
            </ul>
            <div className="promotion_btns">
              <button className="promotion_btn btn_detail">자세히 보기</button>
              <button className="promotion_btn btn_cart">장바구니 담기</button>
            </div>
          </div>
        </div>

        <div className="promotion_slide">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide1 promotion_active"
            id="promotion01"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion01-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion01-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion01-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide2 "
            id="promotion02"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion02-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion02-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion02-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide3"
            id="promotion03"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion03-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion03-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion03-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide4"
            id="promotion04"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion04-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion04-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion04-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide5"
            id="promotion05"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion05-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion05-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion05-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide6"
            id="promotion06"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion06-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion06-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion06-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide7"
            id="promotion07"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion07-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion07-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion07-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
            className="swiper promotion_slide8"
            id="promotion08"
          >
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion08-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion08-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="./img/main_page/promotion08-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
