import React from 'react'
import './Movie.css'

const Movie = (props) => {
  return (
    <div className='movie'>
      <img src={props.img}/>
      <p className='title'>{props.title}</p>
      <p>Year : {props.year}</p>
    </div>
  )
}

export default Movie
