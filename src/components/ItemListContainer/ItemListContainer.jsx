import React from 'react'
import { Rating } from '@mui/material';
import MovieList from '../MovieList/MovieList'
import './itemListContainer.css'



const ItemListContainer = ({movies,handleStar,star,movieStar}) => {
   


  return (
    <div>
        <div className='starFilter w-25 my-2'>
            <h5>Filtar por :</h5>
         <Rating
            name="simple-controlled"
            value={parseFloat(star)}
            precision={0.1}
            onChange={handleStar}
        /> 
        </div> 
         {star=0? <MovieList movies={movies}/>:<MovieList movies={movieStar} />}
         
        
    </div>
  )
}

export default ItemListContainer