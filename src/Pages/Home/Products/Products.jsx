import { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [tab, setTabs] = useState("all");

  useEffect(() => {
    console.log(tab);
  }, [tab]);
  
  return (
    <div className="py-10 space-y-4">
      <div className="space-y-4 mt-10">
        <div className="flex gap-4 items-center justify-center">
          <span
            onClick={() => setTabs("all")}
            className={`inline-block text-sm uppercase pb-2 font-semibold border-b-4 border-b-black hover:border-b-red-700    px-2 hover:text-red-700 transition-colors duration-300 cursor-pointer
              ${tab == "all" ? "border-b-red-700" : "border-b-black"}
              `}
          >
            all
          </span>
          <span
            onClick={() => setTabs("Top Review")}
            className={`inline-block text-sm uppercase pb-2 font-semibold border-b-4 border-b-black hover:border-b-red-700    px-2 hover:text-red-700 transition-colors duration-300 cursor-pointer  ${
              tab == "Top Review" ? "border-b-red-700" : "border-b-black"
            }`}
          >
            Top Review
          </span>
          <span
            onClick={() => setTabs("Best Selling")}
            className={`inline-block text-sm uppercase pb-2 font-semibold border-b-4 border-b-black hover:border-b-red-700    px-2 hover:text-red-700 transition-colors duration-300 cursor-pointer  ${
              tab == "Best Selling" ? "border-b-red-700" : "border-b-black"
            }`}
          >
            Best Selling
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 place-items-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="text-right">
        <Link to={"/parts"} className="btn btn-md btn-outline  btn-error">
          See All ↗
        </Link>
      </div>
    </div>
  );
};
export default Products;
