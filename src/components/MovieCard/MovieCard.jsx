import { Rating } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { CardActionArea } from '@mui/material';

const MovieCard = ({movie}) => {
  return (
    <Card sx={{ width: 200,m:1 }}>
    <CardActionArea >
      <CardMedia
      sx={{height:300}}
        component="img"
        height="140"
        image={movie.poster_path ?`http://image.tmdb.org/t/p/w500/${movie.poster_path}`:"https://i.postimg.cc/j2tF5MtZ/no-disponible.png"}
        alt={movie.title}
      />
      <ImageListItemBar
       sx={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
          title={movie.title}
          position="top"
        
        >
       </ImageListItemBar>
       <ImageListItemBar
        sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
      
          title={
       <Rating
                    value={parseFloat(movie.vote_average) / 2}
                    precision={0.1}
                    readOnly
                    />
        }
        
        >
       </ImageListItemBar>
   
    </CardActionArea>
  </Card>
 

  )
}

export default MovieCard