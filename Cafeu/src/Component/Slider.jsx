import React from "react";
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={slider1} />
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
