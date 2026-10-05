import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { WorkDetail } from "./pages/work-detail";
import { CaseStudyPaper } from "./pages/case-study-paper";
import { ScrollToTop } from "./components/scroll-to-top";

// 所有页面共用的外壳：负责切换页面时回到顶部
function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
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
      {
        path: "/case-study/full-paper",
        Component: CaseStudyPaper,
      },
    ],
  },
]);
