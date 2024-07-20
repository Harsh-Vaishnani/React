import React from "react";
import "../CSS-File/MyOffer.css";
import "../CSS-File/Common.css";

function Offer() {
  return (
    <section class="offer">
      <div class="offer-container container padding-1 flex">
        <div class="row-1 flex">
          <div class="offer-banner-1">
            <h3>carzy deal</h3>
            <h2>Buy 1 Get 1 free </h2>
            <p class="p3-text"> on any educational book</p>
            <button class="secondary-btn">Learn More</button>
          </div>
          <div class="offer-banner-2">
            <h3>carzy deal</h3>
            <h2>Get Full pack </h2>
            <p class="p3-text"> purchase any series of book at 40% off</p>
            <button class="secondary-btn">Get the deal</button>
          </div>
        </div>
        <div class="row-2 flex">
          <div class="offer-banner-3">
            <h3>carzy deal</h3>
            <h2>seasonal offer </h2>
            <p class="p3-text"> upto 50% off</p>
          </div>
          <div class="offer-banner-4">
            <h3>carzy deal</h3>
            <h2>New arrivals</h2>
            <p class="p3-text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
            </p>
            <button class="secondary-btn">Explore</button>
          </div>
          <div class="offer-banner-5">
            <h3>Wait end</h3>
            <h2>upcoming Book </h2>
            <p class="p3-text"> Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
