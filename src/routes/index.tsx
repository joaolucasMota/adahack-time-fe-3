import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/Index";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
])