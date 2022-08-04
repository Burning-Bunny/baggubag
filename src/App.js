// import logo from './logo.svg';
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
            <img src="./img/logo1.png" alt="baggu" />
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
              <p>안녕하세요!</p>
              <p>
                고객님은 현재 <span>'로그아웃'</span> 상태 입니다.
              </p>
            </div>
            <div className="btns">
              <button className="login_btn">로그인</button>
              <button className="join_btn">회원가입</button>
            </div>
          </div>

          <div className="user_tab">
            <div className="tab_name">
              <div className="tab_name1 tab_on" id="tab_name1">
                배송정보
              </div>
              <div className="tab_name2" id="tab_name2">
                커뮤니티
              </div>
            </div>
            <div className="delivery_tab " id="delivery_tab">
              <ul className="deliver">
                <div className="deliver_my">
                  나의 주문처리 현황 (3개월 기준)
                </div>
                <ul className="deliver_stat">
                  <li>
                    <p>입금전</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>배송준비</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>배송중</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>배송완료</p>
                    <span>0</span>
                  </li>
                </ul>
                <ul className="deliver_itemstat">
                  <li>
                    <p>취소</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>교환</p>
                    <span>0</span>
                  </li>
                  <li>
                    <p>반품</p>
                    <span>0</span>
                  </li>
                </ul>
              </ul>
              <div className="user_board">
                <div>주문조회</div>
                <div>회원정보</div>
                <div>관심상품</div>
                <div>적립금</div>
                <div>쿠폰</div>
                <div>게시물관리</div>
                <div>배송주소록관리</div>
                <div>정기배송관리</div>
              </div>

              <div className="user_history">
                <div className="user_history_title">
                  <p>최근 본 상품</p>
                  <span>전체보기</span>
                </div>
                <div className="item_history">
                  최근 본 상품 내역이 없습니다.
                </div>
              </div>
            </div>

            <div className="community_tab" id="community_tab">
              <div className="communityservice communitynotice">공지사항</div>
              <div className="communityservice communityreview">REVIEW</div>
              <div className="communityservice communityqna">상품Q&A</div>
              <div className="communityservice communityevent">EVENT</div>
              <div className="communityservice communityabout">ABOUT US</div>

              <div className="customercenter">
                <div className="center_title">CUSTOMER CENTER</div>
                <div className="center_info">
                  <h4>1588-8564</h4>
                  <p>월요일~금요일 9:00 am ~ 6:00 pm</p>
                  <p>(점심시간 12:00 am ~ 1:00 pm)</p>
                  <p>토/일요일, 공휴일은 쉬어요</p>
                  <p>전화상담이 어려울 경우 문의 게시판을 이용해주세요.</p>
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
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          <ul>
            <li>공지사항</li>
            <li>REVIEW</li>
            <li>EVENT</li>
            <li>ABOUT US</li>
          </ul>
          <div className="contact">
            <h3>CONTACT :</h3>
            <h4>1588-8564</h4>
            <p>평일 : 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
            <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
            <p>토요일, 일요일, 공휴일 휴무</p>
            <p>통화량이 많을때는 문의 게시판으로 문의주세요.</p>
          </div>
          <div className="footer_btn">
            <button className="board_btn">문의 게시판</button>
            <button className="qna_btn">자주 묻는 질문</button>
          </div>
        </div>
        <div className="down_footer">
          <img src="./img/footer_logo.png" alt="" />
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
