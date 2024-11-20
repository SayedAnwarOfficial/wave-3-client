import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../layouts/Main_layout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
        { path: "/", element: <Home /> },
    ],
  },
]);
