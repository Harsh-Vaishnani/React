import { useState } from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
