import { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

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
    <div className="py-10">
      {/*  */}
      <div className="space-y-4">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 place-items-center my-10 px-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
export default Products;
