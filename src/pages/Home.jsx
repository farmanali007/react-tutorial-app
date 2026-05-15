import { Link } from "react-router-dom";
import { topics } from "../config/topics.js";

function Home() {
  return (
    <div>
      <h1 style={{ margin: "0 0 0.5rem", fontSize: "1.75rem" }}>React Learning Platform</h1>
      <p style={{ margin: "0 0 2rem", color: "#52525b", maxWidth: "36rem" }}>
        Hands-on lessons with live demos and comparative studies. Pick a topic below — each
        lesson lets you practice in the browser while you read.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1rem",
        }}
      >
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}

function TopicCard({ topic }) {
  const isAvailable = topic.status === "available";

  const cardStyle = {
    display: "block",
    padding: "1.25rem",
    border: "1px solid #e4e4e7",
    borderRadius: "8px",
    textDecoration: "none",
    color: "inherit",
    background: isAvailable ? "#fff" : "#fafafa",
    opacity: isAvailable ? 1 : 0.85,
    pointerEvents: isAvailable ? "auto" : "none",
  };

  const inner = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h2 style={{ margin: 0, fontSize: "1.125rem" }}>{topic.title}</h2>
        <span
          style={{
            fontSize: "0.7rem",
            padding: "0.15rem 0.5rem",
            borderRadius: "4px",
            background: isAvailable ? "#dcfce7" : "#f4f4f5",
            color: isAvailable ? "#166534" : "#71717a",
          }}
        >
          {isAvailable ? "Available" : "Soon"}
        </span>
      </div>
      <p style={{ margin: "0.5rem 0 0", fontSize: "0.875rem", color: "#52525b" }}>
        {topic.tagline}
      </p>
      {isAvailable && (
        <p style={{ margin: "0.75rem 0 0", fontSize: "0.8rem", color: "#3b82f6" }}>
          {topic.lessons.length} lessons →
        </p>
      )}
    </>
  );

  if (isAvailable) {
    return (
      <Link to={topic.basePath} style={cardStyle}>
        {inner}
      </Link>
    );
  }

  return <div style={cardStyle}>{inner}</div>;
}

export default Home;
