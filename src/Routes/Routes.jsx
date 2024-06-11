import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";

import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Parts from "../Pages/Allparts/Parts";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "parts",
        element: <Parts />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);
export default router;
