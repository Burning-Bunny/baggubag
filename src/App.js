import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faAngleUp,
  faAngleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import { useEffect } from "react";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const topBtn = document.querySelector(".top_btn");
    const bottomBtn = document.querySelector(".bottom_btn");
    window.addEventListener("scroll", function () {
      if (this.scrollY > 200) {
        topBtn.classList.add("on");
        bottomBtn.classList.add("on");
      } else {
        topBtn.classList.remove("on");
        bottomBtn.classList.remove("on");
      }
    });

    topBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    bottomBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 50000, behavior: "smooth" });
    });

    const userOpen = document.getElementById("userOpen");
    const close_btn = document.getElementById("close_btn");
    const user_modal = document.getElementById("user_modal");

    userOpen.addEventListener("click", () => {
      user_modal.classList.add("user_modal_open");
    });
    close_btn.addEventListener("click", () => {
      user_modal.classList.remove("user_modal_open");
    });
    document.addEventListener("mouseup", function (e) {
      if (!user_modal.contains(e.target)) {
        user_modal.classList.remove("user_modal_open");
      }
    });

    const Tab_name1 = document.getElementById("tab_name1");
    const Tab_name2 = document.getElementById("tab_name2");
    const Delivery_tab = document.getElementById("delivery_tab");
    const Community_tab = document.getElementById("community_tab");

    Tab_name1.addEventListener("click", () => {
      Delivery_tab.style.display = "block";
      Community_tab.style.display = "none";
      Tab_name1.classList.add("tab_on");
      Tab_name2.classList.remove("tab_on");
    });
    Tab_name2.addEventListener("click", () => {
      Delivery_tab.style.display = "none";
      Community_tab.style.display = "block";
      Tab_name2.classList.add("tab_on");
      Tab_name1.classList.remove("tab_on");
    });
  });
  return (
    <>
      <header className="headerWrap">
        <div className="header">
          <div
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={process.env.PUBLIC_URL + "/img/logo1.png"} alt="baggu" />
          </div>
          <div className="lnb" id="lnb">
            <ul className="lnb_menu">
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                FANNY PACK
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                STANDARD
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                BABY
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                WINE BAG
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                BIG
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                DUCK
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                POUCH&CASE
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                CROSS BODY
              </li>
              <li
                onClick={() => {
                  navigate("/sub");
                }}
              >
                TOWEL
              </li>
            </ul>
          </div>
          <div className="gnb" id="gnb">
            <FontAwesomeIcon
              className="gnb_icon gnb_magnifyingGlass"
              icon={faMagnifyingGlass}
            />
            <input
              type="search"
              name="searchbox"
              id="gnbsearchbox"
              className="searchbox"
            />
            <FontAwesomeIcon
              className="gnb_icon"
              icon={faCartShopping}
              onClick={() => {
                navigate("/Cart");
              }}
            />
            <FontAwesomeIcon className="gnb_icon" icon={faUser} id="userOpen" />
          </div>
        </div>
      </header>
      <div className="user_modal" id="user_modal">
        <div className="user_container">
          <div className="status">
            <div className="close_btn" id="close_btn">
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="login_stat">
              <p>???????????????!</p>
              <p>
                ???????????? ?????? <span>'????????????'</span> ?????? ?????????.
              </p>
            </div>
            <div className="btns">
              <button className="login_btn">?????????</button>
              <button className="join_btn">????????????</button>
            </div>
          </div>

          <div className="user_tab">
            <div className="tab_name">
              <div className="tab_name1 tab_on" id="tab_name1">
                ????????????
              </div>
              <div className="tab_name2" id="tab_name2">
                ????????????
              </div>
            </div>
            <div className="delivery_tab " id="delivery_tab">
              <ul className="deliver">
                <div className="deliver_my">
                  ?????? ???????????? ?????? (3?????? ??????)
                </div>
                <ul className="deliver_stat">
                  <li>
                    <p>?????????</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>????????????</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>?????????</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>????????????</p>
                    <span>0</span>
                  </li>
                </ul>
                <ul className="deliver_itemstat">
                  <li>
                    <p>??????</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>??????</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>??????</p>
                    <span>0</span>
                  </li>
                </ul>
              </ul>
              <div className="user_board">
                <div>????????????</div>
                <div>????????????</div>
                <div>????????????</div>
                <div>?????????</div>
                <div>??????</div>
                <div>???????????????</div>
                <div>?????????????????????</div>
                <div>??????????????????</div>
              </div>

              <div className="user_history">
                <div className="user_history_title">
                  <p>?????? ??? ??????</p>
                  <span>????????????</span>
                </div>
                <div className="item_history">
                  ?????? ??? ?????? ????????? ????????????.
                </div>
              </div>
            </div>

            <div className="community_tab" id="community_tab">
              <div className="communityservice communitynotice">????????????</div>
              <div className="communityservice communityreview">REVIEW</div>
              <div className="communityservice communityqna">??????Q&A</div>
              <div className="communityservice communityevent">EVENT</div>
              <div className="communityservice communityabout">ABOUT US</div>

              <div className="customercenter">
                <div className="center_title">CUSTOMER CENTER</div>
                <div className="center_info">
                  <h4>1588-8564</h4>
                  <p>?????????~????????? 9:00 am ~ 6:00 pm</p>
                  <p>(???????????? 12:00 am ~ 1:00 pm)</p>
                  <p>???/?????????, ???????????? ?????????</p>
                  <p>??????????????? ????????? ?????? ?????? ???????????? ??????????????????.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <footer className="footer">
        <div className="upper_footer">
          <ul>
            <li>????????????</li>
            <li>????????????</li>
            <li>????????????????????????</li>
            <li>????????????</li>
          </ul>
          <ul>
            <li>????????????</li>
            <li>REVIEW</li>
            <li>EVENT</li>
            <li>ABOUT US</li>
          </ul>
          <div className="contact">
            <h3>CONTACT :</h3>
            <h4>1588-8564</h4>
            <p>?????? : 09:00 ~ 18:00 (???????????? 12:00 ~ 13:00)</p>
            <p>???????????? ??????????????? ??????????????? ????????????????????????.</p>
            <p>?????????, ?????????, ????????? ??????</p>
            <p>???????????? ???????????? ?????? ??????????????? ???????????????.</p>
          </div>
          <div className="footer_btn">
            <button className="board_btn">?????? ?????????</button>
            <button className="qna_btn">?????? ?????? ??????</button>
          </div>
        </div>
        <div className="down_footer">
          <img src={process.env.PUBLIC_URL + "/img/footer_logo.png"} alt="" />
        </div>
      </footer>

      <div className="windowbtn">
        <div className="top_btn">
          <FontAwesomeIcon className="toTop" icon={faAngleUp} />
        </div>
        <div className="bottom_btn">
          <FontAwesomeIcon className="toBottom" icon={faAngleDown} />
        </div>
      </div>
    </>
  );
}

export default App;
