import React from 'react'
import './search.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import { Container } from 'react-bootstrap';

const Search = ({handleClick,handleChange,input,handleBack}) => {
  return (
    <Container fluid className='container__bg'>
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:600 }}
      >
    <IconButton sx={{ p: '10px' }} aria-label="menu">
  
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search..."
      onChange={handleChange}
      value={input}
     
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
    <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.8 }} orientation="vertical" />
    <IconButton type="submit" sx={{ p: '2px' }} aria-label="search" onClick={handleBack} >
    <ArrowCircleLeftTwoToneIcon />Populares
    </IconButton>
    </Paper>

    </Container>

  )
}

export default Search