import axios from 'axios';
import baseUrl from './baseUrl';
const fetchData = async endPoint => {
  const response = await axios.get(`${baseUrl}/${endPoint}`);
  return response.data;
};

export default fetchData;
