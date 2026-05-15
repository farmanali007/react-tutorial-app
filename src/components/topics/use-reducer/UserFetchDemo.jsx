import { useEffect, useState } from "react";
import {
  useFetchReducer,
  fetchStart,
  fetchSuccess,
  fetchError,
  fetchReset,
} from "../../../hooks/useUserReducer.js";
import StateInspector from "./StateInspector.jsx";

function UserFetchDemo() {
  const [fetchState, dispatch] = useFetchReducer();
  const [userId, setUserId] = useState("1");
  const [loadTrigger, setLoadTrigger] = useState(0);

  useEffect(() => {
    if (loadTrigger === 0) return;

    const id = userId.trim();
    if (!id) {
      dispatch(fetchError("Please enter a user id"));
      return;
    }

    dispatch(fetchStart());

    const controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("User not found");
        return response.json();
      })
      .then((data) => dispatch(fetchSuccess(data)))
      .catch((err) => {
        if (err.name !== "AbortError") {
          dispatch(fetchError(err.message));
        }
      });

    return () => controller.abort();
  }, [loadTrigger, userId, dispatch]);

  const handleLoad = () => setLoadTrigger((n) => n + 1);

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <label>
          User id{" "}
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ width: "4rem" }}
          />
        </label>
        <button type="button" onClick={handleLoad} disabled={fetchState.status === "loading"}>
          {fetchState.status === "loading" ? "Loading…" : "Load user"}
        </button>
        <button type="button" onClick={() => dispatch(fetchReset())}>
          Reset
        </button>
      </div>

      {fetchState.status === "success" && fetchState.data && (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={{ margin: "0 0 0.5rem" }}>{fetchState.data.name}</h4>
          <p style={{ margin: 0 }}>{fetchState.data.email}</p>
          <p style={{ margin: "0.25rem 0 0", color: "#52525b" }}>{fetchState.data.company?.name}</p>
        </div>
      )}

      {fetchState.status === "error" && (
        <p style={{ color: "#b91c1c", marginTop: "1rem" }}>{fetchState.error}</p>
      )}

      <StateInspector state={fetchState} />
    </div>
  );
}

export default UserFetchDemo;
