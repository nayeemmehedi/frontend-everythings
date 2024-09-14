// 4. Using in Routes 

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import Home from "./Home";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

    {/* Private Routes */}
    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
    
    {/* Role-Based Routes */}
    <Route path="/admin" element={<RoleBasedRoute allowedRoles={['admin']}><AdminDashboard /></RoleBasedRoute>} />
    <Route path="/user" element={<RoleBasedRoute allowedRoles={['user']}><UserDashboard /></RoleBasedRoute>} />
    
    {/* Unauthorized Route */}
    <Route path="/unauthorized" element={<Unauthorized />} />
  </Routes>
);

export default AppRoutes;
