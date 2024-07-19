import React from "react";
import "../CSS-File/Navbar.css";
import Serch from "../Images/icons8-search-100.png"
import Cross from "../Images/icons8-multiply-90.png"
import Camera from "../Images/camera.png"
import User from "../Images/user.svg"
import Like from "../Images/favorite-64.png"
import Cart from "../Images/cart.svg"
import Menu from "../Images/navtoggle.png"
import Myphoto from "../Images/myphoto.jpg"

function Navbar() {
  return (
    <section id="header-section">
      <div class="header">
        <div class="nav-logo">
          <h3>BOOKshelf</h3>
        </div>

        <div class="nav-search">
          <div class="search-box flex">
            <button>
              <img src={Serch} alt="" />
            </button>
            <div class="inp-box">
              <input type="search" name="" placeholder="search......." />
            </div>
            <button>
              <img src={Cross} alt="" />
            </button>
            <button>
              <img src={Camera} alt="" />
            </button>
          </div>
        </div>
        <div class="nav-icon flex">
          <div class="user-acc">
            <img src={User} alt="" />
          </div>
          <div>
            <a href="favorite.html">
              <img src={Like} alt="" />
            </a>
          </div>
          <div>
            <a href="cart.html">
              <img src={Cart} alt="" />
            </a>
          </div>

          <div class="nav-toggle" id="navbar-toggle">
            <img src={Menu} alt="" width="100%" />
          </div>
        </div>
      </div>
      <div class="navbar" id="navbar-link">
        <div class="account-info">
          <div class="acco-img flex">
            <img src={Myphoto} alt="" />
          </div>
          <div class="acc-info flex">
            <h3>Anonymous</h3>
            <p class="p2-text">reader</p>
          </div>
        </div>
        <ul>
          <li>
            <a href="index.html" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="shop.html">Shop</a>
          </li>
          <li>
            <a href="aboutus.html">About US</a>
          </li>
          <li>
            <a href="contact_us.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
