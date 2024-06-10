import { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const loadCategory = async () => {
      const response = await fetch("/category.json");
      const data = await response.json();
      setCategory(data);
    };
    loadCategory();
  }, []);
  return (
    <div className="flex flex-col items-center gap-6">
      <span className="inline-block  text-3xl font-bold border-b-rose-600 border-b-4 pb-2">
        Category
      </span>
      <div className="flex justify-center items-start gap-2 flex-wrap">
        {category?.map(({ title, img }, i) => (
          <div
            key={i}
            className="space-y-2 text-center border-2 p-4 rounded-sm"
          >
            <img className="h-20 w-24 " src={img} alt="" />
            <p className="capitalize font-semibold min-w-max text-sm">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
