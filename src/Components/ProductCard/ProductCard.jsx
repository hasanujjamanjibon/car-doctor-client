import { FaRegEye } from 'react-icons/fa6';
import { FcRating } from 'react-icons/fc';
import { MdMiscellaneousServices, MdOutlineRateReview } from 'react-icons/md';

const ProductCard = ({ data }) => {
  const {
    productName,
    thumbnail,
    description,
    price,
    availableQuantity,
    rating,
    reviews,
    category,
  } = data || {};

  return (
    <div className='max-w-md bg-white border group cursor-pointer  border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 '>
      <div className='overflow-hidden rounded-lg'>
        <img
          className='rounded-t-lg group-hover:scale-110 transition-all duration-300 ease-in-out h-48 w-full object-contain mx-auto'
          src={thumbnail}
          alt=''
        />
      </div>

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate'>
          {productName.length > 20
            ? productName.slice(0, 20) + '...'
            : productName}
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
        <div className='flex justify-between items-center'>
          <p className='mb-3  text-gray-700 dark:text-gray-400  text-xl font-semibold'>
            ${Math.round(price)}
          </p>
          <p className='badge badge-md badge-primary'>Brands : {category}</p>
        </div>

        <div className=' flex justify-between items-center gap-2 '>
          {/* available service */}
          <div
            data-tip='service available'
            title='Service Available'
            className='text-lg tooltip cursor-pointer flex justify-center items-center gap-2  w-fit'>
            <MdMiscellaneousServices />
            <p className=' font-normal text-gray-700 dark:text-gray-400'>
              {availableQuantity}
            </p>
          </div>
          {/* review */}
          <div
            title='Review'
            className='text-lg cursor-pointer flex justify-center items-center gap-2  w-fit'>
            <MdOutlineRateReview />
            <p className=' font-normal text-gray-700 dark:text-gray-400'>
              {reviews.length}
            </p>
          </div>
          {/* rating */}
          <div
            title='Rating'
            className='text-lg cursor-pointer flex justify-center items-center gap-2  w-fit'>
            <FcRating />

            <p className=' font-normal text-gray-700 dark:text-gray-400'>
              {rating}
            </p>
          </div>
          {/* <div title='see details' className='text-2xl'></div> */}
          <div className='tooltip' data-tip='See Details'>
            <button className='text-xl'>
              <FaRegEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
