import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import store from "./redux/features/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </HelmetProvider>
);
