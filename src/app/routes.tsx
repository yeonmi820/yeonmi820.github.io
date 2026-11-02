import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { WorkDetail } from "./pages/work-detail";
import { CaseStudyPaper } from "./pages/case-study-paper";
import { ScrollToTop } from "./components/scroll-to-top";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useEffect } from "react";

// 所有页面共用的外壳：负责切换页面时回到顶部
function Root() {
  return (
    <LanguageProvider>
      <LanguageRouteSync />
      <ScrollToTop />
      <Outlet />
    </LanguageProvider>
  );
}

function LanguageRouteSync() {
  const { pathname } = useLocation();
  const { language, syncLanguage } = useLanguage();
  const routeLanguage = pathname === "/cn" || pathname.startsWith("/cn/")
    ? "zh"
    : "en";

  useEffect(() => {
    if (language !== routeLanguage) {
      syncLanguage(routeLanguage);
    }
  }, [language, routeLanguage, syncLanguage]);

  return null;
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
        path: "/cn",
        Component: Home,
      },
      {
        path: "/resume",
        Component: Resume,
      },
      {
        path: "/cn/resume",
        Component: Resume,
      },
      {
        path: "/work/:slug",
        Component: WorkDetail,
      },
      {
        path: "/cn/work/:slug",
        Component: WorkDetail,
      },
      {
        path: "/case-study/full-paper",
        Component: CaseStudyPaper,
      },
      {
        path: "/cn/case-study/full-paper",
        Component: CaseStudyPaper,
      },
    ],
  },
]);
