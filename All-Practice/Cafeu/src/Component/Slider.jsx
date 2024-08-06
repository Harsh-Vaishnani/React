import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CommonCss/Common.css";
import "swiper/css";
import "swiper/css/navigation";

import slider1 from "../../public/Images/baner1.png";
import slider2 from "../../public/Images/baner2.png";
import slider3 from "../../public/Images/baner3.png";

import { Navigation, Autoplay } from "swiper/modules";

const DarkLightToggle = ({ toggleMode, mode }) => (
  <div
    style={{ width: "auto" }}
    className="text-center me-3 justify-content-end d-flex"
  >
    {/* <a href="#" style={{ textDecoration: "none" }} onClick={toggleMode}>
      {mode === "dark" && <h3 className="m-0">🔅</h3>}
      {mode === "light" && <h3 className="m-0">🔆</h3>}
      {mode === "blue" && <h3 className="m-0">🔵</h3>}
      {mode === "sepia" && <h3 className="m-0">🟤</h3>}
    </a> */}
  </div>
);

function Slider() {
  const [mode, setMode] = useState("light");

  const toggleMode = (newMode) => {
    setMode(newMode);

    // Remove all mode classes
    document.body.classList.remove(
      "dark-mode",
      "light-mode",
      "blue-mode",
      "sepia-mode"
    );
    // Add new mode class
    document.body.classList.add(`${newMode}-mode`);
  };

  return (
    <>
      <DarkLightToggle toggleMode={() => toggleMode("dark")} mode={mode} />
      <DarkLightToggle toggleMode={() => toggleMode("light")} mode={mode} />
      <DarkLightToggle toggleMode={() => toggleMode("blue")} mode={mode} />
      <DarkLightToggle toggleMode={() => toggleMode("sepia")} mode={mode} />

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
                  <br /> With Creamy Avocado
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do
                  eimod <br /> tempor incididunt ut labore et dolore magna
                  aliqua Quis
                </p>
                <div className="d-flex">
                  <div
                    className="bg-danger text-center text-white rounded-2 me-4"
                    style={{ width: "17%", height: "45px", lineHeight: "45px" }}
                  >
                    <p>Order Now</p>
                  </div>
                  <div
                    className="bg-danger mx-5 video-btn"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50px",
                      animation: "fadeRed 2s infinite",
                    }}
                  >
                    <a
                      href="https://youtu.be/vP7X4HcDTwk"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        className="text-center text-white ps-1"
                        style={{ lineHeight: "40px", fontSize: "45px" }}
                      >
                        ▸
                      </p>
                    </a>
                  </div>
                  <p className="m-0 fw-bold" style={{ lineHeight: "45px" }}>
                    Watch Video
                  </p>
                </div>
              </div>
            </div>
            <img src={slider1} alt="Slider 1" />
          </div>
        </SwiperSlide>

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
                  Asian Lettuce Wrap <br />
                  <a href="" className="fw-bolder" style={{ color: "#c33" }}>
                    Chicken
                  </a>{" "}
                  Chopped Salad
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do
                  eimod <br /> tempor incididunt ut labore et dolore magna
                  aliqua Quis
                </p>
                <div className="d-flex">
                  <div
                    className="bg-danger text-center text-white rounded-2 me-4"
                    style={{ width: "17%", height: "45px", lineHeight: "45px" }}
                  >
                    <p>Order Now</p>
                  </div>
                  <div
                    className="bg-danger mx-5 video-btn"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50px",
                      animation: "fadeRed 2s infinite",
                    }}
                  >
                    <a
                      href="https://youtu.be/vP7X4HcDTwk"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        className="text-center text-white ps-1"
                        style={{ lineHeight: "40px", fontSize: "45px" }}
                      >
                        ▸
                      </p>
                    </a>
                  </div>
                  <p className="m-0 fw-bold" style={{ lineHeight: "45px" }}>
                    Watch Video
                  </p>
                </div>
              </div>
            </div>
            <img src={slider2} alt="Slider 2" />
          </div>
        </SwiperSlide>

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
                  Different &nbsp;
                  <a href="" className="fw-bolder" style={{ color: "#c33" }}>
                    Spice
                  </a>{" "}
                  For <br /> A Different Taste
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do
                  eimod <br /> tempor incididunt ut labore et dolore magna
                  aliqua Quis
                </p>
                <div className="d-flex">
                  <div
                    className="bg-danger text-center text-white rounded-2 me-4"
                    style={{ width: "17%", height: "45px", lineHeight: "45px" }}
                  >
                    <p>Order Now</p>
                  </div>
                  <div
                    className="bg-danger mx-5 video-btn"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50px",
                      animation: "fadeRed 2s infinite",
                    }}
                  >
                    <a
                      href="https://youtu.be/vP7X4HcDTwk"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        className="text-center text-white ps-1"
                        style={{ lineHeight: "40px", fontSize: "45px" }}
                      >
                        ▸
                      </p>
                    </a>
                  </div>
                  <p className="m-0 fw-bold" style={{ lineHeight: "45px" }}>
                    Watch Video
                  </p>
                </div>
              </div>
            </div>
            <img src={slider3} alt="Slider 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
