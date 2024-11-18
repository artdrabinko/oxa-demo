import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import "./index.css";

init({
  debug: false,
  visualDebug: false,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
