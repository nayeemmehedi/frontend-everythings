// // src/components/PublicRoute.js
// import { Navigate } from "react-router-dom";

// const PublicRoute = ({ children }) => {
//   const isAuthenticated = false; // Replace with your auth logic

//   // If the user is authenticated, redirect to home or a private page
//   return isAuthenticated ? <Navigate to="/" /> : children;
// };

// export default PublicRoute;


// // src/components/PrivateRoute.js
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = true; // Replace with your auth logic

//   // If the user is not authenticated, redirect to login
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;


// // src/components/RoleBasedRoute.js
// import { Navigate } from "react-router-dom";

// const RoleBasedRoute = ({ children, allowedRoles }) => {
//   const user = {
//     isAuthenticated: true, // Replace with your auth logic
//     role: "admin" // Replace with your role logic
//   };

//   // If the user is not authenticated, redirect to login
//   if (!user.isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // If the user doesn't have the correct role, redirect to unauthorized
//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   // If the user is authenticated and has the correct role, allow access
//   return children;
// };

// export default RoleBasedRoute;


// <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
// <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
// <Route path="/admin" element={<RoleBasedRoute allowedRoles={['admin']}><AdminDashboard /></RoleBasedRoute>} />
// <Route path="/user" element={<RoleBasedRoute allowedRoles={['user']}><UserDashboard /></RoleBasedRoute>} />
