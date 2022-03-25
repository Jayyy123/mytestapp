import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
// import Trending from './components/movies/Trending';
import Latest from './components/movies/Latest';
import React, { useState, useEffect } from 'react'


function App() {
  const [movies, setMovies] = useState([])
  const [searchvalue, setSearchvalue] = useState('')

  const getResult = async (searchvalue)=>{
      let url = ''
      if(searchvalue===''){
          url += `http://omdbapi.com/?s=trending&apikey=2f21e81a`
      }else{

          url += `http://omdbapi.com/?s=${searchvalue}&apikey=2f21e81a`
      }
      // const { data } = await axios.get(url)


      const data = await fetch(url)
      const response = await data.json()
      console.log(response.Search)
      url = ''
      if(response.Search){
        setMovies(response.Search)
      }
    }

  useEffect(()=>{
      getResult(searchvalue)
  },[searchvalue])

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
    <BrowserRouter>
    {/* Header Section starts*/}
      <Header />
    {/* Header Section ends */}

    {/* Hero section starts */}
      <section className='Hero'>
        <div className='hero-container'>
          <div className='hero-text'>
            Watch something incredible.
          </div>
        </div>
      </section>
    {/* Hero section ends */}
    
    {/* Search Section starts */}
      <section className='search'>
        <div className='search-text'>
            Search
        </div>
        <input type='text' name="search" value = {searchvalue} onChange = {(event)=>{
          setSearchvalue(event.target.value)
        }}  className='search-box'/>
      </section>
    {/* Search Section Ends */}

    {/* Trending Section Starts */}

    <section className='trending-section'>
    <div className='trending-container'>

      <div className='trending-text'> 
        Trending Movies
      </div>
        <div className='slideshow'>
            <div className='movie'>

                <MovieList/>

            </div>
            
        </div>
      
      </div>
      
    </section>


    {/* Trendign section ends */}

    {/* Latest Section Starts */}


    <section className='latest-section'>

      <Latest />
      
    </section>

    {/* Latest Section Ends */}

    </BrowserRouter>
  )
}

export default App;
