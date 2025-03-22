import { createBrowserRouter, RouterProvider } from "react-router";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const router = [
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: `/detail/id`, element: <Detail /> },
    ],
  },
];

const routes = createBrowserRouter([...router]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
