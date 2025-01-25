import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages";
import Blog from "../pages/blogs";
import About from "../pages/about";
import Post from "../pages/blogs/_id"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout />,
        children: [
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/blogs",
                element:<Blog />
            },
            {
                path: "/blog/:id", //:id disini merupakan parameter dinamis
                element: <Post />
            }
        ]
    }
]);