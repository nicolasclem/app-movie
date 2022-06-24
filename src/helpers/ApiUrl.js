const URL={
    MovieFav:(star)=>`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=${(star*2)-2}&vote_average.lte=${star*2}&with_watch_monetization_types=flatrate`,
    MovieSeacrh:(input)=>`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${input}&include_adult=false`,
    MovieInit:`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    
}

export default URL




