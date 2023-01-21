import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User";
import Layout from "./components/Layout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default function Routers() {
  return <RouterProvider router={routers} />;
}
