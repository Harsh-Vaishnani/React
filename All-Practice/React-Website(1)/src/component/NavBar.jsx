import React from "react";

function NavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg  fixed-top"
      style={{
        height: "100px",
        backgroundColor: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div class="container">
        <div>
          <a
            class="navbar-brand m-0 p-0"
            href="#"
            style={{ letterSpacing: "8px" }}
          >
            <h4
              className="m-0"
              style={{ color: "#03a4ed", fontWeight: "700", fontSize: "24px" }}
            >
              SPAC<span style={{ color: "#fe3f40" }}>DYNA</span>
            </h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="d-flex m-0">
            <li
              style={{
                listStyle: "none",
                paddingInline: "12px",
                lineHeight: "40px",
              }}
            >
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "#FE3F40",
                    fontSize: "17px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                  }}
                >
                  Home
                </span>
              </a>
            </li>
            <li
              style={{
                listStyle: "none",
                paddingInline: "12px",
                lineHeight: "40px",
              }}
            >
              <a href="#About" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                >
                  About Us
                </span>
              </a>
            </li>
            <li
              style={{
                listStyle: "none",
                paddingInline: "12px",
                lineHeight: "40px",
              }}
            >
              <a href="#Service" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                >
                  Services
                </span>
              </a>
            </li>
            {/* <li
              style={{
                listStyle: "none",
                paddingInline: "12px",
                lineHeight: "40px",
              }}
            >
              <a href="" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                >
                  Portfolio
                </span>
              </a>
            </li> */}
            {/* <li
              style={{
                listStyle: "none",
                paddingInline: "12px",
                lineHeight: "40px",
              }}
            >
              <a href="" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                >
                  Blog
                </span>
              </a>
            </li> */}
            <li
              style={{
                listStyle: "none",
                paddingInline: "12px",
                lineHeight: "40px",
              }}
            >
              <a href="#Contact" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                >
                  Message Us
                </span>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <button
                className="ms-5"
                style={{
                  backgroundColor: "#FE3F40",
                  border: "none",
                  height: "40px",
                  borderRadius: "50px",
                  paddingInline: "20px",
                  color: "white",
                  fontWeight: "400",
                  fontSize: "17px",
                }}
              >
                Contact Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
