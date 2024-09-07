import { useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Sidebar from '../../Components/Sidebar/Sidebar';
import useFetchbytext from '../../custom/Hook/useFetchbytext';
import Loader from '../../Components/Loader/Loader';

const Parts = () => {
  const [loading, setLoading] = useState(true);
  const [datas] = useFetchbytext(
    `${import.meta.env.VITE_baseURL}/parts`,
    setLoading
  );
  console.log('LOADING => ', loading);
  if (loading) {
    return <Loader />;
  }

  console.log('LOADING => ', loading);

  return (
    <>
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          <div className='w-full flex py-4'>
            {/* ! sidebar */}
            <div className=' px-4 space-y-4 w-full '>
              <div className='bg-white py-4 px-2 flex justify-between items-center flex-wrap'>
                <span className='text-xl font-semibold'>Parts</span>
                {/* filter */}
                <div className='space-x-4'>
                  <div className='join border'>
                    <div className='indicator'>
                      <span
                        disabled
                        className='btn btn-sm !bg-transparent !text-black capitalize join-item focus:border-0 focus:outline-0'>
                        Sort By :
                      </span>
                    </div>
                    <select className='select select-sm  join-item focus:border-0 focus:outline-0'>
                      <option selected>All</option>
                      <option>Sci-fi</option>
                      <option>Drama</option>
                      <option>Action</option>
                    </select>
                  </div>
                  <div className='join border'>
                    <div className='indicator'>
                      <span
                        disabled
                        className='btn btn-sm !bg-transparent !text-black capitalize join-item'>
                        Show :
                      </span>
                    </div>
                    <select
                      defaultValue={20}
                      className='select select-sm join-item focus:border-none focus:outline-none'>
                      <option>20</option>
                      <option>30</option>
                      <option>50</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 px-2   xl:grid-cols-3 2xl:grid-cols-4 gap-2 place-items-center max-h-screen overflow-y-auto overflow-x-hidden'>
                {datas?.map((data, i) => (
                  <ProductCard key={i} data={data} />
                ))}
              </div>
            </div>
          </div>
          <label
            htmlFor='my-drawer-2'
            className=' bg-gradient-to-b mb-4 text-xl from-red-400 to-red-400 text-black font-semibold px-10 py-1 drawer-button sticky bottom-2 lg:hidden'>
            Filter
          </label>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 min-h-full bg-white text-base-content overflow-y-auto'>
            {/* Sidebar content here */}
            <Sidebar endpoint={'parts'} />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Parts;
