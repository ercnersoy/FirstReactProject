import { createBrowserRouter } from "react-router";
import App from "../app";
import Index from "../pages/Index";
import Comment from "../pages/Comment";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Index /> },
            { path: "/comments", element:<Comment />}

        ]
    }
]);