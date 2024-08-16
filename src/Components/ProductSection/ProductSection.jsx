import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({title}) => {
  return (
    <div className='max-w-[1290px] mx-auto space-y-2 px-2'>
      <div className='bg-white px-2 py-4 border border-violet-600 bg-gradient-to-r from-[#be47f1]  via-rose-500 to-[#9122c1] flex justify-between items-center'>
        <p className='text-xl text-white font-medium capitalize'>{title}</p>
        <Link to={'/parts'} className=' capitalize text-white hover:underline'>
          see more
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 place-items-center'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='text-right'></div>
    </div>
  );
};
export default ProductSection;