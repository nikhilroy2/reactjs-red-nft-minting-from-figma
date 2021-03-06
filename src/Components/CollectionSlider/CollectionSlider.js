import React from "react";
import "./CollectionSlider.css";
// import Swiper JS
// import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
function CollectionSlider(props) {
  return (
    <div id="CollectionSlider">
      <section id="Section2">
        <div className="section_container  px-3 px-md-0">
          <div className="title_styles d-flex align-items-center justify-content-between flex-wrap">
            <div className="content_box">
              <h2 className="text-uppercase">Special Collection</h2>
              <h5 className="family_outfit mt-4">Meet the +100 Girls</h5>
            </div>
            <div className="btn_slider_box">
              <button className="prevSliderControl">
                <svg
                  viewBox="0 0 101 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    r="49.5"
                    transform="matrix(-1 0 0 1 50.9971 50)"
                    stroke="white"
                  />
                  <path
                    d="M30 50.4121L30 49.4121L30 51.4121L30 50.4121ZM49.6719 64C50.5132 63.4595 50.5131 63.4592 50.5128 63.4589C50.5127 63.4587 50.5125 63.4583 50.5122 63.458C50.5118 63.4572 50.5112 63.4563 50.5104 63.4552C50.509 63.4529 50.507 63.4498 50.5044 63.4459C50.4994 63.4381 50.4922 63.427 50.4829 63.4129C50.4643 63.3846 50.4374 63.3437 50.4022 63.2912C50.332 63.1862 50.2289 63.0345 50.0947 62.8427C49.8263 62.4593 49.4328 61.915 48.9269 61.2635C47.9162 59.9622 46.4505 58.2246 44.6311 56.4836C41.0295 53.0373 35.8693 49.4121 30 49.4121L30 51.4121C35.0741 51.4121 39.7498 54.5809 43.2483 57.9286C44.9789 59.5846 46.3793 61.2439 47.3473 62.4903C47.8306 63.1126 48.2045 63.6299 48.4562 63.9896C48.582 64.1693 48.6772 64.3095 48.7401 64.4036C48.7716 64.4506 48.795 64.4861 48.8101 64.5092C48.8177 64.5207 48.8232 64.5292 48.8266 64.5344C48.8283 64.537 48.8295 64.5389 48.8301 64.5399C48.8305 64.5404 48.8307 64.5407 48.8307 64.5408C48.8307 64.5408 48.8307 64.5408 48.8307 64.5408C48.8306 64.5407 48.8305 64.5405 49.6719 64ZM30 51.4121C35.8918 51.4122 41.0582 47.5554 44.652 43.908C46.4701 42.0627 47.9344 40.2213 48.9439 38.8427C49.4492 38.1525 49.8422 37.576 50.1101 37.17C50.2441 36.967 50.3469 36.8065 50.4169 36.6955C50.4519 36.64 50.4788 36.5968 50.4972 36.567C50.5064 36.5521 50.5136 36.5404 50.5186 36.5322C50.5211 36.5281 50.5231 36.5249 50.5245 36.5225C50.5252 36.5213 50.5258 36.5204 50.5263 36.5196C50.5265 36.5193 50.5267 36.5189 50.5268 36.5187C50.5271 36.5183 50.5272 36.518 49.6719 36C48.8165 35.482 48.8166 35.4818 48.8167 35.4817C48.8167 35.4817 48.8167 35.4816 48.8167 35.4817C48.8166 35.4818 48.8164 35.4822 48.8161 35.4827C48.8154 35.4838 48.8142 35.4858 48.8124 35.4887C48.809 35.4943 48.8034 35.5034 48.7958 35.5157C48.7805 35.5404 48.757 35.5782 48.7254 35.6282C48.6623 35.7284 48.5668 35.8775 48.4408 36.0685C48.1886 36.4507 47.8141 37.0002 47.3302 37.6612C46.361 38.9848 44.9593 40.7465 43.2273 42.5043C39.721 46.0629 35.0515 49.4122 30.0001 49.4121L30 51.4121Z"
                    fill="white"
                  />
                  <path
                    d="M30.017 50.3934L71 50.3934"
                    stroke="white"
                    strokeWidth={2}
                  />
                </svg>
              </button>

              <button className="nextSliderControl">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx={50}
                    cy={50}
                    r="49.5"
                    stroke="white"
                  />
                  <path
                    d="M70.997 50.4121L70.997 49.4121L70.9971 51.4121L70.997 50.4121ZM51.3252 64C50.4838 63.4595 50.484 63.4592 50.4842 63.4589C50.4844 63.4587 50.4846 63.4583 50.4848 63.458C50.4853 63.4572 50.4859 63.4563 50.4866 63.4552C50.4881 63.4529 50.4901 63.4498 50.4926 63.4459C50.4977 63.4381 50.5049 63.427 50.5142 63.4129C50.5327 63.3846 50.5597 63.3437 50.5948 63.2912C50.6651 63.1862 50.7681 63.0345 50.9024 62.8427C51.1707 62.4593 51.5643 61.915 52.0702 61.2635C53.0809 59.9622 54.5466 58.2246 56.366 56.4836C59.9676 53.0373 65.1278 49.4121 70.997 49.4121L70.997 51.4121C65.9229 51.4121 61.2472 54.5809 57.7487 57.9286C56.0181 59.5846 54.6177 61.2439 53.6498 62.4903C53.1665 63.1126 52.7926 63.6299 52.5409 63.9896C52.4151 64.1693 52.3199 64.3095 52.257 64.4036C52.2255 64.4506 52.2021 64.4861 52.187 64.5092C52.1794 64.5207 52.1739 64.5292 52.1705 64.5344C52.1688 64.537 52.1676 64.5389 52.1669 64.5399C52.1666 64.5404 52.1664 64.5407 52.1664 64.5408C52.1663 64.5408 52.1664 64.5408 52.1664 64.5408C52.1664 64.5407 52.1666 64.5405 51.3252 64ZM70.9971 51.4121C65.1053 51.4122 59.9389 47.5554 56.3451 43.908C54.527 42.0627 53.0626 40.2213 52.0532 38.8427C51.5478 38.1525 51.1549 37.576 50.887 37.17C50.753 36.967 50.6502 36.8065 50.5802 36.6955C50.5452 36.64 50.5183 36.5968 50.4999 36.567C50.4906 36.5521 50.4835 36.5404 50.4785 36.5322C50.476 36.5281 50.474 36.5249 50.4726 36.5225C50.4718 36.5213 50.4713 36.5204 50.4708 36.5196C50.4706 36.5193 50.4703 36.5189 50.4702 36.5187C50.47 36.5183 50.4698 36.518 51.3252 36C52.1806 35.482 52.1805 35.4818 52.1804 35.4817C52.1804 35.4817 52.1804 35.4816 52.1804 35.4817C52.1805 35.4818 52.1807 35.4822 52.181 35.4827C52.1817 35.4838 52.1829 35.4858 52.1846 35.4887C52.1881 35.4943 52.1937 35.5034 52.2013 35.5157C52.2165 35.5404 52.24 35.5782 52.2716 35.6282C52.3348 35.7284 52.4302 35.8775 52.5563 36.0685C52.8085 36.4507 53.1829 37.0002 53.6669 37.6612C54.636 38.9848 56.0378 40.7465 57.7697 42.5043C61.276 46.0629 65.9455 49.4122 70.997 49.4121L70.9971 51.4121Z"
                    fill="white"
                  />
                  <path
                    d="M70.9801 50.3934L29.9971 50.3934"
                    stroke="white"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="swiper_body_wrapper py-5 ">
        <Swiper
          className="my_swiper"
          navigation={{
            //
            nextEl: `.nextSliderControl`, //Next
            prevEl: `.prevSliderControl`, //Prev
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4.6,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/1.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/2.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/3.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/4.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/6.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/7.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/8.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/9.png")}
              alt="img"
            />{" "}
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src={require("../../Static/img/collection_girl/10.png")}
              alt="img"
            />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CollectionSlider;
