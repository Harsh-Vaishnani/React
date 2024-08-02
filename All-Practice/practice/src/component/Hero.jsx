import React from "react";
import HeroImg from "../Images/hero.png";
import BgImg1 from "../Images/bgimg-1.png";
import BgImg2 from "../Images/bgimg-2.png";

function Hero() {
  return (
    <section
      style={{
        height: "86vh",
        marginTop: "6.5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${BgImg1})`,
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          zIndex: "-999",
          opacity: "0.8",
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${BgImg2})`,
          position: "absolute",
          height: "100%",
          width: "100%",
          left: "93.6%",
          backgroundRepeat: "no-repeat",
          zIndex: "-999",
          opacity: "0.8",
        }}
      ></div>
      <div class="container">
        <div class="row justify-content-between">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="col "
            style={{ alignItems: "center", display: "grid" }}
          >
            <div>
              <p
                data-aos="fade-right"
                data-aos-duration="1600"
                style={{
                  color: "#FE4142",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                WELCOME TO SPACE DYNAMIC
              </p>
              <h2 data-aos="fade-right"
            data-aos-duration="1700"
                style={{
                  fontSize: "50px",
                  fontWeight: "700",
                  lineHeight: "72px",
                }}
              >
                We Make
                <span style={{ color: "#03A4ED", paddingLeft: "15px" }}>
                  Digital Ideas
                </span>
                <br />&
                <span style={{ color: "#FE3F40", paddingLeft: "15px" }}>
                  SEO
                </span>{" "}
                Marketing
              </h2>
              <p data-aos="fade-right"
            data-aos-duration="1800"
                className="mt-3"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  fontStyle: "oblique",
                }}
              >
                {" "}
                Innovating digital strategies with cutting-edge SEO solutions to
                elevate your brand's online presence. Transforming ideas into
                impactful digital success.
              </p>
              <button
                className="mt-4"
                style={{
                  width: "60%",
                  backgroundColor: "#03A4ED",
                  border: "none",
                  height: "65px",
                  borderRadius: "50px",
                }}
              >
                <button data-aos="fade-right"
            data-aos-duration="2000"
                  style={{
                    width: "50%",
                    border: "none",
                    height: "auto",
                    padding: "12px 25px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                  }}
                >
                  <p
                    className="m-0"
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "#fe3f40",
                      letterSpacing: "1px",
                    }}
                  >
                    Analyze Site
                  </p>
                </button>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="col"
            style={{ alignItems: "center", display: "grid" }}
          >
            <img data-aos="fade-left"
            data-aos-duration="2000"
              src={HeroImg}
              alt=""
              style={{ objectFit: "contain" }}
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
