import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
// import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Logs from "../pages/Logs";
import ManageTasks from "../pages/ManageTasks";
import Settings from "../pages/settings";

const HomeRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/todos",
                element: < Todos />
            },
            {
                path: "/logs",
                element: < Logs />
            },
            {
                path: "/settings",
                element: < Settings />
            },

        ]
    },
    {
        path: "/manageTasks",
        element: <ManageTasks />
    },



]
)
export default HomeRoutes;