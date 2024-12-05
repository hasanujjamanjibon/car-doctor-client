import { useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import useFetchTopRatedData from '../../custom/Hook/useFetchTopRatedData';

const TopRated = () => {
  const [datas] = useFetchTopRatedData()

  return (
    <div className='max-w-[1290px] mx-auto space-y-2 px-2 py-4'>
      <div className=' py-4 px-2 flex justify-center items-center bg-gray-900'>
        <span className='text-xl font-semibold inline-block text-white capitalize'>
          Organised by rating
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2  gap-4 place-items-center'>
        {datas?.map((data, i) => (
          <ProductCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
};
export default TopRated;
