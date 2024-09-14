import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import publicRoutes from "./publicRoutes";
// import privateRoutes from "./privateRoutes";
import Unauthorized from "./components/Unauthorized";
import { publicRoutes, roleBasedRoutes } from "./page/RouteBase/RouterViews";
import Navbar from "./page/PublicPage/Navbar";
import Child1 from "./page/PrivatePage/Child1";

const App = () => (
  <div>
    <Navbar></Navbar>
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {/* Private Routes */}
      {/* {privateRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))} */}

      {/* Role-Based Routes */}
      {roleBasedRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children?.map((childRoute, childIndex) => (
            <Route
              key={childIndex}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
        </Route>
      ))}

      {/* Unauthorized Route */}
      <Route path="/*" element={<Unauthorized />} />
    </Routes>
  </div>
);

export default App;
