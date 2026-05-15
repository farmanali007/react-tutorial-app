import { lazy, Suspense } from "react";

const HighlightedCode = lazy(() => import("./HighlightedCode.jsx"));

function inferLanguage(filename) {
  if (!filename) return "jsx";
  if (filename.endsWith(".jsx")) return "jsx";
  if (filename.endsWith(".ts") || filename.endsWith(".tsx")) return "typescript";
  if (filename.endsWith(".json")) return "json";
  if (filename.endsWith(".css")) return "css";
  return "javascript";
}

function CodeFallback({ code }) {
  return (
    <pre
      style={{
        margin: 0,
        padding: "1rem 1.125rem",
        background: "#1e1e1e",
        color: "#d4d4d4",
        fontSize: "0.8125rem",
        lineHeight: 1.6,
        overflow: "auto",
      }}
    >
      <code>{code}</code>
    </pre>
  );
}

function CodeSnippet({ title, filename, language, children, caption }) {
  const code = String(children).trim();
  const lang = language ?? inferLanguage(filename);

  return (
    <figure style={{ margin: "0 0 1.25rem" }}>
      {title && (
        <p
          style={{
            margin: "0 0 0.5rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#3f3f46",
          }}
        >
          {title}
        </p>
      )}

      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #2d2d2d",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 0.75rem",
            background: "#252526",
            borderBottom: "1px solid #1e1e1e",
          }}
        >
          <span style={{ display: "flex", gap: "0.35rem" }} aria-hidden>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          </span>
          {filename && (
            <span
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "0.75rem",
                color: "#cccccc",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {filename}
            </span>
          )}
          <span
            style={{
              fontSize: "0.65rem",
              color: "#858585",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {lang}
          </span>
        </div>

        <Suspense fallback={<CodeFallback code={code} />}>
          <HighlightedCode code={code} language={lang} />
        </Suspense>
      </div>

      {caption && (
        <figcaption style={{ margin: "0.4rem 0 0", fontSize: "0.8rem", color: "#71717a" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Wraps a live demo with a clear label so learners know what to interact with. */
export function DemoBlock({ title = "Try it yourself", hint, children }) {
  return (
    <div
      style={{
        margin: "1rem 0",
        padding: "1rem",
        border: "2px dashed #a1a1aa",
        borderRadius: "8px",
        background: "#fafafa",
      }}
    >
      <p
        style={{
          margin: "0 0 0.75rem",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#3b82f6",
        }}
      >
        {title}
      </p>
      {hint && (
        <p style={{ margin: "0 0 0.75rem", fontSize: "0.875rem", color: "#52525b" }}>{hint}</p>
      )}
      {children}
    </div>
  );
}

export default CodeSnippet;
