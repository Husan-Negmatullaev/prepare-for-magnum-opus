import {Posts} from "../pages/Posts";
import {PostId} from "../pages/PostId";
import {About} from "../pages/About";
import {Login} from "../pages/Login";
import {PathRouteProps} from "react-router/dist/lib/components";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {
        path: "/posts",
        element: <Posts />
    },
    {
        path: "/posts/:postId",
        element: <PostId />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "*",
        element: <Navigate to={"/posts"} />
    }
]

export const publicRoutes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <Navigate to={"/login"} />
    }
]