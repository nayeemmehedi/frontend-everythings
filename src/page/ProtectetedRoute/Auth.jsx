// 5. Auth Hook (Example)

import { useState } from "react";

function checkAccess() {
  let access = localStorage.getItem("accessToken");
  if (access) {
    return true;
  } else {
    return false;
  }
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAccess);
  // Replace with actual authentication logic

  // This should come from your auth state
  const userRole = "company"; // This should come from your auth provider

  return { isAuthenticated, userRole };
};
