import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./Components/ToDo";
import Preview from "./Components/Preview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/cart" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
