import { useEffect, useState } from 'react';
import Loader from '../../../Components/Loader/Loader';
import axios from 'axios';

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadCategory = async () => {
      try {
        setLoading(true);
        const result = await axios.get(
          `${import.meta.env.VITE_baseURL}/categories`
        );
        setCategory(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadCategory();
  }, []);

  if (loading) {
    return Loader;
  }
  return (
    <div className='flex flex-col items-center gap-6 max-w-[1290px] mx-auto space-y-10 px-4'>
      <div className='flex justify-center items-start gap-2 flex-wrap'>
        {category?.map(({ title, img }, i) => (
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
