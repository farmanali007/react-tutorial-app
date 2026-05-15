import { useState } from "react";
import { useAuthReducer, login, logout, setAuthError } from "../../../hooks/useUserReducer.js";
import StateInspector from "./StateInspector.jsx";

const FAKE_USER = { username: "demo", password: "react123" };

function UserAuthDemo() {
  const [auth, dispatch] = useAuthReducer();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === FAKE_USER.username && password === FAKE_USER.password) {
      dispatch(login(username));
      setPassword("");
    } else {
      dispatch(setAuthError("Invalid username or password. Try demo / react123"));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setUsername("");
    setPassword("");
  };

  if (auth.isLoggedIn) {
    return (
      <div>
        <p>
          Welcome, <strong>{auth.userName}</strong>!
        </p>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
        <StateInspector state={auth} />
      </div>
    );
  }

  return (
    <div>
      <p style={{ margin: "0 0 0.75rem", color: "#52525b", fontSize: "0.875rem" }}>
        Demo credentials: <code>demo</code> / <code>react123</code>
      </p>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "320px" }}
      >
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
          />
        </label>
        {auth.error && <p style={{ color: "#b91c1c", margin: 0 }}>{auth.error}</p>}
        <button type="submit">Log in</button>
      </form>
      <StateInspector state={auth} />
    </div>
  );
}

export default UserAuthDemo;
