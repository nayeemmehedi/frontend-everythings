// {/* Role-Based Routes */}
// {roleBasedRoutes.map((route, index) => (
//     <Route key={index} path={route.path} element={route.element}>
//       {/* Child Routes */}
//       {route.children?.map((childRoute, childIndex) => (
//         <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
//       ))}
//     </Route>


// import Dashboard from "../pages/Dashboard";
// import Settings from "../pages/Dashboard/Settings";
// import Reports from "../pages/Dashboard/Reports";
// import Overview from "../pages/Dashboard/Overview";

// export const roleBasedRoutes = [
//   {
//     path: "/dashboard",
//     element: <Dashboard />,  // Parent route
//     children: [
//       { path: "overview", element: <Overview /> },  // Child route
//       { path: "settings", element: <Settings /> },  // Child route
//       { path: "reports", element: <Reports /> },    // Child route
//     ],
//   },
// ];
