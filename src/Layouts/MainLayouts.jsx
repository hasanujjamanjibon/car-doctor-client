import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-[calc(100vh-300px)] max-w-[1290px] mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayouts;
