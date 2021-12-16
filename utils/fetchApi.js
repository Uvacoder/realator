import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '19bb8536e7mshe009b59bd1f4f27p13fc13jsn6d6979644722' ,
    },
  });
    
  return data;
}
