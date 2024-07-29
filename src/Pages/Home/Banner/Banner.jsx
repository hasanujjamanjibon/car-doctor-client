// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import './banner.css';
// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import { SlArrowRight } from 'react-icons/sl';

const Banner = () => {
  const arry = [
    {
      title: 'MAKE YOUR CAR LAST LONGER',
      description: `Free oil change, April 15. Only if you have a "5" on your license plate.`,
      id: '1',
      images: 'https://i.postimg.cc/wxGwcXD7/image-prev-ui-1.png',
      banner:
        'https://quanticalabs.com/Carservice/Template/images/slider/image_01.jpg',
    },
    {
      title: 'FIND THE TIRES THAT MATCH YOUR NEEDS',
      description: `Take advantage of our lowest prices which automatically include coupons.`,
      id: '2',

      banner:
        'https://quanticalabs.com/Carservice/Template/images/slider/image_02.jpg',
    },
    {
      title: 'EXPERT TECHNICIANS, COMPETITIVE PRICES',
      description: `We are committed to earning your trust by providing the expertise and value you expect.`,
      id: '3',
      banner:
        'https://quanticalabs.com/Carservice/Template/images/slider/image_03.jpg',
    },
  ];
  return (
    <div className='h-[620px] min-h-[calc(100vh-124px)]'>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        className='mySwiper'>
        {arry?.map(({ title, id, description, banner }) => (
          <SwiperSlide key={id} className=' overflow-hidden'>
            <div className='h-full w-full object-cover relative'>
              <img
                src={banner}
                alt=''
                className='h-full w-full object-cover backdrop-blur-xl'
              />
              <div className='absolute bg-[#00000042]  top-0 right-0 left-0 bottom-0 w-full h-full grid grid-cols-1  place-items-center '>
                <div className=' text-gray-50 px-2 flex flex-col gap-11 justify-center items-center '>
                  <h1 className='text-3xl  lg:text-5xl  font-semibold capitalize '>
                    {title}
                  </h1>
                  <p className=' leading-5 text-sm lg:text-xl text-center'>
                    {description}
                  </p>
                  <button className='bg-[#00000063] flex justify-center items-center gap-2 uppercase font-semibold px-6 py-3 text-lg border-2 border-gray-200 hover:bg-gray-950 hover:px-12 transition-all duration-300 ease-in-out'>
                    <span>visit Details</span> <SlArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
