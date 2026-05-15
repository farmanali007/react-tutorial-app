import { NavLink, Outlet, Link } from "react-router-dom";
import { getTopic } from "../config/topics.js";

function TopicLayout({ topicId }) {
  const topic = getTopic(topicId);

  if (!topic) {
    return <p>Topic not found.</p>;
  }

  if (topic.status !== "available") {
    return (
      <div>
        <p>
          <Link to="/">← All topics</Link>
        </p>
        <h2>{topic.title}</h2>
        <p style={{ color: "#71717a" }}>This topic is coming soon.</p>
      </div>
    );
  }

  return (
    <div>
      <p style={{ margin: "0 0 1rem" }}>
        <Link to="/" style={{ color: "#52525b", textDecoration: "none", fontSize: "0.875rem" }}>
          ← All topics
        </Link>
      </p>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
        <aside
          style={{
            minWidth: "11rem",
            padding: "1rem",
            background: "#f4f4f5",
            borderRadius: "8px",
            position: "sticky",
            top: "1rem",
          }}
        >
          <p style={{ margin: "0 0 0.25rem", fontWeight: 600 }}>{topic.title}</p>
          <p style={{ margin: "0 0 0.75rem", fontSize: "0.75rem", color: "#71717a" }}>
            {topic.tagline}
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {topic.lessons.map((lesson) => (
              <NavLink
                key={lesson.path || "index"}
                to={lesson.path ? `${topic.basePath}/${lesson.path}` : topic.basePath}
                end={lesson.path === ""}
                style={linkStyle}
              >
                {lesson.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <section
          style={{
            flex: 1,
            minWidth: 0,
            padding: "1rem 1.25rem",
            border: "1px solid #e4e4e7",
            borderRadius: "8px",
            background: "#fff",
          }}
        >
          <Outlet />
        </section>
      </div>
    </div>
  );
}

function linkStyle({ isActive }) {
  return {
    color: isActive ? "#18181b" : "#3f3f46",
    fontWeight: isActive ? 600 : 400,
    textDecoration: "none",
    fontSize: "0.9rem",
  };
}

export default TopicLayout;
