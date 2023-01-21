import {Movie} from '../interfaces/MovieInterface';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';



function MovieCards(props : any) {

    const movieList = props.movieList;
    const showDetails = props.showDetails;

    return (
        <>
         {
            movieList.map((movie : Movie)=>(

                <Card key={movie.id} sx={{  display : 'inline-block' , paddingBottom : '0px' , maxWidth:'250px'  }}>
                    <CardContent key={movie.id} sx={{ paddingBottom : '0px' }}>
                    <CardMedia key={movie.id}
                        component="img"
                        height="auto"
                        sx={{maxHeight:'330px' , maxWidth:'220px'}}
                        image={"https://image.tmdb.org/t/p/w220_and_h330_face/"+ movie.poster_path}
                        alt="Paella dish"
                        />
                     <Typography variant="body2" sx={{minHeight : '100px' , textAlign : 'center' , marginTop: '10px'}} color="text.primary">
                       {movie.original_title} <br/> {movie.release_date} <br/>   
                       <Button onClick={()=>{
                        showDetails(movie);
                        }}>+ Info</Button>
                     </Typography>
                    </CardContent>
                  
                </Card>  
             

                )
            )
           }
        </>
    );

}

export default MovieCards;