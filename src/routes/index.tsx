import { createBrowserRouter } from "react-router-dom";

import { CompanyPage } from "../pages/CompanyPage/Index";
import { ErrorPage } from "../pages/ErrorPage/Index";
import { HomePage } from "../pages/HomePage";

// Página de testes de componentes
import { TestComponentPage } from "../pages/TESTES";

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
        path: "/Testes",
        element: <TestComponentPage />,
        errorElement: <ErrorPage />,
    },
])