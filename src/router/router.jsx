import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import JobDetails from "../pages/JobDetails";
import { param } from "motion/react-client";
import PrivateRoute from "../provider/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJobs from "../pages/AddJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div className="text-center text-3xl">404 Not Found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-lovat-tau.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            },
            {
                path: '/addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
            }
        ]
    },
]);

export default router