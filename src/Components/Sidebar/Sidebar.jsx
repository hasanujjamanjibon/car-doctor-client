import { useState } from 'react';
import Loader from '../Loader/Loader';
import useFetchbytext from '../../custom/Hook/useFetchbytext';

const Sidebar = () => {
  const [loading, setLoading] = useState(true);
  const [datas] = useFetchbytext(
    `${import.meta.env.VITE_baseURL}/parts`,
    setLoading
  );
  const categories = datas.map((data) => data.category);
  const uniqueCategories = [...new Set(categories)];
  console.log(uniqueCategories);

  if (loading) {
    return Loader;
  }
  return (
    <div className='space-y-4 relative md:static top-20'>
      {/* --------------
            Price Filter
        ------------------*/}
      <div className='w-full space-y-4'>
        <span className='py-2 bg-rose-200 font-semibold text-xl w-full inline-block ps-1'>
          Price
        </span>
        <div className='flex items-center gap-2 justify-start overflow-hidden w-full'>
          <input
            type='text'
            className='px-2 py-2 border max-w-20 rounded-sm'
            placeholder='min.'
            defaultValue={0}
          />{' '}
          ৳
          <input
            type='text'
            className='px-2 py-2 border max-w-20 rounded-sm'
            placeholder='max.'
            defaultValue={30000}
          />{' '}
          ৳
        </div>
      </div>

      {/* --------------
            category Filter
        ------------------*/}
      <div className='w-full space-y-4'>
        <span className='py-2 bg-rose-200 font-semibold text-xl w-full inline-block ps-1'>
          Category
        </span>
        <div className='space-y-2 '>
          {uniqueCategories?.map((category, i) => (
            <div key={i} className='space-x-1 text-[1rem] font-medium'>
              <input
                id={category}
                type='radio'
                name='category'
                value={category}
              />
              <label className='capitalize' htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* --------------
           Submit & reset button
        ------------------*/}
      <div className='space-x-5'>
        <button className='btn btn-info text-white capitalize btn-sm'>
          {' '}
          submit
        </button>
        <button className='btn btn-outline btn-error capitalize btn-sm'>
          {' '}
          reset
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
