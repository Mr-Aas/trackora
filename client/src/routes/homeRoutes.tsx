import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
// import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
// import { Home } from "lucide-react";

const HomeRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/todos",
                element: < Todos />
            },
        ]
    },


]
)
export default HomeRoutes;