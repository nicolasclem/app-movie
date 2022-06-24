import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCardDetail from '../../components/MovieCardDetail/MovieCardDetail';
import { Ping } from '@uiball/loaders';
import Box from '@mui/material/Box';
import Cast from '../../components/Cast/Cast';



const MovieDetail = () => {


    const params = useParams();

    const [movieId,setMovieId]=useState()
    const [infoMovie,setInfoMovie] =useState()

    const dataDetail= async (id)=>{

        const {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        
       

        setMovieId(data)
    }

    const addInfo= async (id)=>{

        const credit= await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const videos= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const directorName= credit.data.crew.find(d=>d.job === "Director")
        const video = videos.data.results.find(v =>v.name ==="Official Trailer")
        const cast = credit.data.cast.map(actor =>(actor.profile_path&&actor))

        const info={
            directorName,
            video,
            cast
        }

        setInfoMovie(info)
        
        
    }
    useEffect(()=>{
       dataDetail(params.id) 
       addInfo(params.id)
        // eslint-disable-next-line
    },[params.id])
    

    
  return (
    <>
    {movieId && infoMovie?
        <MovieCardDetail  movieId={movieId} infoMovie={infoMovie}/>
        :
        
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
      <Ping 
                size={80}
                speed={2} 
                color="#64c4a8" 
                sx={{ }}
               />
      </Box>
    }
    <Cast  infoMovie={infoMovie}/>
    </>
  )
}

export default MovieDetail


