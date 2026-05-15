/** Code snippets shown in useReducer lessons (matches live demos). */

export const introHook = `import { useReducer } from "react";

// reducer: (state, action) => newState
// initialState: starting value
const [state, dispatch] = useReducer(reducer, initialState);

// Send an action when something happens
dispatch({ type: "SOME_ACTION", payload: optionalData });`;

export const introUserState = `// Our tutorial state shape (userReducer)
const initialUserState = {
  profile: { name: "", email: "", role: "guest" },
  auth: { isLoggedIn: false, userName: null, error: null },
  fetch: { status: "idle", data: null, error: null },
};`;

export const compareUseState = `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
  <>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </>
  );
}`;

export const compareUseReducer = `import { useReducer } from "react";

const ACTIONS = { INCREMENT: "INCREMENT", DECREMENT: "DECREMENT" };

function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
  <>
    <p>Count: {count}</p>
    <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
      Increment
    </button>
    <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
      Decrement
    </button>
  </>
  );
}`;

export const patternReducer = `const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

// Pure function — no side effects inside
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;           // new value
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return 0;
    default:
      return state;               // unknown action → no change
  }
}`;

export const patternDispatch = `const [count, dispatch] = useReducer(counterReducer, 0);

// Action = plain object describing what happened
dispatch({ type: ACTIONS.INCREMENT });
dispatch({ type: ACTIONS.RESET });`;

export const formReducer = `// src/reducers/userReducer.js
case ACTION_TYPES.SET_FIELD:
  return {
    ...state,
    [action.payload.field]: action.payload.value,
  };

case ACTION_TYPES.RESET_PROFILE:
  return { ...initialProfileState };`;

export const formHook = `import { useProfileReducer, setField, resetProfile } from "../hooks/useUserReducer";

function UserForm() {
  const [profile, dispatch] = useProfileReducer();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField(name, value));
  };

  return (
    <input name="name" value={profile.name} onChange={handleChange} />
  );
}`;

export const formActionCreator = `// Action creator — returns the action object
export function setField(field, value) {
  return {
    type: ACTION_TYPES.SET_FIELD,
    payload: { field, value },
  };
}

// Usage
dispatch(setField("name", "Ada"));`;

export const authReducer = `case ACTION_TYPES.LOGIN:
  return {
    isLoggedIn: true,
    userName: action.payload.userName,
    error: null,
  };

case ACTION_TYPES.LOGOUT:
  return { ...initialAuthState };

case ACTION_TYPES.SET_AUTH_ERROR:
  return {
    ...state,
    error: action.payload,
    isLoggedIn: false,
    userName: null,
  };`;

export const authUsage = `const [auth, dispatch] = useAuthReducer();

// Component validates, then dispatches outcome
if (valid) {
  dispatch(login(username));
} else {
  dispatch(setAuthError("Invalid credentials"));
}

if (auth.isLoggedIn) {
  return <p>Welcome, {auth.userName}!</p>;
}`;

export const fetchReducer = `case ACTION_TYPES.FETCH_START:
  return { status: "loading", data: null, error: null };

case ACTION_TYPES.FETCH_SUCCESS:
  return { status: "success", data: action.payload, error: null };

case ACTION_TYPES.FETCH_ERROR:
  return { status: "error", data: null, error: action.payload };`;

export const fetchEffect = `useEffect(() => {
  dispatch(fetchStart());

  fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
    .then((res) => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((err) => dispatch(fetchError(err.message)));
}, [id]);`;
