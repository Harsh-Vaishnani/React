import React from "react";
import HeroImg from "../Images/hero.png";
import BgImg1 from "../Images/bgimg-1.png";
import BgImg2 from "../Images/bgimg-2.png";
import "../../src/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="bg-img-1"></div>
      <div className="bg-img-2"></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="col-12 col-md-6 hero-text"
          >
            <p
              data-aos="fade-right"
              data-aos-duration="1600"
              className="hero-welcome"
            >
              WELCOME TO SPACE DYNAMIC
            </p>
            <h2
              data-aos="fade-right"
              data-aos-duration="1700"
              className="hero-heading"
            >
              We Make
              <span className="highlight-blue"> Digital Ideas</span>
              <br />&<span className="highlight-red"> SEO</span> Marketing
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="1800"
              className="hero-description mt-3"
            >
              Innovating digital strategies with cutting-edge SEO solutions to
              elevate your brand's online presence. Transforming ideas into
              impactful digital success.
            </p>
            <button className="hero-main-btn mt-4">
              <button
                data-aos="fade-right"
                data-aos-duration="2000"
                className="hero-inner-btn"
              >
                <p className="m-0">Analyze Site</p>
              </button>
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="col-12 col-md-6 hero-img-container"
          >
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src={HeroImg}
              alt="Hero"
              className="hero-img mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
