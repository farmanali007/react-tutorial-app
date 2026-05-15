import { useReducer } from "react";
import StateInspector from "./StateInspector.jsx";

const ACTIONS = { INCREMENT: "INCREMENT", DECREMENT: "DECREMENT", RESET: "RESET" };

function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return 0;
    default:
      return state;
  }
}

function PatternCounterDemo() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p style={{ margin: "0 0 0.75rem" }}>
        Count: <strong>{count}</strong>
      </p>
      <button type="button" onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        +1
      </button>{" "}
      <button type="button" onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        -1
      </button>{" "}
      <button type="button" onClick={() => dispatch({ type: ACTIONS.RESET })}>
        Reset
      </button>
      <StateInspector state={{ count }} label="State (number)" />
    </div>
  );
}

export default PatternCounterDemo;
