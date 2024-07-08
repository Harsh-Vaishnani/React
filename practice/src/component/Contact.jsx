import React from "react";
import ContactImg from "../Images/contact-bg.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneSquareAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="Contact" style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${ContactImg})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          zIndex: "1",
          position: "absolute",
          top: "0",
        }}
      >
        <div className="container" style={{ height: "100%" }}>
          <div className="row" style={{ alignItems: "center", height: "100%" }}>
            <div
              data-aos="fade-right"
              data-aos-duration="1100"
              className="col"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  backgroundColor: "#FF5884",
                  position: "absolute",
                  zIndex: "-1",
                  opacity: ".3",
                  borderRadius: "30%",
                  right: "30%",
                  bottom: "-35%",
                }}
              ></div>
              <h2
                data-aos="fade-down-right"
                data-aos-duration="1500"
                style={{ color: "#fff" }}
              >
                Feel Free To Send Us A Message About Your Website Needs
              </h2>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1700"
                style={{
                  color: "#fff",
                  marginTop: "30px",
                  fontSize: "17px",
                  lineHeight: "30px",
                  fontWeight: "500",
                }}
              >
                Contact us anytime to discuss your website needs. We're here to
                help you <br /> achieve your online goals.
              </p>
              <div
                data-aos="fade-down-right"
                data-aos-duration="2000"
                className="d-flex mt-5"
              >
                <h4
                  className="me-4 mb-0"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#fff",
                    lineHeight: "40px",
                  }}
                >
                  For any enquiry, Call Us:{" "}
                </h4>
                <FaPhoneSquareAlt
                  className="me-3"
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    color: "#fff",
                    borderRadius: "50%",
                  }}
                />
                <p
                  className="m-0"
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    lineHeight: "40px",
                  }}
                >
                  010-020-0340
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="1500"
              className="col d-flex justify-content-end"
              style={{ height: "100%", alignItems: "center" }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "100%",
                  maxWidth: "460px",
                  borderRadius: "20px",
                  display: "flex",
                }}
              >
                <form
                  data-aos="flip-right"
                  data-aos-duration="2000"
                  action=""
                  style={{ padding: "60px 30px", width: "100%" }}
                >
                  <div className="d-flex justify-content-between">
                    <input
                      type="text"
                      className="mb-4"
                      placeholder="Name"
                      style={{
                        width: "47%",
                        height: "46px",
                        borderRadius: "50px",
                        border: "none",
                        backgroundColor: "#D1F3FF",
                        paddingLeft: "13px",
                      }}
                    />
                    <input
                      type="text"
                      className="mb-4"
                      placeholder="Surname"
                      style={{
                        width: "47%",
                        height: "46px",
                        borderRadius: "50px",
                        border: "none",
                        backgroundColor: "#D1F3FF",
                        paddingLeft: "13px",
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="mb-4"
                      placeholder="Your Email"
                      style={{
                        width: "100%",
                        height: "46px",
                        borderRadius: "50px",
                        border: "none",
                        backgroundColor: "#D1F3FF",
                        paddingLeft: "13px",
                      }}
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      rows={4}
                      placeholder="Message"
                      style={{
                        width: "100%",
                        height: "150px",
                        borderRadius: "20px",
                        border: "none",
                        backgroundColor: "#D1F3FF",
                        paddingLeft: "13px",
                        resize: "none",
                      }}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="mt-4"
                      style={{
                        backgroundColor: "#03A4ED",
                        border: "none",
                        padding: "12px 25px",
                        borderRadius: "50px",
                      }}
                    >
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontSize: "17px",
                        }}
                      >
                        Send Message
                      </a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
