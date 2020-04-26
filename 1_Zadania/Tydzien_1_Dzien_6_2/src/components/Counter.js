import React from "react";
import store from "../redux/store";

const Counter = ({value, increment, decrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

export default Counter;
