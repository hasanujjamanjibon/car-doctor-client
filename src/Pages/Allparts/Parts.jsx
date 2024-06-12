import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Parts = () => {
  const [shown, isShown] = useState(true);

  return (
    <>
      <div className="w-full flex py-4">
        <Sidebar shown={shown} isShown={isShown} />
        {/* ! sidebar */}
        <div className=" px-4 space-y-4 w-full lg:w-4/5">
          <div className="bg-white py-4 px-2">
            <span
              onClick={() => isShown(!shown)}
              className="text-xl font-semibold"
            >
              Car Parts
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 place-items-center max-h-screen overflow-y-auto">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
      </div>
    </>
  );
};
export default Parts;
