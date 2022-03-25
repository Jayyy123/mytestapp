// import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Latest = () => {

    const [movies, setMovies] = useState([])

    const getResult = async ()=>{
        const url = `http://omdbapi.com/?s=latest&apikey=2f21e81a`
        // const { data } = await axios.get(url)
        const data = await fetch(url)
        const response = await data.json()
        console.log(response.Search)
        setMovies(response.Search)
      }

    useEffect(()=>{
        getResult()
    },[])

    const MovieList = () =>{
        return (
            <>
                {movies.map((movie, index)=>

                    <img src={movie.Poster} alt = "movie-name" className='movie-name'></img>
                )}
            </>
        )
    }

  return (
    <div className='latest-container'>

    <div className='latest-text'> 
        Latest Movies
    </div>
    <div className='slideshow'>
        <div className='movie'>

            <MovieList/>

        </div>
        
    </div>
    
    </div>
    )
}

export default Latest