import React from 'react'
import "../CSS-File/Feature.css"
import "../CSS-File/Common.css"
import Feature2 from "../Images/feature2.png"
import Feature5 from "../Images/feature5.png"
import Feature6 from "../Images/feature6.png"

function Feature() {
  return (
    <section class="feature-section container">
    <div class="feature-content flex padding-1">
      <div class="feature-item flex">
        <div class="feature-item-text">
          <h4> <strong>Free Delivery</strong></h4>
          <p class="p3-text">over 300rs cart value <br/>all over india </p>
        </div>
        <div class="feature-img">
          <img src={Feature2} alt="png"/>
        </div>
      </div>
      <div class="feature-item flex">
        <div class="feature-item-text">
          <h4> <strong>Secured Payment</strong></h4>
          <p class="p3-text">your money is secured prefer card payment </p>
        </div>
        <div class="feature-img">
          <img src={Feature5} alt="png"/>
        </div>
      </div>
      <div class="feature-item flex">
        <div class="feature-item-text">
          <h4> <strong>24 haur Support</strong></h4>
          <p class="p3-text">Our team is always with you to support 24 haur </p>
        </div>
        <div class="feature-img">
          <img src={Feature6} alt="png"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Feature
