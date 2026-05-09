import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-foreground border-t-transparent animate-spin" />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<PageLoader />}><Home /></Suspense>,
  },
  {
    path: "/about",
    element: <Suspense fallback={<PageLoader />}><About /></Suspense>,
  },
  {
    path: "/projects",
    element: <Suspense fallback={<PageLoader />}><Projects /></Suspense>,
  },
  {
    path: "/contact",
    element: <Suspense fallback={<PageLoader />}><Contact /></Suspense>,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
