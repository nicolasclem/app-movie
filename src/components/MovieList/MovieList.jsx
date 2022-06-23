import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './movieList.css'


const MovieList = ({movies}) => {
  return (
    
    <Box
    sx={{
      width: "100%",
      height: "auto",
      m:"auto"
    }}>
    <Grid container  sx={{display:"flex",justifyContent:"center"}}>
        { 
        movies.map((movie)=> <MovieCard  movie={movie} key={movie.id} /> )
        
        }
    </Grid>
    </Box>
    
  )
}

export default MovieList