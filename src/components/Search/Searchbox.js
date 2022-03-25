import React from 'react'

const Searchbox = (props) => {
  return (
    <div>
        <div className='search-text'>
        Search
        </div>
        <input type='text' name="search" value = {props.value} onChange = {(event)=>{
        props.setSearchvalue(event.target.value)
        }}  className='search-box'/>
    </div>
  )
}

export default Searchbox