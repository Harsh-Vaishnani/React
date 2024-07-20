import React from "react";
import "../CSS-File/Footer.css";
import "../CSS-File/Common.css";

function Footer() {
  return (
    <section class="footer">
      <div class="container">
        <div class="top-footer padding-1 flex">
          <div class="subscribe">
            <div class="subscribe-head flex">
              <img
                src="img/envelope-outline.svg"
                alt="icon"
                width="50px"
                height="50px"
              />
              <p style="margin: 0;">
                Subscribe to get Updates of Book on email
              </p>
            </div>
            <div class="subscribe-inp flex">
              <div class="inp-div">
                <input
                  type="text"
                  name="uname"
                  class="form-inp"
                  placeholder="Enter Your name"
                />
              </div>
              <div class="inp-div">
                <input
                  type="email"
                  name="email"
                  class="form-inp"
                  placeholder="Enter email"
                />
              </div>
              <div class="inp-btn">
                <input type="button" value=" Log in" class="primary-btn" />
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-footer padding-1 flex">
          <div class="footer-col-1 flex">
            <div>
              <h2>BookShelf</h2>
            </div>
            <div>
              <p style="font-size: 16px;">visit our offline store</p>
            </div>
            <div>
              <h4>
                <strong>Contact</strong>
              </h4>
            </div>
            <div>
              <p>
                <strong>Address: </strong>hari om society, lathidad, botad
              </p>
              <p>
                <strong>Phone:</strong>+91 9875139782 /+91 0101010101
              </p>
              <p>
                <strong>Time:</strong>Mon-Sat (9:00AM - 10:00PM)
              </p>
            </div>
            <div>
              <h4>
                <strong>Follow Us</strong>
              </h4>
            </div>
            <div>Icon</div>
          </div>
          <div class="footer-col-2 flex">
            <div class="footer-col-2-1 flex">
              <h4>
                <strong>About</strong>
              </h4>
              <a href="">About Us</a>
              <a href="">Delivery information</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Condition</a>
              <a href="">Contact us</a>
            </div>
            <div class="footer-col-2-2 flex">
              <h4>
                <strong>My Account</strong>
              </h4>
              <a href="">Sign In</a>
              <a href="">View Cart</a>
              <a href="">My Whishlist</a>
              <a href="">Track My Order</a>
              <a href="">Help</a>
            </div>
          </div>
          <div class="footer-col-3 flex">
            <h4>
              <strong>Install App</strong>
            </h4>
            <p>From App Store Or Google Play</p>
            <div>
              <button class="primary-btn">App Store</button>
              <button class="primary-btn">Google Play</button>
            </div>
            <p>Secured Payment</p>
            <div>Image(upi,debit-card)</div>
          </div>
        </div>
        <hr />
        <div class="copywrite padding-1">
          <div>
            <p class="p3-text"> Copyright ©2023. All Rights Reserved.</p>
          </div>
          <div>
            <p class="p3-text">
              <a href="">Term & Condition</a>
            </p>
            <p class="p3-text">
              <a href="">Privacy-Policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
