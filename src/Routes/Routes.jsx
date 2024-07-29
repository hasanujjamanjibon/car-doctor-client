import { createBrowserRouter } from 'react-router-dom';

import MainLayouts from '../Layouts/MainLayouts';

import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import Parts from '../Pages/Allparts/Parts';
import Services from '../Pages/Services/Services';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'register',
        element: <SignUp />,
      },
      {
        path: 'parts',
        element: <Parts />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'top-review',
        element: <div>Top Review</div>,
      },
      {
        path: 'best-selling',
        element: <div>best-selling</div>,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
    ],
  },
]);
export default router;
