import Marquee from 'react-fast-marquee';
const Blogs = () => {
  return (
    <div className=''>
      <div className=' border-y-2  flex items-center bg-rose-50'>
        <p className=' bg-gradient-to-r from-[#6647f1]   to-[#9122c1] rounded-s-sm  text-white min-w-max px-2 py-1 md:py-2 font-semibold text-lg'>
          Latest Blogs
        </p>
        <Marquee pauseOnHover='true'>
          <span className='text-sm font-medium'>
            Blogs section coming soon.........
          </span>
        </Marquee>
      </div>
      <div className='lg:grid grid-cols-3 gap-4'>
        {/* recent news */}
        <div className='col-span-2'>
          <div>
            <img src='' alt='' />
          </div>
        </div>
        {/* all news */}
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};
export default Blogs;
