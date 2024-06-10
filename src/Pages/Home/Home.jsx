import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <div className="max-w-[1290px] mx-auto">
        <Category />
      </div>
    </div>
  );
};
export default Home;
