import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AddAClass from "../Pages/Dashboad/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboad/MyClasses/MyClasses";
import SelectedClasses from "../Pages/Dashboad/SelectedClasses/SelectedClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: 'selected-classes',
          element: <SelectedClasses/>
        },
        {
          path: 'add-a-class',
          element:<InstructorRoute> <AddAClass/></InstructorRoute>
        },
        {
          path: 'my-classes',
          element:<InstructorRoute><MyClasses/></InstructorRoute>
        },
        
      ]
    }
  ]);

  export default router