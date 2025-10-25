import { Navigate, Outlet } from "react-router";

const RequireAuth = () => {
  // Example: localStorage se token check kar rahe hain
  const isAuthenticated = !!localStorage.getItem("userId");

  return isAuthenticated ? <Outlet /> : <Navigate to="/user/login" replace />;
};

export default RequireAuth;
