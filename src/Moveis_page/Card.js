import React from 'react'
import ReactPlayer from "react-player";
import './Card.css'
import { useState } from 'react';
const Card = ({movies,videoUrl}) => {

 const[ishover,athover]=useState(false)

  function handleMouseEnter(){
    athover(true)
  }

  function handleMouseLeave (){
    athover(false)
  }
  
  return (
    <div className='main1'>
    
    <div className='top-movei-class'>    
    <div className='moveis'>           
      <img
        src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        height="300px"
        width="200px"
        alt={movies.original_title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

      />    
  </div>  
  
  </div>
  {ishover &&
  <div className='video-player'>
    <ReactPlayer
    url={videoUrl}
    controls={true}
    playing={true}
    >

    </ReactPlayer>
  </div>
  }

   </div>
  )
  
}

export default Card
