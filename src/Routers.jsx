import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import FallbackError from "./components/FallbackError";
import Layout from "./components/Layout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <FallbackError />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function Routers() {
  return <RouterProvider router={routers} />;
}
