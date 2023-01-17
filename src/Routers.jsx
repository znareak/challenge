import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default function Routers() {
  return <RouterProvider router={routers} />;
}
