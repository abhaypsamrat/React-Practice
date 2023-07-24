import React from "react";

export default function App() {
  function handleClick() {
    alert("You clicked handleClick function");
  }

  return (
    <div>
      <p>This is React Events</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}