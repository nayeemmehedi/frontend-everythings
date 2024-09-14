// 1. Private Route

import { Navigate } from "react-router-dom";
import { useAuth } from "./auth"; // Custom hook for auth status

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
