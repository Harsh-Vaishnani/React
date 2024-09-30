import React, { useState } from "react";

function App() {
  const [tog, setTog] = useState("block");

  // const handleToggle = () => {
  //   if (tog === "block") {
  //     setTog("none");
  //   } else {
  //     setTog("block");
  //   }
  // };

  return (
    <>
      <div>
        {/* <button onClick={handleToggle}>Toggle Button</button> */}
        <button
          onClick={() => {
            setTog(tog === "block" ? "none" : "block");
          }}
        >
          Toggle Button
        </button>
        <p
          className="w-50 bg-success-subtle text-center"
          style={{ display: tog }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          inventore aspernatur ea maxime et excepturi sint deleniti esse nemo
          aut fugiat iure, id ab officiis dolorum, perferendis rerum, delectus
          fuga?
        </p>
      </div>
    </>
  );
}

export default App;
