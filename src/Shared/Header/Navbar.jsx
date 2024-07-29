import { Link } from 'react-router-dom';
import LogoSVG from '../../Components/LogoSVG/LogoSVG';
import Lists from '../../Components/NavMenuLists/Lists';
import { useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className=' py-2 bg-white text-lg hidden md:block'>
        <div className=' max-w-[1290px] px-2 mx-auto flex justify-between items-center'>
          {/* EMAIL ADDRESS */}
          <div className='flex justify-center items-center gap-2 '>
            <div className='bg-gray-100  h-8 w-8 grid place-items-center rounded-sm  cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 ease-in-out'>
              <BiLogoGmail />
            </div>

            <span>info@cardoctor.com</span>
          </div>
          {/* PHONE NUMBER  */}
          <div className='flex justify-center items-center gap-2 '>
            <div className='bg-gray-100  h-8 w-8 grid place-items-center rounded-sm  cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 ease-in-out'>
              <IoMdCall />
            </div>
            <span>+81-1234-5678-910</span>
          </div>
          {/* SOCIAL ACCOUNT  */}
          <div className='flex justify-center items-center gap-2 text-md'>
            {/* fb icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-sm hover:scale-105   cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 ease-in-out'>
              <FaFacebookF />
            </div>
            {/* linkedin icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-sm hover:scale-105  cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 ease-in-out'>
              <FaLinkedinIn />
            </div>
            {/* discord icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-sm hover:scale-105  cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 ease-in-out'>
              <FaDiscord />
            </div>
            {/* youtuibe icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-sm hover:scale-105  cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 ease-in-out'>
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <header className='sticky top-0 h-[80px] bg-gradient-to-r from-[#be47f1] via-rose-500 to-[#9122c1]  shadow-md z-20'>
        <nav className='max-w-[1290px] px-2 mx-auto h-full flex gap-4 items-center  justify-between relative z-10'>
          {/* menu icon */}
          <div
            className=' block  lg:hidden'
            onClick={() => setShowNav(!showNav)}>
            menu
          </div>
          {/* logo */}

          <div className='flex items-center gap-2  flex-1'>
            <div className='hidden md:block'>
              <LogoSVG />
            </div>
            <div>
              <span className='bg-clip-text  font-bold text-2xl lg:text-3xl text-transparent bg-gradient-to-tl from-gray-200 to-white background-animate'>
                Car Doctor
              </span>
              <p className='text-sm text-white hidden md:block min-w-max'>
                - Buy Parts & Repair Your Car.
              </p>
            </div>
          </div>
          {/* navigation item */}
          <div
            className={`block text-md lg:flex absolute top-[80px] lg:static py-2 gap-5  lg:py-0 px-1 lg:px-0 uppercase font-semibold bg-gray-950 lg:bg-transparent left-0 w-full lg:w-auto transition-all duration-500 ease-in-out  lg:z-0 text-gray-500 lg:text-gray-50  ${
              showNav
                ? ' translate-y-0 '
                : ' -translate-y-[500px] lg:translate-y-0'
            }`}>
            <Lists setShowNav={setShowNav} />
          </div>
          {/* account Page */}
          <Link to='/login'>
            <button className='px-4 py-2 bg-gradient-to-r from-[#be47f172]  to-[#9122c186] text-md lg:text-lg font-semibold text-gray-200 shadow-xl rounded-sm focus:scale-95 transition-all duration-300 ease-in-out hover:bg-purple-500 capitalize'>
              login / signup
            </button>
          </Link>
        </nav>
        <div className='absolute -bottom-0 h-[3px] bg-gradient-to-r from-[#63247e] via-rose-800 to-[#4f076d] z-20 left-0 right-0 '></div>
      </header>
    </>
  );
};
export default Navbar;
