import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <>Error Page</>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/feature",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Home/>
            },
            {
                path: "/contact_us",
                element: <Home/>
            },
        ]
    }
])

export default Route;