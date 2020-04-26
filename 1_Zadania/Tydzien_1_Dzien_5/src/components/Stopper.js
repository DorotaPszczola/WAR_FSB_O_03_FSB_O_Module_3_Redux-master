import React from "react";
import withTimer from "../hoc/withTimer.js"

// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania

const Stopper = ({ counter, startTimer, stopTimer, children }) => (
  <div>
    <button onClick={startTimer}>start</button>
    <button onClick={stopTimer}>stop</button>
    <p>{counter}</p>
    {children}
  </div>
);

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer


const StopperWithTimer = withTimer(Stopper)

export {
  Stopper,
  StopperWithTimer
}
