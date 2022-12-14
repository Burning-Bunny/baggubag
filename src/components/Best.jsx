import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Best() {
  useEffect(() => {
    const best_bag_tab = document.getElementById("best_bag_tab");
    const best_pouch_tab = document.getElementById("best_pouch_tab");
    const best_sprots_tab = document.getElementById("best_sprots_tab");
    const best_bag = document.getElementById("best_bag");
    const best_pouch = document.getElementById("best_pouch");
    const best_sports = document.getElementById("best_sports");

    best_bag_tab.addEventListener("click", () => {
      best_bag_tab.classList.add("change");
      best_pouch_tab.classList.remove("change");
      best_sprots_tab.classList.remove("change");
      best_bag.classList.add("on");
      best_pouch.classList.remove("on");
      best_sports.classList.remove("on");
    });
    best_pouch_tab.addEventListener("click", () => {
      best_bag_tab.classList.remove("change");
      best_pouch_tab.classList.add("change");
      best_sprots_tab.classList.remove("change");
      best_bag.classList.remove("on");
      best_pouch.classList.add("on");
      best_sports.classList.remove("on");
    });
    best_sprots_tab.addEventListener("click", () => {
      best_bag_tab.classList.remove("change");
      best_pouch_tab.classList.remove("change");
      best_sprots_tab.classList.add("change");
      best_bag.classList.remove("on");
      best_pouch.classList.remove("on");
      best_sports.classList.add("on");
    });

    let Best_imgs = document.querySelectorAll(".best_item_img > img ");

    Best_imgs.forEach((Best_img) => {
      Best_img.addEventListener("mouseover", function () {
        Best_img.setAttribute("src", this.src.replace(".jpg", "-1.jpg"));
      });
    });
    Best_imgs.forEach((Best_img) => {
      Best_img.addEventListener("mouseout", function () {
        Best_img.setAttribute("src", this.src.replace("-1.jpg", ".jpg"));
      });
    });
  });
  return (
    <>
      <section className="best_items">
        <div className="best_container">
          <div className="best_title">
            <h3>BEST ITEM</h3>
            <p>????????? ???????????????</p>
          </div>

          <ul className="best_tab" id="best_tab">
            <li className="change" id="best_bag_tab">
              BAGGU BAG
            </li>
            <li id="best_pouch_tab">POUCH</li>
            <li id="best_sprots_tab">SPORTS</li>
          </ul>
          <div className="best_item_set">
            <div className="best_bag on" id="best_bag">
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/baby_img01.jpg"
                    }
                    alt="baby_img01"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ???????????? ???????????????</h3>
                </div>
                <span>12,000???</span>
                <p>10,900???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/baby_img02.jpg"
                    }
                    alt="baby_img02"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ?????? ?????? ????????? ??????</h3>
                </div>
                <span>12,000???</span>
                <p>10,900???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/baby_img03.jpg"
                    }
                    alt="baby_img03"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ????????????</h3>
                </div>
                <span>12,000???</span>
                <p>10,900???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/baby_img04.jpg"
                    }
                    alt="baby_img04"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ????????? ?????????</h3>
                </div>
                <span>12,000???</span>
                <p>10,900???</p>
              </div>
            </div>
            <div className="best_pouch" id="best_pouch">
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/pouch_img01.jpg"
                    }
                    alt="pouch_img01"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ??? ?????? ???????????????</h3>
                </div>
                <span>38,000???</span>
                <p>27,000???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/pouch_img02.jpg"
                    }
                    alt="pouch_img02"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ??? ?????? ????????? ??? ????????? ??????</h3>
                </div>
                <span>38,000???</span>
                <p>27,000???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/pouch_img03.jpg"
                    }
                    alt="pouch_img03"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ??? ?????? ????????? ??????</h3>
                </div>
                <span>38,000???</span>
                <p>27,000???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/pouch_img04.jpg"
                    }
                    alt="pouch_img04"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ??? ?????? ????????? ??????</h3>
                </div>
                <span>38,000???</span>
                <p>27,000???</p>
              </div>
            </div>
            <div className="best_sports" id="best_sports">
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/sports_img01.jpg"
                    }
                    alt="sports_img01"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ?????? ??????</h3>
                </div>
                <span>45,000???</span>
                <p>30,000???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/sports_img02.jpg"
                    }
                    alt="sports_img02"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ????????? ????????? ??????</h3>
                </div>
                <span>55,000???</span>
                <p>53,000???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/sports_img03.jpg"
                    }
                    alt="sports_img03"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ????????? ????????? ??????</h3>
                </div>
                <span>45,000???</span>
                <p>30,000???</p>
              </div>
              <div className="best_item">
                <Link className="best_item_img" to={"/detail"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/main_page/sports_img04.jpg"
                    }
                    alt="sports_img04"
                  />
                </Link>
                <div className="best_itemname">
                  <h3>?????? ?????? ????????? ????????? ??????</h3>
                </div>
                <span>45,000???</span>
                <p>30,000???</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
