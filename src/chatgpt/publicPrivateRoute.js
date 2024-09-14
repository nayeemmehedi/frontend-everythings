import Login from "../pages/Login";
import PublicRoute from "../components/PublicRoute";

export const publicRoutes = [
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>
  }
];

 

import Home from "../pages/Home";
import PrivateRoute from "../components/PrivateRoute";

export const privateRoutes = [
  {
    path: "/",
    element: <PrivateRoute><Home /></PrivateRoute>
  }
];



import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import RoleBasedRoute from "../components/RoleBasedRoute";

export const roleBasedRoutes = [
  {
    path: "/admin",
    element: <RoleBasedRoute allowedRoles={['admin']}><AdminDashboard /></RoleBasedRoute>
  },
  {
    path: "/user",
    element: <RoleBasedRoute allowedRoles={['user']}><UserDashboard /></RoleBasedRoute>
  }
];



