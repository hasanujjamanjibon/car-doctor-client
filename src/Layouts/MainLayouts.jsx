import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayouts = () => {
  const location = useLocation();
  const isShown =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  console.log(isShown);
  return (
    <div className="">
      {!isShown && <Navbar />}

      <div className="min-h-[calc(100vh-300px)] bg-gray-50">
        <Outlet />
      </div>
      {!isShown && <Footer />}
    </div>
  );
};
export default MainLayouts;
