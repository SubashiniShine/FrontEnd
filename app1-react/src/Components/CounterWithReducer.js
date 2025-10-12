import React, { useReducer } from "react";

const CounterWithReducer = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 0;
      default:
        throw new Error("Action not found");
    }
  };
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default CounterWithReducer;
