import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchAllParts = () => {
  const [PartsDatas, setData] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const result = await axios.get(`${import.meta.env.VITE_baseURL}/parts`);
        setData(result?.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCategory();
  }, []);
  return [PartsDatas];
};
export default useFetchAllParts;
