import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../page/Home";
import Login from "../page/Login";
import Coverpage from "../component/Coverpage";
import Register from "../page/register";
import useAuth from "../hooks/useAuth";
import AuthProvider from "../Provider/AuthProvider";
import Adminhome from "../page/adminPage/Adminhome";
import AdminDashboard from "../page/adminPage/AdminDashboard ";
import PrivateRoute from "../Provider/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/coverpage",
        element: <Coverpage></Coverpage>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
    children: [{ index: true, element: <Adminhome /> }],
  },
]);
