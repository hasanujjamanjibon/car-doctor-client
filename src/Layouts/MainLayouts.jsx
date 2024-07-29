import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';
import Footer from '../Shared/Footer/Footer';
import Loader from '../Components/Loader/Loader';

const MainLayouts = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const isShown =
    location.pathname.includes('/login') ||
    location.pathname.includes('/register');

  return (
    <div className=''>
      {!isShown && <Navbar />}
      <div className='min-h-[calc(100vh-300px)] bg-gray-50'>
        {navigation.state === 'loading' && <Loader />}
        <Outlet />
      </div>
      {!isShown && <Footer />}
    </div>
  );
};
export default MainLayouts;
