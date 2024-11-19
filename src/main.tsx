import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import { router } from "@/router";
import { rootStore } from "@/stores";
import "./index.css";

init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={rootStore}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </StrictMode>
);
