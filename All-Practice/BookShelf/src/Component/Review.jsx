import React from "react";
import "../CSS-File/Review.css";
import "../CSS-File/Common.css";
import MyImg from "../Images/myphoto.jpg";

function Review() {
  return (
    <div class="reviews-container">
      <div class="container">
        <div class="book-div-heading ">
          <h1>What our customer said</h1>
        </div>
      </div>
      <div class="review-row flex">
        <div class="review-column">
          <div class="review-img">
            <img src={MyImg} alt="image" />
          </div>
          <div>
            <div class="review-text">
              <p class="p2-text">
                dolor sit amet consectetur adipisicing elit. Architecto itaque
                debitis minima porro assumenda atque dolor distinctio
                perspiciatis omnis sequi ipsa unde fugit, ipsum, tenetur quidem
                molestias autem in vero, earum dolores dolorem? Ipsum, officiis.
              </p>
              <div>
                <p class="p2-text cust-name">
                  <span>Gaurang</span> lorem lorem{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="review-column">
          <div class="review-img">
            <img src={MyImg} alt="image" />
          </div>
          <div>
            <div class="review-text">
              <p class="p2-text">
                ipsum dolor sit amet consectetur adipisicing elit. Architecto
                itaque debitis minima porro assumenda atque dolor distinctio
                perspiciatis omnis sequi ipsa unde fugit, ipsum, tenetur quidem
                molestias autem in vero, earum dolores dolorem? Ipsum, officiis.
              </p>
              <div>
                <p class="p2-text cust-name">
                  <span>Gaurang</span> lorem lorem{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="review-column">
          <div class="review-img">
            <img src={MyImg} alt="image" />
          </div>
          <div>
            <div class="review-text">
              <p class="p2-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto itaque debitis minima porro assumenda atque dolor
                distinctio perspiciatis omnis sequi ipsa unde fugit, ipsum,
                tenetur quidem molestias autem in vero, earum dolores dolorem?
                Ipsum, officiis.
              </p>
              <div>
                <p class="p2-text cust-name">
                  <span>Gaurang</span> lorem lorem{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
