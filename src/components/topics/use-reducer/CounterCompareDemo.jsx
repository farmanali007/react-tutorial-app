import { useReducer, useState } from "react";

const COUNTER_ACTIONS = { INCREMENT: "INCREMENT", DECREMENT: "DECREMENT" };

function counterReducer(state, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return state + 1;
    case COUNTER_ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

function CounterCompareDemo() {
  const [countState, setCountState] = useState(0);
  const [countReducer, dispatch] = useReducer(counterReducer, 0);

  const boxStyle = {
    flex: 1,
    padding: "1rem",
    border: "1px solid #d4d4d8",
    borderRadius: "8px",
    background: "#fafafa",
  };

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <div style={boxStyle}>
        <h4 style={{ margin: "0 0 0.75rem" }}>useState</h4>
        <p style={{ margin: "0 0 0.75rem" }}>
          Count: <strong>{countState}</strong>
        </p>
        <button type="button" onClick={() => setCountState(countState + 1)}>
          Increment
        </button>{" "}
        <button type="button" onClick={() => setCountState(countState - 1)}>
          Decrement
        </button>
      </div>

      <div style={boxStyle}>
        <h4 style={{ margin: "0 0 0.75rem" }}>useReducer</h4>
        <p style={{ margin: "0 0 0.75rem" }}>
          Count: <strong>{countReducer}</strong>
        </p>
        <button type="button" onClick={() => dispatch({ type: COUNTER_ACTIONS.INCREMENT })}>
          Increment
        </button>{" "}
        <button type="button" onClick={() => dispatch({ type: COUNTER_ACTIONS.DECREMENT })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterCompareDemo;
