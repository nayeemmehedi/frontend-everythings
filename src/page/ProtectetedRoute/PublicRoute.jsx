// 2. Public Route 

import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
