import React from "react";
import { useEffect } from "react";
import { addItem } from "./store";
import { useDispatch } from "react-redux";
import Best from "../components/Best";
import data from "../components/data";
import { Link } from "react-router-dom";
import "../pages/css/sub.css";
import BuyButton from "../components/BuyButton";
import CartButton from "../components/CartButton";

export default function Sub() {
  let dispatch = useDispatch();

  useEffect(() => {
    let products = document.querySelectorAll(".product_img > img ");

    products.forEach((product) => {
      product.addEventListener("mouseover", function () {
        product.setAttribute("src", this.src.replace(".jpg", "-1.jpg"));
      });
    });
    products.forEach((product) => {
      product.addEventListener("mouseout", function () {
        product.setAttribute("src", this.src.replace("-1.jpg", ".jpg"));
      });
    });

    // img_change

    const more = document.querySelector(".more");
    const more_btn = document.getElementById("more_btn");
    const standard_item_container = document.getElementById(
      "standard_item_container"
    );

    more.addEventListener("click", () => {
      let height = standard_item_container.offsetHeight;
      let newHeight = height + 1120;
      if (standard_item_container.offsetHeight >= 8000) {
        standard_item_container.style.height = "1100px";
      } else {
        standard_item_container.style.height = newHeight + "px";
      }

      if (standard_item_container.offsetHeight < 6800) {
        more_btn.innerText = "더보기";
      } else if (standard_item_container.offsetHeight >= 6800) {
        more_btn.innerText = "닫기";
        if (standard_item_container.offsetHeight > 8000) {
          more_btn.innerText = "더보기";
        }
      }
    });
    // more
  });

  return (
    <>
      <nav className="history_nav">
        <ul className="history_navis">
          <li>
            <Link to={"/"}>홈</Link>
          </li>
          <li>/</li>
          <li>
            <Link to={"/sub"}>스탠다드</Link>
          </li>
        </ul>
      </nav>
      <Best />
      <section className="standard">
        <div className="standard_title">
          <div className="standard_num">Total 32 Items</div>
          <ul className="standard_filter filterbox">
            <li className="sortreset">최신순</li>
            <li className="descending">낮은가격순</li>
            <li className="ascending">높은가격순</li>
          </ul>
        </div>
        <div
          className="standard_item_container productwrap"
          id="standard_item_container"
        >
          {data.map((value, i) => {
            return (
              <div className="product" key={value.id}>
                <Link to={"/detail"}>
                  <div className="product_img">
                    <img
                      src={`./img/sub_page/standard_img${i + 1}.jpg`}
                      alt={value.title}
                    />
                  </div>
                </Link>

                <h3>{value.title}</h3>
                <p>
                  {value.price} <span>원</span>
                </p>
                <div className="product_btn">
                  <div
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: value.id,
                          title: value.title,
                          price: value.price,
                          count: 1,
                          image: value.image,
                        })
                      );
                    }}
                  >
                    <CartButton>장바구니</CartButton>
                  </div>
                  <Link to={"/detail"}>
                    <BuyButton>구매하기</BuyButton>
                  </Link>
                </div>
              </div>
            );
          })}

          <div className="more ">
            <button className="more_btn" id="more_btn">
              더보기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
