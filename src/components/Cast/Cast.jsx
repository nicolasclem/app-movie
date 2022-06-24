


import { Box, Card, CardActionArea, CardMedia, Grid, ImageListItemBar } from '@mui/material'
import React from 'react'





const Error = ({infoMovie}) => {


    return (
  
    <Box
    sx={{
      width: "100%",
      height: "auto",
      m:"auto"
    }}>
    <Grid container  sx={{display:"flex",justifyContent:"center"}}>
            {
            !infoMovie?null:infoMovie.cast.map((c,i)=>(
                c && i < 6?
                <Card sx={{ width: 200,m:1 }} key={i}>
                <CardActionArea>
                  <CardMedia
                    sx={{height:300}}
                    component="img"
                    height="140"
                    image={c.profile_path ?`http://image.tmdb.org/t/p/w500/${c.profile_path}`:"https://i.postimg.cc/j2tF5MtZ/no-disponible.png"}
                    alt={c.name}
                    />
                    <ImageListItemBar
                        sx={{
                        background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                    title={c.name}
                    position="top"
                    />
                    </CardActionArea>
                    </Card>
                :null
            ))
            }
    </Grid>
    </Box>
  )
}

export default Error