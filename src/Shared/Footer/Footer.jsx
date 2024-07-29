import LogoSVG from '../../Components/LogoSVG/LogoSVG';

const Footer = () => {
  return (
    <div className='w-full h-fit bg-gray-950 '>
      <footer className='footer p-10 !text-gray-100  max-w-[1290px] mx-auto'>
        <aside>
          <LogoSVG />
          <p>
            <span className='text-xl font-bold'>Car Doctor</span>
            <br />- Buy Parts & Repair Your Car.
          </p>
        </aside>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover hover:text-red-500'>Branding</a>
          <a className='link link-hover hover:text-red-500'>Design</a>
          <a className='link link-hover hover:text-red-500'>Marketing</a>
          <a className='link link-hover hover:text-red-500'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'> Company</h6>
          <a className='link link-hover hover:text-red-500'>About us</a>
          <a className='link link-hover hover:text-red-500'>Contact</a>
          <a className='link link-hover hover:text-red-500'>Jobs</a>
          <a className='link link-hover hover:text-red-500'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover hover:text-red-500'>Terms of use</a>
          <a className='link link-hover hover:text-red-500'>Privacy policy</a>
          <a className='link link-hover hover:text-red-500'>Cookie policy</a>
        </nav>
        <form>
          <h6 className='footer-title'>Newsletter</h6>
        
        </form>
      </footer>
    </div>
  );
};
export default Footer;
