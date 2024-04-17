import { createBrowserRouter } from "react-router-dom";

import { CompanyPage } from "../pages/CompanyPage/Index";
import { ErrorPage } from "../pages/ErrorPage/Index";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home/Empresa/:id",
        element: <CompanyPage />,
        errorElement: <ErrorPage />,
    }
])