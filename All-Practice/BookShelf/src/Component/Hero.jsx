import React from 'react'
import "../CSS-File/Hero.css"
import "../CSS-File/Common.css"
import HeroImg from "../Images/hero-png.png"

function Hero() {
  return (
    <section class="hero-section flex">
    <div class="container hero-content flex">
      <div class="hero-img">
        <img src={HeroImg} alt="image" width="100%"/>
      </div>
      <div class="hero-text flex">
        <p class="p2-text hero-text-head">BOOKstore</p>
        <h1>So many Books, so little Time </h1>
        <p class="p2-text hero-text-dis"><span>READ...</span> so you never feel alone <br/><br/> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur beatae totam nemo.</p>
        <button href="#">
          Get Started
        </button>
      </div>
    </div>
  </section>
  )
}

export default Hero
