import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../layouts/Main_layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [],
  },
]);
