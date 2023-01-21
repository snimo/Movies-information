import axios from "axios";
import API_KEY from './ApiKey';

async function ApiGender()   {

    try {
      const resp = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
      return resp.data;
    } catch(error) {
      throw error;  
    }

}

export default ApiGender;

