// import React, { useState } from "react";

// function App() {
//   const [tog, setTog] = useState("block");

//   return (
//     <>
//       <div className="w-25 container">
//         <button
//           className="my-5 animation"
//           onClick={() => {
//             setTog(tog === "block" ? "none" : "block");
//           }}
//         >
//           Toggle Button
//         </button>

//         <p
//           className=" border border-3 border-black rounded-3 p-3 "
//           style={{ display: tog  }}
//         >
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
//           fuga ut voluptatibus, ipsam nobis magni reiciendis recusandae ullam
//           aliquam mollitia autem obcaecati ipsa reprehenderit sequi! Vero
//           incidunt saepe dolorum animi!
//         </p>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react'

// function App() {

//   const [color , setColor] = useState("");

//   return (
//     <>
//       <div style={{backgroundColor:color , height :"50vh"}}>
//         <button onClick={()=>{setColor("red")}}>Red</button>
//         <button onClick={()=>{setColor("green")}}>Green</button>
//         <button onClick={()=>{setColor("blue")}}>Blue</button>
//         <button onClick={()=>{setColor("yellow")}}>Yellow</button>
//       </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);

//   let fun = () => {
//     if(count>0){
//       setCount(count-1);
//     }
//   };

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={()=>{setCount(count+1)}} className="bg-success text-white me-3">
//         Increase
//       </button>
//       <button onClick={fun} className="bg-danger text-white ms-3">
//         Decrease
//       </button>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <form action="" className="container mt-5">
        <input
          type="text"
          placeholder="Enter the Name"
          className="w-50"
          style={{ textTransform: text }}
        />
        <br />
        <button
          type="button"
          className="bg-success text-white mt-4"
          onClick={() => {
            setText("");
          }}
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-info text-white mt-4 mx-5"
          onClick={() => {
            setText("uppercase");
          }}
        >
          Upper Case
        </button>
        <button
          type="button"
          className="bg-dark text-white mt-4"
          onClick={() => {
            setText("lowercase");
          }}
        >
          Lower Case
        </button>
      </form>
      <h2 className="container mt-5">hello</h2>
    </>
  );
}

export default App;
