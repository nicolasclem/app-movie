import React from 'react'
import { Rating } from '@mui/material';
import MovieList from '../MovieList/MovieList'
import './itemListContainer.css'



const ItemListContainer = ({movies,handleStar,star,back}) => {

  return (
    <div  className='container_itemList'>
        {
        !back?<div className='starFilter'>
          <h5>Filtar por :</h5>
          <Rating
            name="simple-controlled"
            value={parseInt(star)}
            precision={1}
            onChange={handleStar}
          />       
        </div> :''
        }
        <MovieList movies={movies}/> 
    </div>
  )
}

export default ItemListContainer