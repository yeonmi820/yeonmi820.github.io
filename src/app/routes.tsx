import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { WorkDetail } from "./pages/work-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/resume",
    Component: Resume,
  },
  {
    path: "/work/:slug",
    Component: WorkDetail,
  },
]);
