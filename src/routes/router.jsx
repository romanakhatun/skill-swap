import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SkillDetails from "../pages/SkillDetails";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ErrorPage from "../pages/ErrorPage";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../components/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import Loading from "../components/Loading";
import AllCourse from "../pages/AllCourse";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import MyCourses from "../pages/dashboard/MyCourses";
import AddCourse from "../pages/dashboard/AddCourse";
import UpdateCourse from "../pages/dashboard/UpdateCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgotPassword />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "all-course",
        element: <AllCourse />,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/skill-details/:id",
        element: <SkillDetails />,
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "update-course/:id",
        element: <UpdateCourse />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
    ],
  },
]);
