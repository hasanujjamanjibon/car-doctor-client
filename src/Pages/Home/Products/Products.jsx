
import ProductSection from '../../../Components/ProductSection/ProductSection';


const Products = () => {

  return (
    <div className='py-10 space-y-4 bg-violet-50 '>
      <ProductSection title={'Top Rated'} />
      {/* {datas?.map((data, i) => (
        <ProductCard key={i} data={data} />
      ))} */}
    </div>
  );
};
export default Products;
