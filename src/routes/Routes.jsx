import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/pages/home/Home";
import LogIn from "../components/logs/LogIn";
import SignIn from "../components/logs/SignIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            },
        ]
    },
]);

export default router;