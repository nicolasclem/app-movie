import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies}) => {
  return (
    <>
    
        <div className="row  text-center">
        { 
        movies.map((movie)=> <MovieCard  movie={movie} key={movie.id} /> )
        
        }
        </div>
    </>
  )
}

export default MovieList