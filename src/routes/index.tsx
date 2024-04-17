import { createBrowserRouter } from "react-router-dom";

import { CompanyPage } from "../pages/CompanyPage/Index";
import { ErrorPage } from "../pages/ErrorPage/Index";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

// Página de testes de componentes
// import { TestComponentPage } from "../pages/TESTES";
import { FormularioFeedback } from "../components/FeedbackForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Empresa/:id",
        element: <CompanyPage />,
        errorElement: <ErrorPage />,
    },

    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Testes",
        element: <TestComponentPage />,
        errorElement: <ErrorPage />,
    },
])