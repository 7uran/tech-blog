import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './featured/layout';
import HomePage from './pages/home';
import GadgetsPage from './pages/gadgets';
import ErrorBoundary from './featured/errorBoundary';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/gadgets",
                element: <GadgetsPage />
            },
            {
                index: true,
                element: <Navigate to="/home" replace />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorBoundary />
    }
]);

export default router;
