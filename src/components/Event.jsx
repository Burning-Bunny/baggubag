import React from "react";

export default function Event() {
  return (
    <>
      <section className="event">
        <div className="event_container">
          <div className="event01">
            <div className="event_img">
              <img src="./img/main_page/event_img01.jpg" alt="" />
            </div>
            <h3>BAGGU를 MOMA 디자인 스토어에서 확인해보세요.</h3>
            <p>8월 28일 까지 확인 가능합니다.</p>
            <button className="event_btn">자세히 보기</button>
          </div>
          <div className="event02">
            <div className="event_img">
              <img src="./img/main_page/event_img02.jpg" alt="" />
            </div>
            <h3>뉴 썸머 플로럴</h3>
            <p>여름의 햇살을 쬐고, 바람에게 인사해보세요.</p>
            <button className="event_btn">지금 구매하기</button>
          </div>
          <div className="event03">
            <div className="event_img">
              <img src="./img/main_page/event_img03.jpg" alt="" />
            </div>
            <h3>트래블 파우치</h3>
            <p>여행에서 물건을 잃어버리지 않을 방법은 여기에!</p>
            <button className="event_btn">더 알아보기</button>
          </div>
        </div>
      </section>
    </>
  );
}
