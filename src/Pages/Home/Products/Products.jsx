import ProductSection from '../../../Components/ProductSection/ProductSection';

const Products = () => {
  return (
    <div className='py-10 space-y-4 bg-violet-50 '>
      <ProductSection title={'Top Selling'} />
      <ProductSection title={'Top Review'} />
    </div>
  );
};
export default Products;
