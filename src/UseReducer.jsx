import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showText: state.showText };
    case "toggleShowText":
      return { counter: state.counter, showText: !state.showText };
      default:
        return state
  }
}

function UseReducer() {
  // const [counter, setCounter] = useState(0)
  // const [showText, setShowText] = useState(true)
  const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });
  return (
    <div>
      <h1>{state.counter}</h1>
      <button
        onClick={() => {
            dispatch({ type: "INCREMENT"})
            dispatch({ type: "toggleShowText"})
        }}
      >
        Update State
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default UseReducer;
