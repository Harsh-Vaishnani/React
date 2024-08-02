import React from "react";
import "../CSS-File/BookSection.css";
import "../CSS-File/Common.css";
import book1 from "../Images/book1.jpg"
import book3 from "../Images/book3.jpg" 
import book3a from "../Images/book3-1.jpg"  


function BookSection() {
  return (
    <section class="all-time-book-section">
      <div class="container padding-2 all-time-best">
        <div class="book-div-heading ">
          <h1>All time best </h1>
        </div>
        <div class="b-c-container flex">
          <div class="book-card-c-text flex">
            <h1>most popular at one place</h1>
            <p class="p2-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              consequuntur veritatis et adipisci beatae dolore id?
            </p>
            <button class="secondary-btn">Explore</button>
          </div>
          <div class="book-card-c-items book-card-container flex">
            <div class="book-card">
              <div class="book-img flex">
                <img src={book1} alt="book" />
              </div>
              <div class="book-disc flex">
                <div class="book-name">
                  <h3>The Alchemist</h3>
                </div>
                <div class="book-author">
                  <p class="p2-text">paulo coelho</p>
                </div>
                <div class="book-price"> 299</div>
                <div>
                  <a
                    href="#"
                    class="secondary-btn"
                    onclick="addtocart('book1.jpg', 'The Alchemist', 'paulo coelho', 299)"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="book-card">
              <div class="book-img flex">
                <img src={book3} alt="book" />
              </div>
              <div class="book-disc flex">
                <div class="book-name">
                  <h3>Aeklo Jane Re</h3>
                </div>
                <div class="book-author">
                  <p class="p2-text">Dr. Sarad Thakar</p>
                </div>
                <div class="book-price"> 299</div>
                <div>
                  <a
                    href="#"
                    class="secondary-btn"
                    onclick="addtocart('book3.jpg', 'Aeklo Jane Re', 'Dr. Sarad Thakar', 299)"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="book-card">
              <div class="book-img flex">
                <img src={book3a} alt="book" />
              </div>
              <div class="book-disc flex">
                <div class="book-name">
                  <h3>Agartha Ni safare</h3>
                </div>
                <div class="book-author">
                  <p class="p2-text">Dr. I K vijaliwala</p>
                </div>
                <div class="book-price "> 299</div>
                <div>
                  <a
                    href="#"
                    class="secondary-btn"
                    onclick="addtocart('book3-1.jpg', 'Agartha Ni safare', 'Dr. I K vijaliwala', 299)"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookSection;
