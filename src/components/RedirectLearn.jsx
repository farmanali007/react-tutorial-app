import { Navigate, useLocation } from "react-router-dom";

/** Redirects legacy /learn/use-reducer/* URLs to /topics/use-reducer/* */
function RedirectLearn() {
  const { pathname } = useLocation();
  const next = pathname.replace(/^\/learn\/use-reducer/, "/topics/use-reducer");
  return <Navigate to={next} replace />;
}

export default RedirectLearn;
