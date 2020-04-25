import React from "react";

const Counter = ({value, increment, decrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

export default Counter;
