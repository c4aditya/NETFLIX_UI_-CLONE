import React from 'react'

const UpcomingMovies = ({upcomingmovies}) => {
    
  return (
    // <div className='upcomingmovies1'>
    //   <img 
    //     src={`https://image.tmdb.org/t/p/w500${upcomingmovies.poster_path}`}
    //     height="300px"
    //     width="200px"
    //     alt={upcomingmovies.original_title}></img>
    // </div>



  
    
 
    <div className='upcomingmoveis'>           
      <img
        src={`https://image.tmdb.org/t/p/w500${upcomingmovies.poster_path}`}
        height="300px"
        width="200px"
        alt={upcomingmovies.original_title}
       
      /> 
      </div>
      
  )
}

export default UpcomingMovies
