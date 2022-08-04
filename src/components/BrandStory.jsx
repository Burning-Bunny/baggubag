import React from "react";

export default function BrandStory() {
  return (
    <>
      <section className="brand_story">
        <div className="brand_story_container">
          <h3 className="brand_story_title">BRAND STORY</h3>
          <p className="brand_story_subtitle">바꾸의 브랜드 스토리</p>

          <ul className="brand_stories">
            <li className="brand_story_item">
              <div className="brand_story_img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/main_page/brand_img01.jpg"
                  }
                  alt="brand_story_img01"
                />
                <div className="brand_hover">VOL.01 BAGGU MAKES BAGS</div>
              </div>
              <h4>VOL.01 BAGGU MAKES BAGS</h4>
              <p>바쿠는 가방을 만듭니다</p>
            </li>
            <li className="brand_story_item">
              <div className="brand_story_img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/main_page/brand_img02.jpg"
                  }
                  alt="brand_story_img02"
                />
                <div className="brand_hover">
                  VOL.02 BAGS FOR PEOPLE AND THE PLANET
                </div>
              </div>
              <h4>VOL.02 BAGS FOR PEOPLE AND THE PLANET</h4>
              <p>사람과 지구를 위한 가방</p>
            </li>
            <li className="brand_story_item">
              <div className="brand_story_img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/main_page/brand_img03.jpg"
                  }
                  alt="brand_story_img03"
                />
                <div className="brand_hover">
                  VOL.03 BAGS FOR PEOPLE AND THE PLANET
                </div>
              </div>
              <h4>VOL.03 BAGS FOR PEOPLE AND THE PLANET</h4>
              <p>사람과 지구를 위한 가방 2</p>
            </li>
            <li className="brand_story_item">
              <div className="brand_story_img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/main_page/brand_img04.jpg"
                  }
                  alt="brand_story_img04"
                />
                <div className="brand_hover">VOL.04 DO THE RIGHT THING</div>
              </div>
              <h4>VOL.04 DO THE RIGHT THING</h4>
              <p>바쿠는 올바른 일을 합니다</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
