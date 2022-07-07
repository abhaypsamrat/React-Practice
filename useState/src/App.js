import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h3>Welcome to counter App</h3>
      <p>Count is : {count}</p>
      <button onClick={decrementCount} style={{ margin: "5px" }}>
        -
      </button>

      <button onClick={incrementCount}>+</button>
    </div>
  );
}
export default App;
