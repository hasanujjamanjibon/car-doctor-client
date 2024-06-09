import { Link } from "react-router-dom";
import LogoSVG from "../../Components/LogoSVG/LogoSVG";
import Lists from "../../Components/NavMenuLists/Lists";

const Navbar = () => {
  return (
    <div className="sticky top-0 min-h-16 bg-white shadow-md z-50 relative">
      <nav className="max-w-[1290px] mx-auto">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Lists />
              </ul>
            </div>
            <a className="text-xl flex items-center gap-2">
              <div className="hidden md:block">
                <LogoSVG />
              </div>
              <div>
                <span className="bg-clip-text  font-bold text-2xl lg:text-3xl text-transparent bg-gradient-to-tl from-orange-500 to-blue-500">
                  Car Doctor
                </span>
                <p className="text-sm text-muted hidden md:block">
                  - Buy Parts & Repair Your Car.
                </p>
              </div>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Lists />
            </ul>
          </div>
          <div className="navbar-end flex flex-col items-end text-sm">
            <span className="text-black">Already have an account? </span>
            <Link to="/login" className="hover:underline text-error">
              login now
            </Link>
          </div>
        </div>
      </nav>
      <div className="absolute bottom-0 h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-700 z-10 left-0 right-0"></div>
    </div>
  );
};
export default Navbar;
