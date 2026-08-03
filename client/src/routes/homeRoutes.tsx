import { createBrowserRouter } from "react-router";
// import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Todos from "../pages/Todos";

const HomeRoutes = createBrowserRouter([
    {
        path:"/",
        element:< Dashboard/> 
    },
    {
        path:"/todos",
        element:< Todos/> 
    },
    
]
) 
export default HomeRoutes;