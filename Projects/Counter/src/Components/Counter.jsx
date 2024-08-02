import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  }

  return (
    <>
      <div className="container mt-5 text-center">
        <button type="button" className="btn btn-success" onClick={increment}>
          Increment
        </button>

        <button type="button" className="btn btn-secondary mx-5">
          {count}
        </button>

        <button type="button" className="btn btn-warning" onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
