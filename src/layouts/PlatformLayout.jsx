import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";

function PlatformLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem", maxWidth: "960px", margin: "0 auto" }}>
        <Outlet />
      </main>
    </>
  );
}

export default PlatformLayout;
