import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </HelmetProvider>
);