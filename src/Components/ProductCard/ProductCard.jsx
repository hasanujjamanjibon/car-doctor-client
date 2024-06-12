const ProductCard = () => {
  return (
    <div className="py-4 px-6  cursor-pointer bg-white  border-b-4 border-red-500">
      <img
        className="w-32 h-40 mx-auto"
        src="https://i.postimg.cc/htT5mts5/visor.png"
        alt=""
      />
      <div></div>
      <p className="font-semibold text-2xl">Rear View</p>
      <p className="text-left leading-4">
        Lorem ipsum dolor sit amet consectetur, natus.
      </p>
      <div className="flex items-center  gap-8">
        <span>$80</span>
        <span className="line-through">$97</span>
      </div>
    </div>
  );
};
export default ProductCard;
