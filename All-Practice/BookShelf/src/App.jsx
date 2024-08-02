import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import BestSelling from "./Component/BestSelling";
import OfferSection from "./Component/OfferSection";
import BookSection from "./Component/BookSection";
import Review from "./Component/Review";
import Offer from "./Component/Offer";
import Footer from "./Component/Footer";
import Login from "./Component/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Login/>
      <Hero />
      <Feature />
      <BestSelling />
      <OfferSection />
      <BookSection />
      <Review />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
