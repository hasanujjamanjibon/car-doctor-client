import { useState } from 'react';
import useFetchbytext from '../../../custom/Hook/useFetchbytext';
import Loader from '../../../Components/Loader/Loader';

const Category = () => {
  const [loading, setLoading] = useState(true);
  const [datas] = useFetchbytext(
    `${import.meta.env.VITE_baseURL}/categories`,
    setLoading
  );

  if (loading) {
    return Loader;
  }
  return (
    <div className='flex flex-col items-center gap-6 max-w-[1290px] mx-auto space-y-10 px-4'>
      <div className='flex justify-center items-start gap-2 flex-wrap'>
        {datas?.map(({ title, img }, i) => (
          <div
            key={i}
            className='space-y-4  bg-gray-100 text-center     p-4 rounded-sm'>
            <img className='h-20 w-24 ' src={img} alt='' />
            <p className='capitalize font-semibold min-w-max text-sm'>
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
