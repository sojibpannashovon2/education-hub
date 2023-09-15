import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/pages/home/Home";
import LogIn from "../components/logs/LogIn";
import SignIn from "../components/logs/SignIn";
import CollegeDetails from "../components/pages/home/CollegeDetails";
import CardRouteColleges from "../components/pages/colleges/CardRouteColleges";
import ErrorPage from "../components/pages/shared/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://admission-hub-server-three.vercel.app`)
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "colleges/:id",
                element: <CollegeDetails></CollegeDetails>,
                loader: ({ params }) => fetch(`https://admission-hub-server-three.vercel.app/${params.id}`)
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            },
            {
                path: "colleges",
                element: <CardRouteColleges></CardRouteColleges>,
                loader: () => fetch(`https://admission-hub-server-three.vercel.app`)
            },
        ]
    },
]);

export default router;