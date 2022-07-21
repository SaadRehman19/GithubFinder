import React, { useReducer } from "react";

const UseReducerPractise = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(state, action);

    if (action.type === "INC") {
      return state + 1;
    } else {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p> {state} </p>{" "}
      <button onClick={() => dispatch({ type: "INC" })}> Inc </button>{" "}
      <button onClick={() => dispatch({ type: "DEC" })}> Dec </button>{" "}
    </div>
  );
};

export default UseReducerPractise;
