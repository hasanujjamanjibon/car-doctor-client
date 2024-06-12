import { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const tabs = ["Top Review", "Best Selling", "all"];
  const subTabs = ["top ", "Selling"];
  const [show, setShow] = useState(false);

  const handleShowSubTabs = (tab) => {
    if (tab == "all") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="py-10 space-y-4">
      {/*  */}
      <div className="text-center">
        <span className="inline-block px-4 text-3xl font-bold border-b-rose-600 border-b-4 pb-2">
          Parts
        </span>
      </div>
      <div className="space-y-4 mt-10">
        <div className="flex gap-4 items-center justify-center">
          {tabs.map((tab, i) => (
            <span
              key={i}
              onClick={() => handleShowSubTabs(tab)}
              className={`inline-block text-sm uppercase pb-2 font-semibold border-b-4 border-b-black hover:border-b-red-700    px-2 hover:text-red-700 transition-colors duration-300 cursor-pointer`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center justify-center ${
            show ? "visible" : "hidden"
          }`}
        >
          {subTabs.map((subTab, i) => (
            <span
              key={i}
              className="inline-block text-sm uppercase pb-2 font-semibold border-b-4 border-b-black hover:border-b-red-700   px-2 hover:text-red-700 transition-colors duration-300 cursor-pointer"
            >
              {subTab}
            </span>
          ))}
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
