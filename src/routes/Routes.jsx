import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../layouts/Main_layout";
import Dashboard_layout from "../layouts/Dashboard_layout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard_layout />,
    // children: [
    //   {
    //     path: "buyer",
    //     element: (
    //       <PrivateRoute allowedRoles={["buyer"]}>
    //         <BuyerDashboard />
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: "seller",
    //     element: (
    //       <PrivateRoute allowedRoles={["seller"]}>
    //         <SellerDashboard />
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: "admin",
    //     element: (
    //       <PrivateRoute allowedRoles={["admin"]}>
    //         <AdminDashboard />
    //       </PrivateRoute>
    //     ),
    //   },
    // ],
  },
]);
