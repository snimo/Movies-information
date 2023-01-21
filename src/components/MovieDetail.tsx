import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';


function MovieDetail(
    props : any
) {

    const openDetailsMovie = props.openDetailsMovie;
    const selectedMovie = props.selectedMovie;
    const setOpenDetailsMovie = props.setOpenDetailsMovie;

    return (
        <Dialog maxWidth='xs' open={openDetailsMovie && selectedMovie!=null}  >
        <Grid container spacing={2}>
            <Grid item xs={12}>
                    <Typography variant='body1' sx={{margin: '10px 10px 10px 10px' , textAlign:'center' }}>{selectedMovie?.original_title}
                    <IconButton onClick={()=>setOpenDetailsMovie(false)}>
                        <CloseIcon />
                    </IconButton>
                    </Typography>    
                    {(selectedMovie?.genderNames!=null) && (selectedMovie?.genderNames?.length>0) &&
                    <Typography variant='body2' sx={{margin: '10px 10px 10px 10px' , textAlign:'center' }}>Géneros {selectedMovie?.genderNames?.join(", ")}</Typography>   
                    }                               
                 
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                <Card sx={{marginTop:'0x' , marginLeft:'20px' , marginRight:'20px'}}>
                <CardMedia
                        component="img"
                        height="auto"
                        image={"https://image.tmdb.org/t/p/w220_and_h330_face/"+selectedMovie?.poster_path}
                        alt="Paella dish"
                        />
                </Card>
                <Typography variant='body2' sx={{margin: '10px 10px 10px 10px' , textAlign:'center' }}>Publicada {selectedMovie?.release_date}</Typography>   
                <br/>
                  

                </Stack>
            </Grid>
            <Grid item xs={6}>
            <Paper  sx={{ maxWidth:'280px' , textAlign : 'center' , margin: '10px 20px 20px 20px'}} color="text.primary">
                    {
                    <> 
                        {(selectedMovie?.actors?.length!=null && selectedMovie?.actors?.length>0) &&
                        <Paper elevation={3} sx={{ maxHeight: '240px' , overflow:'auto'}}>  

                            <Typography sx={{ textAlign : 'center' , fontWeight:'500' , marginTop:'10px' }} color="text.primary">Actores</Typography>
                            <List>
                                {
                                    selectedMovie?.actors?.map((actor : any)=>( <ListItemText key = {actor.id} secondary={actor.name}></ListItemText>))     
                                }
                            </List>

                        </Paper>
                        }
                    </>
                    }
            </Paper>
            </Grid>    
        
            </Grid>
        </Dialog>
    );
}

export default MovieDetail;