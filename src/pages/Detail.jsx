import React from "react";
import "../pages/css/detail.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useEffect } from "react";
import BuyButton from "../components/BuyButton";

export default function Detail() {
  useEffect(() => {
    const plus = document.getElementById("itm_plus");
    const minus = document.getElementById("itm_minus");
    const item_count = document.getElementById("item_count");
    const itemNumber = document.getElementById("itm_number");
    const total = document.getElementById("total_price");
    const purTotal = document.getElementById("totalprice");

    plus.addEventListener("click", () => {
      item_count.innerText = parseInt(item_count.innerText) + 1;
      total.innerText = parseInt(item_count.innerText) * 12900;
      itemNumber.innerText = item_count.innerText;
      purTotal.innerText = parseInt(item_count.innerText) * 12900;
    });
    minus.addEventListener("click", () => {
      item_count.innerText = parseInt(item_count.innerText) - 1;
      if (item_count.innerText <= 0) {
        item_count.innerText = 1;
      }
      total.innerText = parseInt(item_count.innerText) * 12900;
      itemNumber.innerText = item_count.innerText;
      purTotal.innerText = parseInt(item_count.innerText) * 12900;
    });

    const To_product_detailInfo = document.getElementById(
      "To_product_detailInfo"
    );
    const To_exchange = document.getElementById("To_exchange");
    const To_related = document.getElementById("To_related");
    const To_review = document.getElementById("To_review");

    const product_detail = document.getElementById("product_detail");
    const payment_info = document.getElementById("payment_info");
    const related_product = document.getElementById("related_product");
    const review = document.getElementById("review");

    To_product_detailInfo.addEventListener("click", () => {
      window.scrollBy({
        top: product_detail.getBoundingClientRect().top,
        behavior: "smooth",
      });
      To_product_detailInfo.classList.add("page_nav_on");
      To_exchange.classList.remove("page_nav_on");
      To_related.classList.remove("page_nav_on");
      To_review.classList.remove("page_nav_on");
    });
    To_exchange.addEventListener("click", () => {
      window.scrollBy({
        top: payment_info.getBoundingClientRect().top,
        behavior: "smooth",
      });
      To_exchange.classList.add("page_nav_on");
      To_product_detailInfo.classList.remove("page_nav_on");
      To_related.classList.remove("page_nav_on");
      To_review.classList.remove("page_nav_on");
    });
    To_related.addEventListener("click", () => {
      window.scrollBy({
        top: related_product.getBoundingClientRect().top,
        behavior: "smooth",
      });
      To_related.classList.add("page_nav_on");
      To_product_detailInfo.classList.remove("page_nav_on");
      To_exchange.classList.remove("page_nav_on");
      To_review.classList.remove("page_nav_on");
    });
    To_review.addEventListener("click", () => {
      window.scrollBy({
        top: review.getBoundingClientRect().top,
        behavior: "smooth",
      });
      To_review.classList.add("page_nav_on");
      To_product_detailInfo.classList.remove("page_nav_on");
      To_exchange.classList.remove("page_nav_on");
      To_related.classList.remove("page_nav_on");
    });

    const page_nav = document.getElementById("page_nav");
    const pur_wrap = document.querySelector(".pur_wrap");
    window.onscroll = function scrollIf() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        page_nav.style.bottom = "0";
      } else {
        page_nav.style.bottom = "-100px";
      }

      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        pur_wrap.style.top = "100px ";
      } else {
        pur_wrap.style.top = "-100%";
      }
      if (document.documentElement.scrollTop < 7200) {
        To_product_detailInfo.classList.add("page_nav_on");
        To_exchange.classList.remove("page_nav_on");
        To_related.classList.remove("page_nav_on");
        To_review.classList.remove("page_nav_on");
      } else if (document.documentElement.scrollTop < 8800) {
        To_exchange.classList.add("page_nav_on");
        To_product_detailInfo.classList.remove("page_nav_on");
        To_related.classList.remove("page_nav_on");
        To_review.classList.remove("page_nav_on");
      } else if (document.documentElement.scrollTop < 9000) {
        To_related.classList.add("page_nav_on");
        To_product_detailInfo.classList.remove("page_nav_on");
        To_exchange.classList.remove("page_nav_on");
        To_review.classList.remove("page_nav_on");
      } else if (document.documentElement.scrollTop > 9000) {
        To_review.classList.add("page_nav_on");
        To_product_detailInfo.classList.remove("page_nav_on");
        To_exchange.classList.remove("page_nav_on");
        To_related.classList.remove("page_nav_on");
      }
    };
  });
  return (
    <>
      <div className="pur_wrap">
        <div className="purchaseitm">
          <div className="itm_name">바쿠 스탠다드 파머스 마켓</div>
          <p className="itm_num">
            구매수량 :{" "}
            <span className="itm_number" id="itm_number">
              1
            </span>
            개
          </p>
          <div className="itm_price">
            <p>
              총 상품금액 : <span id="totalprice">12900</span>원
            </p>
          </div>
          <BuyButton className="purchase_btn">구매하기</BuyButton>
        </div>
      </div>
      <div className="wrap">
        <nav className="page_history">
          <ul>
            <li>
              <Link to={"/"}>홈</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={"/sub"}>스탠다드</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={"/detail"}>바쿠 스탠다드 파머스 마켓</Link>
            </li>
          </ul>
        </nav>

        <div className="shop">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            autoplay
            speed={300}
            delay={0}
            navigation
            pagination
          >
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/detail_page/standard_img02.jpg"
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/detail_page/standard_img02-1.jpg"
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/detail_page/standard_img02-2.jpg"
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/detail_page/standard_img02-3.jpg"
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/detail_page/standard_img02-4.jpg"
                }
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <div className="item">
            <div className="item_name">
              <h3>바쿠 스탠다드 파머스 마켓</h3>
            </div>
            <p className="item_price" id="item_price">
              12,900 KRW
            </p>
            <ul className="count">
              <li id="itm_minus">
                <FontAwesomeIcon icon={faMinus} />
              </li>
              <li id="item_count">1</li>
              <li id="itm_plus">
                <FontAwesomeIcon icon={faPlus} />
              </li>
            </ul>
            <div className="total_price">
              <div className="total">
                <p>총 상품금액 :</p>
                <p>
                  <span id="total_price">12900</span>원
                </p>
              </div>
              <div className="purchase">
                <div className="cart_btn">장바구니</div>
                <div className="purc_btn">구매하기</div>
              </div>
            </div>
            <div className="shipping_info">
              <div className="shipping">배송정보</div>
              <ul className="ship_info">
                <li>
                  <h3>배송 방법</h3>
                  <p>택배</p>
                </li>
                <li>
                  <h3>배송 지역</h3>
                  <p>전국지역</p>
                </li>
                <li>
                  <h3>배송 비용</h3>
                  <p>3,000원</p>
                </li>
                <li>
                  <h3>배송 기간</h3>
                  <p>3일 ~ 7일</p>
                </li>
                <li>
                  <h3>배송 안내</h3>
                  <p>
                    산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는
                    겨웅가 있습니다. 고객님께서 주문하신 상품은 입금 확인 후
                    배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소
                    지연될 수 있습니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product_detail" id="product_detail">
          <div className="product_detail_title">상세 정보</div>
          <div className="product_detail_img">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/detail_page/detailStandardFarmersMarket.jpg"
              }
              alt=""
            />
          </div>
        </div>

        <div className="payment_info" id="payment_info">
          <h3>상품결제정보</h3>
          <p className="info_space">
            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
            있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등
            정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할
            수 있습니다.
          </p>
          <p>
            무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
            가까운 은행에서 직접 입금하시면 됩니다.
          </p>
          <p>
            주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
            7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
          </p>
        </div>
        <div className="refund_info">
          <h3>교환 및 반품정보</h3>
          <p>교환 및 반품 주소</p>
          <p className="info_space">
            - [04158] 서울특별시 마포구 마포대로 49 (도화동) 성우빌딩
            1107-1109호
          </p>
          <p>교환 및 반품이 가능한 경우</p>
          <p>
            - 계약내용에 관한 서면을 받은 날부터 7일. 단, 그 서면을 받은 때보다
            재화등의 공급이 늦게 이루어진 경우에는 재화등을 공급받거나 재화등의
            공급이 시작된 날부터 7일 이내
          </p>
          <p className="info_space">
            - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나
            계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날 부터
            3월이내, 그사실을 알게 된 날 또는 알 수 있었던 날부터 30일이내
          </p>
          <p>교환 및 반품이 불가능한 경우</p>
          <p>
            - 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만,
            재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는
            청약철회를 할 수 있습니다)
          </p>
          <p>
            - 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히
            감소한 경우
          </p>
          <p>
            - 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히
            감소한 경우
          </p>
          <p>- 복제가 가능한 재화등의 포장을 훼손한 경우</p>
          <p>
            - 개별 주문 생산되는 재화 등 청약철회시 판매자에게 회복할 수 없는
            피해가 예상되어 소비자의 사전 동의를 얻은 경우
          </p>
          <p className="info_space">
            - 디지털 콘텐츠의 제공이 개시된 경우, (다만, 가분적 용역 또는 가분적
            디지털콘텐츠로 구성된 계약의 경우 제공이 개시되지 아니한 부분은
            청약철회를 할 수 있습니다.)
          </p>
          <p>
            ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
            고객님께서 부담하셔야 합니다.
          </p>
          <p>(색상 교환, 사이즈 교환 등 포함)</p>
        </div>
        <div className="related_product" id="related_product">
          <h4 className="rel_title">관련 상품</h4>
          <Swiper
            className="rel_swiper"
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay
            speed={500}
            navigation
            pagination
          >
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/detail_page/review_img01.jpg"
                }
                alt=""
              />
              <h4>바쿠 베이비 핑크 랍스터</h4>
              <p>15,000원</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/detail_page/review_img02.jpg"
                }
                alt=""
              />
              <h4>바쿠 스탠다드 땡큐 해피</h4>
              <p>15,000원</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/detail_page/review_img03.jpg"
                }
                alt=""
              />
              <h4>바쿠 돕 키트 웨이비 스트라이프 - 핑크 앤 그린</h4>
              <p>30,000원</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/detail_page/review_img04.jpg"
                }
                alt=""
              />
              <h4>바쿠 스탠다드 옐로우 해피</h4>
              <p>15,000원</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/detail_page/review_img05.jpg"
                }
                alt=""
              />
              <h4>바쿠 스탠다드 세일러 스트라이프</h4>
              <p>15,000원</p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="review" id="review">
          <h4>리뷰 작성</h4>
          <div className="review_board">
            <p>
              리뷰가없습니다. <br />
              리뷰를 작성해보세요.
            </p>
            <div className="review_btn">상품 리뷰 작성하기</div>
          </div>
        </div>
      </div>

      <ul className="page_nav" id="page_nav">
        <li
          className="To_product_detailInfo page_nav_on"
          id="To_product_detailInfo"
        >
          상품 상세 정보
        </li>
        <li className="To_exchange" id="To_exchange">
          배송 / 교환 및 반품 안내
        </li>
        <li className="To_related" id="To_related">
          관련 상품
        </li>
        <li className="To_review" id="To_review">
          상품 리뷰 (0)
        </li>
      </ul>
    </>
  );
}
