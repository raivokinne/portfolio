import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { RouterProvider } from "react-router/dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
