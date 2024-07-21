import { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        setLoading(true);
        const response = await fetch("/category.json");
        const data = await response.json();
        setCategory(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadCategory();
  }, []);

  if (loading) {
    return Loader;
  }
  return (
    <div className="flex flex-col items-center gap-6 max-w-[1290px] mx-auto space-y-10 px-4">
      <span className="inline-block  text-3xl font-bold border-b-rose-600 border-b-4 pb-2">
        Category
      </span>
      <div className="flex justify-center items-start gap-2 flex-wrap">
        {category?.map(({ title, img }, i) => (
          <div
            key={i}
            className="space-y-2 border-red-500 bg-white text-center border-b-4  shadow-md  p-4 rounded-sm"
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
