import React from 'react';
import Box from '@mui/material/Box';
import { CardMedia, Grid, Paper, Rating, Typography } from '@mui/material';

const MovieCardDetail = ({movieId, infoMovie}) => {

  
    
  return (


<Box sx={{ m:2, display: "flex", 
    justifyContent: "center", p: 2 }}
>
  <Grid container sx={{ maxWidth: 1200 }}>
      <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <CardMedia
              component="img"
              alt={movieId.title}
              image={
              movieId.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieId.poster_path}`
                  : "no hay imagen"
              }
              sx={{ objectFit: "contain" }}
          />
      </Grid>
      <Grid item xs={12} sm={8} sx={{ p: 1 }}>
        <Paper  elevation={0} 
                sx={{backgroundColor:"transparent" ,
                    color:"var(--bg-grey-100)"}} 
        >
          <Typography variant="h3" maxWidth="80%">
              {movieId.title}
          </Typography>
            <Rating
              value={parseFloat(movieId.vote_average) / 2}
              precision={0.1}
              readOnly
            />
          
          <Typography variant="h6">
            {movieId.release_date.slice(0, 4)}
          </Typography>
          <Typography variant="body1" sx={{m:1}}>
              Genero:
                  {movieId.genres.map((genre) =>(
                  <Box component="span" sx={{  p:.7,border: '2px solid grey',m:.5, borderRadius:"10px" }}  key={genre.id}> 
                    {genre.name}
                  </Box>
                ))}
          </Typography> 
          <Typography variant="body2"  sx={{mt: 2}}>
            Director : {infoMovie.directorName ? infoMovie.directorName.name : " Desconocido"}
          </Typography>
          <Typography variant="body2" sx={{mt: 2}}>
            {movieId.overview}
          </Typography>
          {infoMovie.video?
                <Box xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{mt: .5}}>
                    Oficial Trailer
                  </Typography>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${infoMovie.video.key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                </Box>:
                <CardMedia
                    component="img"
                    alt={movieId.title}
                    image={
                    movieId.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${movieId.backdrop_path}`
                    : "https://i.postimg.cc/j2tF5MtZ/no-disponible.png"
                    } 
                    sx={{ borderRadius:5, objectFit: "contain" }}
                />
          }

          </Paper>
        
          </Grid>
        </Grid>
      </Box>
  )
}

export default MovieCardDetail