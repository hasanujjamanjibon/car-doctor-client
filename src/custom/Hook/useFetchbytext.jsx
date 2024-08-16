import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchbytext = (url, setLoading) => {
  const [datas, setData] = useState([]);


  useEffect(() => {
    const loadCategory = async () => {
      try {
        setLoading(true);
        const result = await axios.get(url);
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadCategory();
  }, []);
  return [datas];
};
export default useFetchbytext;
