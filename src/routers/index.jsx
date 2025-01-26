import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages";
import Blog from "../pages/blogs";
import About from "../pages/about";
import Post from "../pages/blogs/_id"
import ErrorPage from "../components/ErrorPage";

import {posts, postById} from "../apis/loaders"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout />,
        errorElement: <ErrorPage />,
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
                element:<Blog />,
                loader: posts
            },
            {
                path: "/blog/:id", //:id disini merupakan parameter dinamis
                element: <Post />,
                loader: postById
            }
        ]
    }
]);