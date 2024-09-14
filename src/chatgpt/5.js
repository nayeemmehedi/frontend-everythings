// 5. Auth Hook (Example) 

export const useAuth = () => {
    // Replace with actual authentication logic
    const isAuthenticated = true; // This should come from your auth state
    const userRole = "admin"; // This should come from your auth provider
  
    return { isAuthenticated, userRole };
  };
  