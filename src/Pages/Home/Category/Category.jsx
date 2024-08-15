import { useEffect, useState } from 'react';
import Loader from '../../../Components/Loader/Loader';
import axios from 'axios';

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(import.meta.env.VITE_baseURL);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_baseURL}/categories`)
      .then((result) => setCategory(result.data));
    setLoading(false);
  }, []);

  if (loading) {
    return Loader;
  }
  return (
    <div className='flex flex-col items-center gap-6 max-w-[1290px] mx-auto space-y-10 px-4'>
      <span className='inline-block  text-3xl font-bold border-b-rose-600 border-b-4 pb-2'>
        Category
      </span>
      <div className='flex justify-center items-start gap-2 flex-wrap'>
        {category &&
          category?.map(({ title, img }, i) => (
            <div
              key={i}
              className='space-y-4  bg-white text-center   drop-shadow-md  p-4 rounded-sm'>
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
