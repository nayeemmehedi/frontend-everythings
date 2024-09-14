import { Routes, Route } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import roleBasedRoutes from "./roleBasedRoutes";
import Unauthorized from "../pages/Unauthorized";

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    {publicRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}

    {/* Private Routes */}
    {privateRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}

    {/* Role-Based Routes */}
    {roleBasedRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}

    {/* Unauthorized Route */}
    <Route path="/unauthorized" element={<Unauthorized />} />
  </Routes>
);

export default AppRoutes;
