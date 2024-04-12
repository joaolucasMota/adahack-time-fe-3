import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />,
  },
])