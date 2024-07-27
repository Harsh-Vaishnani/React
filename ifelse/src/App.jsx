
import React from "react";

import ReactDOM from "react-dom";
import Conditional from "./Component/Conditional";
import Cards from "./Component/Cards";

function App() {
  const handleInputChange = (e) => {
    const mark = e.target.value;
    ReactDOM.render(
      <Conditional marks={mark} />,
      document.getElementById("conditionalComponent")
    );
  };

  return (
    <div>
      <h1>Enter your marks:</h1>
      <input
        type="number"
        onChange={(e) => {
          handleInputChange(e);
        }}
        placeholder="Enter marks"
      />
      <div id="conditionalComponent"></div>
      <Cards/>
    </div>
  
  );
}

export default App;
