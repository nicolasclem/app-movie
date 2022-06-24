import React from 'react';
import './search.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';



const Search = ({handleClick,handleChange,input,handleBack}) => {
  return (
  
    <Container  className='container__bg' 
                sx={{ my:1 ,p: '1px', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'column' }}
    >
      <Paper
      component="form"
      sx={{ p: '1px 2px',
            display: 'flex', 
            alignItems: 'center', 
            width:315 ,
            height:35, 
            color: 'text.secondary'}}
      >
        <InputBase
          sx={{ ml:1, flex: 1 }}
          placeholder="Search..."
          onChange={handleChange}
          value={input}
        />
        <IconButton type="submit" 
                    sx={{ p: '2px', m: 1}} 
                    aria-label="search" 
                    onClick={handleClick}
        > 
          <SearchIcon />
        </IconButton>   
      </Paper>
      <IconButton type="btn" 
                  sx={{ p: '2px', m: 1,color:'#e9e9e9'}} 
                  onClick={handleBack}  
      > 
        <MovieOutlinedIcon />Inicio
      </IconButton>
    </Container>
   
  )
}



export default Search
