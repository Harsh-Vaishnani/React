import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import BestSelling from "./Component/BestSelling";
import OfferSection from "./Component/OfferSection";
import BookSection from "./Component/BookSection";
import Review from "./Component/Review";
import Offer from "./Component/Offer";
import Footer from "./Component/Footer"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <BestSelling />
      <OfferSection/>
      <BookSection/>
      <Review/>
      <Offer/>
      
      <Footer/>
    </>
  );
}

export default App;
