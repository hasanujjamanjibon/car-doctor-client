import { Link } from 'react-router-dom';
import LogoSVG from '../../Components/LogoSVG/LogoSVG';
import Lists from '../../Components/NavMenuLists/Lists';
import { useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import {
  FaBars,
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className=' py-2 bg-white text-lg hidden md:block'>
        <div className=' max-w-[1290px]  px-2 mx-auto flex justify-between items-center'>
          {/* EMAIL ADDRESS */}
          <div className='flex justify-center items-center gap-2 '>
            <div className='  h-8 w-8 grid place-items-center rounded-full  cursor-pointer bg-gradient-to-r from-[#be47f1] shadow-lg to-rose-500  text-white transition-all duration-300 ease-in-out'>
              <BiLogoGmail />
            </div>

            <span className='font-medium'>info@cardoctor.com</span>
          </div>
          {/* PHONE NUMBER  */}
          <div className='flex justify-center items-center gap-2 '>
            <div className=' h-8 w-8 grid place-items-center rounded-full  cursor-pointer bg-gradient-to-r from-[#be47f1] shadow-lg to-rose-500 text-white transition-all duration-300 ease-in-out'>
              <IoMdCall />
            </div>
            <span className='font-medium'>+81-1234-5678-910</span>
          </div>
          {/* SOCIAL ACCOUNT  */}
          <div className='flex justify-center items-center gap-2 text-md'>
            {/* fb icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-full hover:scale-105   cursor-pointer hover:bg-gradient-to-r from-[#be47f1] shadow-lg to-rose-500 hover:text-white transition-all duration-300 ease-in-out'>
              <FaFacebookF />
            </div>
            {/* linkedin icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-full hover:scale-105  cursor-pointer hover:bg-gradient-to-r from-[#be47f1] shadow-lg to-rose-500 hover:text-white transition-all duration-300 ease-in-out'>
              <FaLinkedinIn />
            </div>
            {/* discord icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-full hover:scale-105  cursor-pointer hover:bg-gradient-to-r from-[#be47f1] shadow-lg to-rose-500 hover:text-white transition-all duration-300 ease-in-out'>
              <FaDiscord />
            </div>
            {/* youtuibe icons */}
            <div className='bg-gray-100   h-8 w-8 grid place-items-center rounded-full hover:scale-105  cursor-pointer hover:bg-gradient-to-r from-[#be47f1] shadow-lg to-rose-500 hover:text-white transition-all duration-300 ease-in-out'>
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <header className='sticky top-0 h-[80px] bg-gradient-to-r from-[#be47f1]  via-rose-500 to-[#9122c1]  shadow-lg z-20'>
        <nav className='max-w-[1290px] bg-transparent px-2 mx-auto h-full flex gap-4 items-center  justify-between relative z-10'>
          {/* menu icon */}
          <div
            className=' block  lg:hidden text-2xl'
            onClick={() => setShowNav(!showNav)}>
            <FaBars className='text-white' />
          </div>

          {/* logo */}
          <div className='flex items-center gap-2 '>
            <div className='hidden lg:block'>
              <LogoSVG />
            </div>
            <div>
              <span className='bg-clip-text  font-bold text-xl text-transparent bg-gradient-to-tl from-gray-200 to-white background-animate'>
                Car Doctor
              </span>
            </div>
          </div>
          {/* navigation item */}
          <div
            className={`block text-md ms-auto lg:flex absolute top-[80px] lg:static py-2 gap-5  lg:py-0 px-1 lg:px-0 uppercase font-semibold bg-blue-600 lg:bg-transparent left-0 w-full lg:w-auto transition-all duration-500 ease-in-out  lg:z-0 text-gray-500 lg:text-gray-50  ${
              showNav
                ? ' translate-y-0 '
                : ' -translate-y-[500px] lg:translate-y-0'
            }`}>
            <Lists setShowNav={setShowNav} />
          </div>
          {/* account Page */}
          <Link to='/login'>
            <button className='px-4  py-2 bg-gradient-to-r from-[#be47f172]  to-[#9122c186] text-md lg:text-lg font-semibold text-gray-200 shadow-xl rounded-sm focus:scale-95 transition-all duration-300 ease-in-out hover:bg-purple-500 capitalize flex justify-center items-center gap-3 '>
              <MdAccountCircle className=' hidden xl:block text-3xl' />
              <div className='bg-gray-200  hidden xl:block h-4 w-[2px]'></div>
              login / signup
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
