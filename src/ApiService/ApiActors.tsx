import axios from "axios";
import API_KEY from './ApiKey';

async function ApiActors(movieId : number) {

    try {

      const resp = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
      return resp.data;
    } catch(error) {
      throw error;  
    }

}

export default ApiActors;

