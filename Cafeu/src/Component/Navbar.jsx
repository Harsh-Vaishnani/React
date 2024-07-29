import logo from "../../public/Images/logo.png";
import call from "../../public/Images/call.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container">
          <div>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo"></img>
            </a>
          </div>
          <div>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown ms-3 me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 1
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 2
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 3
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 4
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 5
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 6
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 7
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-3 me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 1
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-3 me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Menu
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Menu Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-3 me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog Grid
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-3 me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        FAQs
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gallery
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Service
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Service Details
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gallery Details
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Term
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Team Details
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pricing
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reservation
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Shop
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Shop Details
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cart
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Wishlist
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Checkout
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        My Account
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-3 me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact
                      </a>
                      <hr className="m-2" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact Two
                      </a>
                    </li>
                  </ul>
                </li>
                <ul style={{ listStyle: "none", lineHeight: "40px" }}>
                  <li>
                    <img src={call}></img>
                  </li>
                </ul>
                <ul style={{ listStyle: "none" ,lineHeight:"40px",paddingLeft:"15px"}}>
                  <li>
                    <p className="m-0">+880 123 456 789</p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
