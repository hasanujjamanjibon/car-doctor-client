import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
