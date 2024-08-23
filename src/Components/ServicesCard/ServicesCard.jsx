import { FaRegEye } from 'react-icons/fa6';
import { MdOutlineAccessTime } from 'react-icons/md';
import { RiTimerFlashLine } from 'react-icons/ri';

const ServicesCard = ({ data }) => {
  const {
    title,
    thumbnail,
    description,
    price,
    duration,
    serviceType,
    warranty,
    availability,
  } = data || {};

  return (
    <div className='max-w-md bg-white  group cursor-pointer   rounded-lg hover:drop-shadow-2xl transition-all duration-300 dark:bg-gray-800 '>
      <div className='overflow-hidden rounded-lg'>
        <img
          className='rounded-t-lg group-hover:scale-110 transition-all duration-300 ease-in-out !h-48 w-full object-cover mx-auto'
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate'>
          {title.length > 20 ? title.slice(0, 20) + '...' : title}
        </h5>

        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify'>
          {description.length > 70
            ? description.slice(0, 70) + '...'
            : description}
          <span
            className={`text-blue-600 underline cursor-pointer ${
              description.length > 70 ? 'visible' : 'hidden'
            }`}>
            Read more
          </span>
        </p>
        <div className='flex justify-between flex-col items-start mb-3 gap-2 capitalize'>
          <p className='text-md  font-medium'>
            availability :{' '}
            <span className='badge badge-md  badge-secondary'>
              {availability}
            </span>
          </p>
          <p className='text-md  font-medium'>
            serviceType :{' '}
            <span className='badge badge-md  badge-accent'>{serviceType}</span>
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <button className='text-white bg-gradient-to-r from-[#ab41d8]  to-rose-600 uppercase w-full hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex-1'>
            Get Services
          </button>
          <p className='  text-gray-700 dark:text-gray-400  text-xl font-semibold'>
            ${Math.round(price)}
          </p>
        </div>

        <div className=' flex justify-between items-center gap-2 '>
          {/* available service */}
          <div
            data-tip='service available'
            title='Service Available'
            className='text-lg tooltip cursor-pointer flex justify-center items-center gap-2  w-fit'>
            <MdOutlineAccessTime />
            <p className=' font-normal text-gray-700 dark:text-gray-400'>
              {warranty}
            </p>
          </div>
          {/* review */}
          <div
            title='Review'
            className='text-lg cursor-pointer flex justify-center items-center gap-2  w-fit'>
            <RiTimerFlashLine />

            <p className=' font-normal text-gray-700 dark:text-gray-400'>
              {duration}
            </p>
          </div>
          {/* rating */}
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
