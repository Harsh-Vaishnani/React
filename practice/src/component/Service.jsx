import React from "react";
import ServiceImg from "../Images/serviceImg.jpeg";
import BgImg1 from "../Images/bgimg-1.png";
import BgImg2 from "../Images/bgimg-2.png";

function Service() {
  return (
    <div id="Service" class="container" style={{overflow:"hidden"}}>
      <div class="row" style={{ alignItems: "center" }}>
        <div data-aos="fade-right" class="col">
          <img data-aos="zoom-in" data-aos-duration="1500"
            src={ServiceImg}
            alt=""
            style={{ width: "590px", height: "600px", objectFit: "contain" }}
          />
        </div>
        <div data-aos="fade-left" class="col">
          <h2 data-aos="fade-left" data-aos-duration="1500"
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#2a2a2a",
              lineHeight: "44px",
              letterSpacing: "0.50px",
            }}
          >
            Grow Your Website With Our{" "}
            <span style={{ color: "#03A4ED" }}>
              SEO <br />{" "}
            </span>{" "}
            Service & <span style={{ color: "#FE3F40" }}>Project</span> Ideas
          </h2>
          <p data-aos="fade-left" data-aos-duration="1700"
            className="mb-4 mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "30px",
              color: "#2a2a2a",
              fontStyle: "oblique",
              fontWeight: "400",
            }}
          >
            Elevate your website’s performance with our specialized SEO
            services. We offer personalized strategies to enhance search engine
            rankings and unique project ideas that attract more visitors, engage
            users effectively, and foster long-term growth for your online
            business.
          </p>
          <h5 data-aos="fade-left" data-aos-duration="1900" style={{ marginBottom: "15px", marginTop: "20px" }}>
            Website Analysis{" "}
            <span
              style={{
                position: "absolute",
                right: "19%",
                color: "#1AACEF",
                fontWeight: "700",
              }}
            >
              70%
            </span>
          </h5>
          <div data-aos="fade-left" data-aos-duration="1900"
            style={{
              width: "100%",
              backgroundColor: "#f7eff1",
              height: "6px",
              borderRadius: "50px",
            }}
          >
            <div data-aos="fade-left" data-aos-duration="1900"
              style={{
                width: "70%",
                backgroundColor: "#FF3657",
                height: "6px",
                borderRadius: "50px",
              }}
            ></div>
          </div>
          <h5 data-aos="fade-left" data-aos-duration="1900" style={{ marginBottom: "15px", marginTop: "20px" }}>
            SEO Reports{" "}
            <span
              style={{
                position: "absolute",
                right: "15%",
                color: "#1AACEF",
                fontWeight: "700",
              }}
            >
              80%
            </span>
          </h5>
          <div data-aos="fade-left" data-aos-duration="1900"
            style={{
              width: "100%",
              backgroundColor: "#f7eff1",
              height: "6px",
              borderRadius: "50px",
            }}
          >
            <div data-aos="fade-left" data-aos-duration="1900"
              style={{
                width: "80%",
                backgroundColor: "#FF3657",
                height: "6px",
                borderRadius: "50px",
              }}
            ></div>
          </div>
          <h5 data-aos="fade-left" data-aos-duration="1900" style={{ marginBottom: "15px", marginTop: "20px" }}>
            Page Optimizations{" "}
            <span
              style={{
                position: "absolute",
                right: "9%",
                color: "#1AACEF",
                fontWeight: "700",
              }}
            >
              94%
            </span>
          </h5>
          <div data-aos="fade-left" data-aos-duration="1900"
            style={{
              width: "100%",
              backgroundColor: "#f7eff1",
              height: "6px",
              borderRadius: "50px",
            }}
          >
            <div data-aos="fade-left" data-aos-duration="1900"
              style={{
                width: "94%",
                backgroundColor: "#FF3657",
                height: "6px",
                borderRadius: "50px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
