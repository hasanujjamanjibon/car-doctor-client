import useFetchAllParts from '../../custom/Hook/useFetchAllParts';
import useFetchAllService from '../../custom/Hook/useFetchAllService';

const Sidebar = ({ endpoint }) => {
  const [PartsDatas] = useFetchAllParts();
  const [ServiceDatas] = useFetchAllService();

  const categories =
    endpoint === 'parts'
      ? PartsDatas.map((data) => data?.category)
      : ServiceDatas.map((data) => data?.serviceType);

  const uniqueCategories = [...new Set(categories)];

  const price =
    endpoint === 'parts'
      ? PartsDatas.map((data) => data?.price)
      : ServiceDatas.map((data) => data?.price);

  const maxPrice = Math.max(...price);
  const minPrice = Math.min(...price);

  return (
    <div className='space-y-4 relative  md:static top-20'>
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
            className='px-2 py-2 border  rounded-sm w-full text-center placeholder:text-gray-900'
            placeholder={minPrice}
          />{' '}
          $
          <input
            type='text'
            className='px-2 py-2 border w-full rounded-sm text-center placeholder:text-gray-900'
            placeholder={maxPrice}
          />{' '}
          $
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
