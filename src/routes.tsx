import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import ErrorsPage from "./pages/ErrorsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement : <ErrorsPage />,
        children: [
            {
                index : true,
                element: <HomePage />
            },
            {
                path: 'games/:id',
                element: <GameDetails />
            }
        ]
    }
])

export default router;