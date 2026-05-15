import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2 style={{ margin: "0 0 0.5rem" }}>Page not found</h2>
      <p style={{ margin: 0 }}>
        <Link to="/">← Back to topics</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
