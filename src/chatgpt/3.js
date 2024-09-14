// 3. Role-Based Route 

import { Navigate } from "react-router-dom";
import { useAuth } from "./auth"; // Custom hook for auth and roles

const RoleBasedRoute = ({ allowedRoles, children }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return allowedRoles.includes(userRole) ? (
    children
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default RoleBasedRoute;
