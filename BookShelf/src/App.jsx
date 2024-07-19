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
    </>
  );
}

export default App;
