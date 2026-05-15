import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1rem",
        borderBottom: "1px solid #e4e4e7",
        background: "#fafafa",
      }}
    >
      <Link to="/" style={{ fontWeight: 700, color: "#18181b", textDecoration: "none" }}>
        React Learn
      </Link>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/" end style={navStyle}>
          Topics
        </NavLink>
        <NavLink to="/topics/use-reducer" style={navStyle}>
          useReducer
        </NavLink>
      </nav>
    </header>
  );
}

function navStyle({ isActive }) {
  return {
    color: isActive ? "#18181b" : "#52525b",
    fontWeight: isActive ? 600 : 500,
    textDecoration: "none",
    fontSize: "0.9rem",
  };
}

export default Navbar;
