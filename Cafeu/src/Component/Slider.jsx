import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slider1 from "../../public/Images/baner1.png";
import slider2 from "../../public/Images/baner2.png";
import slider3 from "../../public/Images/baner3.png";

import { Navigation, Autoplay } from "swiper/modules";
function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide className="mt-4">
          <div className="d-flex container">
            <div
              style={{ width: "55%", alignItems: "center" }}
              className="d-grid"
            >
              <div>
                <p
                  className="text-danger fw-bold"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Lobster Two,cursive",
                  }}
                >
                  Best In Cafeu
                </p>
                <h1
                  style={{ fontSize: "50px", fontWeight: "600" }}
                  className="my-4"
                >
                  BBQ Chicken{" "}
                  <a href="" className="fw-bolder" style={{ color: "#c33" }}>
                    Salad
                  </a>{" "}
                  <br />
                  With Creamy Avocado
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do
                  eimod <br /> tempor incididunt ut labore et dolore magna
                  aliqua Quis
                </p>
                <div
                  className="bg-danger text-center text-white rounded-2"
                  style={{ width: "17%", height: "45px", lineHeight: "45px" }}
                >
                  <p>Order Now</p>
                </div>
              </div>
            </div>
            <img src={slider1} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
