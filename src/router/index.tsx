import { createBrowserRouter } from "react-router-dom";
import { ID } from "@/types";
import { Home, Details } from "@/pages";

export const routes = {
  home: {
    path: "/",
  },
  details: {
    path: "/details/:id",
    link: (id: ID) => `/details/${id}`,
  },
};

export const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <Home />,
  },
  {
    path: routes.details.path,
    element: <Details />,
  },
]);
