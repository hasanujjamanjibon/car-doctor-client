import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchTopRatedData = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_baseURL}/top-rated`
        );
        setData(result?.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCategory();
  }, []);
  return [datas];
};
export default useFetchTopRatedData;
