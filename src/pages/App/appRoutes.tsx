import LayoutWrapper from "@plumbing/layouts";
import { lazy } from "react";
import Error404 from "../Error404";

const Home = lazy(() => import("../Home"));

export const appRoutes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];
