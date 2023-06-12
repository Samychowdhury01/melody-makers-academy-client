import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AddAClass from "../Pages/Dashboad/AddAClass/AddAClass";
import EnrolledClasses from "../Pages/Dashboad/EnrolledClasses/EnrolledClasses";
import ManageClasses from "../Pages/Dashboad/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboad/ManageUsers/ManageUsers";
import MyClasses from "../Pages/Dashboad/MyClasses/MyClasses";
import Payment from "../Pages/Dashboad/Payment/Payment";
import PaymentHistory from "../Pages/Dashboad/PaymentHistory/PaymentHistory";
import SelectedClasses from "../Pages/Dashboad/SelectedClasses/SelectedClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <AllClasses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "selected-classes",
        element:<StudentRoute> <SelectedClasses /></StudentRoute>,
      },
      {
        path: "payment/:id",
        element:<StudentRoute> <Payment /></StudentRoute>,
      },
      {
        path: "payment-history",
        element:<StudentRoute> <PaymentHistory /></StudentRoute>,
      },
      {
        path: "enrolled-classes",
        element:<StudentRoute> <EnrolledClasses /></StudentRoute>,
      },
      {
        path: "add-a-class",
        element: (
          <InstructorRoute>
            <AddAClass />
          </InstructorRoute>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
