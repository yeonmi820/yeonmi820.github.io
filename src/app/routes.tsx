import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/resume",
    Component: Resume,
  },
]);
