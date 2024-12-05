import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchAllService = () => {
  const [ServiceDatas, setData] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_baseURL}/services`
        );
        setData(result?.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCategory();
  }, []);
  return [ServiceDatas];
};
export default useFetchAllService;
