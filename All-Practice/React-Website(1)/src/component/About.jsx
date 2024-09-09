import React from "react";
import AboutImg from "../Images/about1.png";
import StudyImg from "../Images/StudyImg.svg";

function About() {
  return (
    <>
      <div id="About"></div>

      <section
        data-aos="fade-right"
        data-aos-duration="1200"
        style={{ overflow: "hidden", height: "80vh", marginTop: "5%" }}
      >
        <div
          style={{
            backgroundImage: `url(${AboutImg})`,
            height: "655px",
            width: "100%",
            zIndex: "11",
            position: "absolute",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  src={StudyImg}
                  alt=""
                  className="mt-4"
                  style={{ width: "75%", height: "600px" }}
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                class="col d-flex"
                style={{ alignItems: "center", position: "relative" }}
              >
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#FF5884",
                    height: "400px",
                    width: "400px",
                    borderRadius: "30%",
                    opacity: ".3",
                    zIndex: "-1",
                    right: "30%",
                  }}
                ></div>
                <div   data-aos="fade-down-right"
                  data-aos-duration="1500">
                  <div className="" style={{ width: "100%" }}>
                    <h4
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      Data Analysis
                    </h4>
                    <p style={{ color: "#fff" }}>
                      Extracting insights from data to inform decisions and
                      solve problems.
                    </p>
                  </div>
                  <div className="mt-5" style={{ width: "100%" }}>
                    <h4
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      Web Analytics
                    </h4>
                    <p style={{ color: "#fff" }}>
                      Analyzing website data to optimize user experience and
                      improve performance.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-down-left"
                  data-aos-duration="1500">
                  <div className="" style={{ width: "100%" }}>
                    <h4
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      Data Reporting
                    </h4>
                    <p style={{ color: "#fff" }}>
                      Presenting analyzed data in a structured format for
                      informed decision-making.
                    </p>
                  </div>
                  <div className="mt-5" style={{ width: "100%" }}>
                    <h4
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      SEO Suggestions
                    </h4>
                    <p style={{ color: "#fff" }}>
                      Use keywords, optimize content, improve site speed, and
                      build backlinks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
