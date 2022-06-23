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

    

  const dataInit = async () => {
    if(star > 0){
    const { data } = await axios.get(URL.MovieFav(star))
    setMovieInit(data.results);
    }
    else{
      const { data } = await axios.get(URL.MovieInit)
      
    setMovieInit(data.results);
    }
  }


  const dataSearch = async () => {
    if (input) {
      const { data } = await axios.get(URL.MovieSeacrh(input))
      setMovieSearch(data.results);
    }
  }




  const handleBack = () => {
     setStar(0)
     setBack(false)
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if(input!==''){
    setBack(true)
    await dataSearch()
    setInput('')
    }
    else{
      console.log("mandar mensajito q tiene q buscar");
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)

  }

  const handleStar = (e) => {
    if (e.target.value !== star){
    setStar(e.target.value)
    }else{
      setStar(0)
    }
  }


  useEffect(() => {
    dataInit()
    // eslint-disable-next-line
  }, [star,back])


  return (
    <>
    <Search handleClick={handleClick}  handleChange={ handleChange} input={input} handleBack={handleBack}/>

    {


    back ?
    <ItemListContainer 
    movies={movieSearch} 
    back={back}
    />:
    <ItemListContainer
    movies={movieInit} 
    back={back} 
    handleStar={handleStar} 
    star={star} 
    />
      
      
  
    }
    </>
  )
}

export default Home