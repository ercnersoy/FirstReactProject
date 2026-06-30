import { createBrowserRouter } from "react-router";
import App from "../app";
import Index from "../pages/Index";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Index /> },
            { path: "/posts", element:<Posts />},
            { path: "posts/:id", element:<PostDetail />}
        ]
    }
]);