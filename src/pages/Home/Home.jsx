import React, { useEffect, useState } from 'react'
import axios from 'axios'
import URL from '../../helpers/ApiUrl'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Search from '../../components/Search/Search'


const Home = () => {
  const [movieSearch, setMovieSearch]=useState([])
  const [input, setInput]=useState('')
  const [back, setBack]=useState(false)
  const [movieInit , setMovieInit]=useState([])
  const [star ,setStar]=useState(0)
  const [movieStar,setMovieStar]=useState([])
    
    

  const dataInit= async()=>{
      const {data} = await  axios.get(URL.MovieFav)
      setMovieInit(data.results);
  }

  const dataStarFilter= async()=>{
    const {data} = await  axios.get(`${URL.MovieStar}${parseFloat(star)*2}`)
    console.log(`${URL.MovieStar}${parseFloat(star)*2}`);
    setMovieStar(data.results);
    console.log(movieStar);

}
      
     
  
  const handleBack= async (e)=>{
    e.preventDefault();
      setBack(false)

  }

  const handleClick= async (e)=>{
      e.preventDefault();
      const {data} = await axios.get(`${URL.MovieSeacrh}${input}`)
  
  setMovieSearch(data.results);
  setBack(true)
  setInput('')
  
}

const handleChange =(e)=>{
  setInput(e.target.value);

}

const handleStar=(e)=>{
  setStar(e.target.value)
  console.log(star);
}
useEffect(()=>{
  dataInit()
  
},[])

useEffect(()=>{
  dataStarFilter()
  // eslint-disable-next-line
},[star])
  return (
    <>
    <Search handleClick={handleClick}  handleChange={ handleChange} input={input} handleBack={handleBack}/>

    {back?<ItemListContainer movies={movieSearch} handleStar={handleStar} star={star}/>:
    <ItemListContainer movies={movieInit} handleStar={handleStar} star={star} movieStar={movieStar}/>
    }
    </>
  )
}

export default Home