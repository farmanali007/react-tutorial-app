import { Link } from "react-router-dom";

function LessonShell({ title, children, nextTo, nextLabel = "Next lesson →" }) {
  return (
    <article>
      <h2 style={{ margin: "0 0 1rem" }}>{title}</h2>
      {children}
      {nextTo && (
        <p style={{ marginTop: "1.5rem" }}>
          <Link to={nextTo}>{nextLabel}</Link>
        </p>
      )}
    </article>
  );
}

export function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "1.25rem" }}>
      <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{title}</h3>
      {children}
    </section>
  );
}

export function Callout({ title, children, variant = "info" }) {
  const bg = variant === "warning" ? "#fef3c7" : variant === "advanced" ? "#ede9fe" : "#e0f2fe";
  return (
    <aside
      style={{
        margin: "1rem 0",
        padding: "0.75rem 1rem",
        background: bg,
        borderRadius: "6px",
        fontSize: "0.9rem",
      }}
    >
      {title && <strong style={{ display: "block", marginBottom: "0.35rem" }}>{title}</strong>}
      {children}
    </aside>
  );
}

export default LessonShell;
