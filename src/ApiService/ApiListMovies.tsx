import axios from "axios";
import API_KEY from './ApiKey';


async function ApiListMovies(page : number) {

    try {
      const resp = await axios.get(`https://api.themoviedb.org/4/discover/movie?api_key=${API_KEY}&page=${page}`);
      return resp.data;
    } catch(error) {
      throw error;  
    }

}

export default ApiListMovies;

