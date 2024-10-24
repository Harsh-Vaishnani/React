import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        height: "80px",
        backgroundColor: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand m-0 p-0"
          href="#"
          style={{ letterSpacing: "8px" }}
        >
          <h4
            className="m-0"
            style={{
              color: "#03a4ed",
              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            SPAC<span style={{ color: "#fe3f40" }}>DYNA</span>
          </h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#FE3F40",
                  fontSize: "17px",
                  fontWeight: "500",
                  letterSpacing: "2px",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#About"
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "black",
                  letterSpacing: "2px",
                }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Service"
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "black",
                  letterSpacing: "2px",
                }}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Contact"
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "black",
                  letterSpacing: "2px",
                }}
              >
                Message Us
              </a>
            </li>
            <li className="nav-item">
              <button
                className="ms-lg-5 mt-2 mt-lg-0"
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
