import { useState } from "react";
import Gallery from "./Component/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Gallery />
    </>
  );
}

export default App;
