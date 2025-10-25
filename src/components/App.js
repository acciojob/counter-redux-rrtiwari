import "./../styles/App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button id="increment-btn" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button id="decrement-btn" onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  );
};

export default App;
