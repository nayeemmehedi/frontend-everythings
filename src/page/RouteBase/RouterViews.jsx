// import PrivateRoute from "../components/PrivateRoute";
import Child1 from "../PrivatePage/Child1";
import Child2 from "../PrivatePage/Child2";
import Company from "../PrivatePage/Company";
import RoleBasedRoute from "../ProtectetedRoute/RoleBasedRoute";
import Home from "../PublicPage/Home";
import Login from "../PublicPage/Login";
import SignUp from "../PublicPage/SignUp";



export const publicRoutes = [
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/signup",
    element:<SignUp />
  }
];


// export const privateRoutes = [
//   {
//     path: "/",
//     element: <PrivateRoute><Home /></PrivateRoute>
//   }
// ];

export const roleBasedRoutes = [
  {
    path: "/company",
    element: (
      <RoleBasedRoute allowedRoles={['company']}>
        <Company /> {/* Parent component */}
      </RoleBasedRoute>
    ),
    children: [
      
      { path: "baby1", element: <Child1 /> },  // Define baby1 as a child route
      { path: "baby2", element: <Child2 /> },  // Define baby2 as a child route
    ],
  },
];

