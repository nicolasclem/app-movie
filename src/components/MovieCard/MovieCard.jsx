import { Rating } from '@mui/material'
import React from 'react'
import './movieCard.css'

const MovieCard = ({movie}) => {
  return (
    <div className="col" >
    <div className="card movie-container movieRow" >
        <img
                className="card-img-top movie-image movieEffects"
                src={movie.poster_path ?`http://image.tmdb.org/t/p/w500/${movie.poster_path}`:"https://i.postimg.cc/j2tF5MtZ/no-disponible.png"} 
                alt={movie.title}
        />
        <div className="card-body movie-content movieCardInfo" >
            <div className="row align-items-start">
                <div className="col">
                    <span>
                    <Rating
                    value={parseFloat(movie.vote_average) / 2}
                    precision={0.1}
                    readOnly
                    />
                    </span>
                </div>
                <div className="col">
                    <div className="realease-date pull-right text-right"><span>{movie.realease_Date}</span></div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <h6 className="movieTitle">{movie.title}</h6>
            </div>
        </div>
    </div>
</div>
  )
}

export default MovieCard