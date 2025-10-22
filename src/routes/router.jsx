import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);
