import React from 'react'

const MoviesList = (props) =>{
    return (
        <>
            {props.movies.map((movie, index)=>

                <img src={movie.Poster} alt = "movie-name" className='movie-name'></img>
            )}
        </>
    )
}

export default MoviesList