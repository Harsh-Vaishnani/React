import React from "react";
import "../CSS-File/Offer.css"
import "../CSS-File/Common.css"
import bunch2 from "../Images/bunch2.jpg"
import bunch1 from "../Images/bunch1.avif"
import books from "../Images/books.jpg"

function offer() {
  return (
    <section>
      <div class="offer-section container padding-1  flex ">
        <div class="offer-section-img">
          <img src={bunch2} alt="book-img" class="offer-s-i-1" />
          <img src={bunch1} alt="book-img" class="offer-s-i-2" />
          <img src={books} alt="book-img" class="offer-s-i-3" />
        </div>
        <div class="offer-dis flex">
          <p class="p2-text">Best Deal</p>
          <h2>
            {" "}
            <strong> Get </strong>{" "}
          </h2>
          <h2>
            <strong> Dozen of Book </strong>
          </h2>
          <p class="p-text">At just 1499 rs.</p>
          <a href="#" class="primary-btn">
            claim
          </a>
        </div>
      </div>
    </section>
  );
}

export default offer;
