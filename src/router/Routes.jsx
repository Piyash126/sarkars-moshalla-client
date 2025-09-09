import { createBrowserRouter } from "react-router-dom";
// import UpdateItem from "../pages/dashboard/updateItem/UpdateItem";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/Main";
import AddItem from "../pages/dashboard/additem/AddItem";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import Cart from "../pages/dashboard/cart/Cart";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import UpdateItem from "../pages/dashboard/updateItem/UpdateItem";
import UserHome from "../pages/dashboard/userHome/UserHome";
import Home from "../pages/home/home/home/Home";
import Menu from "../pages/home/menu/Menu";
import Login from "../pages/login/Login";
import Order from "../pages/order/Order";
import SignUp from "../pages/signup/SignUp";
import AllUsers from "../pages/users/allUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:name",
        element: <Order></Order>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },

      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // Admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_baseURL}/menu/${params.id}`),
      },
    ],
  },
]);
