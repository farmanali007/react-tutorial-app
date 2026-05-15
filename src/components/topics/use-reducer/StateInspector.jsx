function StateInspector({ state, label = "Current state" }) {
  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "0.75rem",
        background: "#f4f4f5",
        borderRadius: "6px",
        fontSize: "0.8rem",
      }}
    >
      <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "#3f3f46" }}>{label}</p>
      <pre
        style={{
          margin: 0,
          overflow: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          color: "#18181b",
        }}
      >
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default StateInspector;
