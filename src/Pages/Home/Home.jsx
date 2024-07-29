import Category from './Category/Category';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Accordion from '../../Components/Accordion/Accordion';

const Home = () => {
  return (
    <div className='space-y-16'>
      <Banner />
      {/* <div className="max-w-[1290px] mx-auto space-y-10 px-4"></div> */}
      <Category />
      <Products />
      <Accordion />
    </div>
  );
};
export default Home;
