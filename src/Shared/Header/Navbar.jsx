import { Link } from "react-router-dom";
import LogoSVG from "../../Components/LogoSVG/LogoSVG";
import Lists from "../../Components/NavMenuLists/Lists";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="sticky top-0  h-[80px] bg-gradient-to-r from-[#be47f1ac] via-rose-500 to-[#9122c1bc]  shadow-md z-20">
      <nav className="max-w-[1290px] px-2 mx-auto h-full flex gap-4 items-center relative justify-between ">
        {/* menu icon */}
        <div className=" block  lg:hidden" onClick={() => setShowNav(!showNav)}>
          menu
        </div>
        {/* logo */}
        <div className="flex items-center gap-2 ">
          <div className="hidden md:block">
            <LogoSVG />
          </div>
          <div>
            <span className="bg-clip-text  font-bold text-2xl lg:text-3xl text-transparent bg-gradient-to-tl from-gray-200 to-white background-animate">
              Car Doctor
            </span>
            <p className="text-sm text-white hidden md:block min-w-max">
              - Buy Parts & Repair Your Car.
            </p>
          </div>
        </div>
        {/* navigation item */}
        <div
          className={`block text-md lg:flex absolute top-[80px] lg:static py-2 gap-5  lg:py-0 px-1 lg:px-0 uppercase font-semibold bg-gray-950 lg:bg-transparent left-0 w-full lg:w-auto transition-all duration-500 ease-in-out z-10 lg:z-0 text-gray-500 lg:text-gray-50  ${
            showNav
              ? " translate-y-0 "
              : " -translate-y-[500px] lg:translate-y-0"
          }`}
        >
          <Lists />
        </div>
        {/* account Page */}
        <Link to="/login">
          <button className="px-4 py-2 bg-gradient-to-r from-[#be47f172]  to-[#9122c186] text-md lg:text-lg font-semibold text-gray-200 shadow-xl rounded-sm focus:scale-95 transition-all duration-300 ease-in-out hover:bg-purple-500 capitalize">
            login / signup
          </button>
        </Link>
      </nav>
      <div className="absolute -bottom-0 h-[5px] bg-black z-10 left-0 right-0"></div>
    </header>
  );
};
export default Navbar;
