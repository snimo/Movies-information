import React , {useState , useEffect} from "react";
import ApiListMovies from '../ApiService/ApiListMovies';
import {MoviesResponseApi , Movie , Gender , GenderResponseApi , ApiResponseActors} from '../interfaces/MovieInterface';
import LoadingMoreMovies from './LoadingMoreMovies';
import ApiGender from "../ApiService/ApiGender";
import ApiActors from '../ApiService/ApiActors';
import MovieDetail from "./MovieDetail";
import MovieCards from "./MovieCards";

function ListMovies() {

    const [movieList , setMovieList] = useState<Movie[]>([]);
    const [loading , setLoading] = useState(false);
    const [lastPage , setLastPage] = useState(1);
    const [openDetailsMovie , setOpenDetailsMovie] = useState(false);
    const [selectedMovie , setSelectedMovie] = useState<Movie>();
    const [genders , setGenders] = useState<Gender[]>();

    const loadMoviesList = () => {

        setLoading(true);

        ApiListMovies(lastPage).then((data)=>{
            const moviesResponseApi : MoviesResponseApi = data;
            setMovieList(movieList.concat(moviesResponseApi.results));
            setLastPage(lastPage + 1);
        }).finally(()=> {
           setLoading(false);
        }

        );

    };

    const getGenderName = (movie : Movie , genders : Gender[]) => {
        const lista : string[] = [];
        movie.genre_ids.forEach((id)=> {
            const findGender = genders?.filter((gender)=>{return gender.id == id});
            if (findGender.length>0) {
                 lista.push(findGender[0]?.name);
            }
        });
        return lista;
    };

    const loadActors = (movie : Movie) => {

        if ((movie.actors!=null) && (movie.actors.length>0)) {
            setSelectedMovie({...movie});
            setOpenDetailsMovie(true);
            return;
        }
        
        ApiActors(movie.id).then((data) => {
            const ApiResponseActors : ApiResponseActors = data;
            movie.actors = ApiResponseActors.cast.map((cast)=>{
                              return { id : cast.id , name : cast.original_name};
                            });

            setSelectedMovie({...movie});
            setOpenDetailsMovie(true);
        }).catch((error)=>{setOpenDetailsMovie(false);});
    }

    const loadGenders = (movie : Movie) => {

        if (genders!=null && genders?.length>0) {
            movie.genderNames = getGenderName(movie , genders);
            setSelectedMovie({...movie});
            setOpenDetailsMovie(true);
            return;
        }
        
        ApiGender().then((data) => {
            const genderResponseApi : GenderResponseApi = data;
            setGenders(
                genderResponseApi.genres
            );
            movie.genderNames = getGenderName(movie , genderResponseApi.genres);

            setSelectedMovie({...movie});

            setOpenDetailsMovie(true);
        }).catch((error)=>{setOpenDetailsMovie(false);});
    }

    const showDetails = (movie : Movie) => {
        setSelectedMovie(movie);
        loadGenders(movie);
        loadActors(movie);
    };

    useEffect(() => {
        loadMoviesList()
      }, []);

    window.onscroll = () => {

        if ((Math.abs((window.innerHeight + document.documentElement.scrollTop) - document.documentElement.offsetHeight))<= 5) {
           loadMoviesList();
        }
      }

    return (
        <div style={{textAlign:'center'}}>
          
           <MovieCards movieList = {movieList} showDetails = {showDetails}></MovieCards> 

           {
            loading && <LoadingMoreMovies/>
           }

           <MovieDetail 
                    openDetailsMovie = {openDetailsMovie} 
                    selectedMovie = {selectedMovie} 
                    setOpenDetailsMovie = {setOpenDetailsMovie}></MovieDetail>
       
        </div>
    );
}

export default ListMovies;