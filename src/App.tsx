import React,{useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Container } from '@mui/material';
import ListMovies from './components/ListMovies';

function App() {

  const getMovies = async () => {

    try {
      const resp = await axios.get('https://api.themoviedb.org/4/discover/movie?api_key=b8d60a1e14f700813284b0fbb0ac439b');
    } catch(error) {

    }

  }

  useEffect(()=>{getMovies();},[]);

  

  return (
    <Container>
      <div>
        <h1 className='title' style={{textAlign:'center'}}>Películas Challenge Farmu</h1>
        <ListMovies></ListMovies>
      </div>
    </Container>
  );
}

export default App;
