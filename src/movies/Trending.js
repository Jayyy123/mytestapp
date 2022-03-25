// import axios from 'axios';
// import React, { useState, useEffect } from 'react'


const Trending = (props) => {

  return (
    <div className='trending-container'>

    <div className='trending-text'> 
        Trending Movies
    </div>
    <div className='slideshow'>
        <div className='movie'>

            <props.MovieList/>

        </div>
        
    </div>
    
    </div>
    )
}
export default Trending;