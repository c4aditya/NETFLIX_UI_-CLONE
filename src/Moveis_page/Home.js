import React, { useEffect, useState } from "react";
import "./Home.css";
import UpcomingMovies from "./UpcomingMovies";

import Card from "./Card";

const Home = () => {
  // const API_KEY="475b320121d209475555b1398bb29f3d"
  const [movei, setMovei] = useState([]);
  // use effect baar baar call hoga jb jb page reliade hoga
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=475b320121d209475555b1398bb29f3d&language=en-US&page=1`
        );
        const finaldata = await data.json();
        console.log(finaldata);
        setMovei(finaldata.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

const [upcomingMovies,SetUpcomingMovies]=useState([])
  useEffect(() => {
    const UpcomingMovies = async () => {
      try {
        const Upcoming= await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=475b320121d209475555b1398bb29f3d&language=en-US&page=2`
        );
        const upcoming_movies_data = await Upcoming.json();
        console.log(upcoming_movies_data );
        SetUpcomingMovies(upcoming_movies_data.results);
      } catch (err) {
        console.log(err);
      }
    };

    UpcomingMovies();
  }, []);

  





  // yha pe har movei ka url ah jo index value se access hoga jb
  const moveisWithVideos = movei.map((movies, index) => {
    let URL = "";

    if (index === 0) {
      URL = "https://www.youtube.com/watch?v=73_1biulkYk";
    } 
    else if (index === 1) 
      {
      URL = "https://www.youtube.com/watch?v=LEjhY15eCx0";
    } 
    else if (index === 2)
       {
      
        URL = "https://www.youtube.com/watch?v=clzgt3gyxoY";
    } 
    else if (index === 3) {
      URL = "https://www.youtube.com/results?search_query=me+4+trailer";
    }
     else if (index === 4) {

      URL = "https://www.youtube.com/watch?v=wdok0rZdmx4";
    }
     else if (index === 5) {

      URL = "https://www.yflzE8outube.com/watch?v=YPY7J-";
    } 
    

  
    return { ...movies, URL };
  });

  return (
    <div className="top">
      <div className="upper-home">
        <nav className="nev1">
          <h1>SUPERFLIX</h1>
          <ul>
            <li>Home</li>
            <li>My List</li>
            <li>Movies</li>
            <li>Shows</li>
          </ul>
        </nav>
      </div>
      <div className="upper-image">
        <img
          src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQKri0dzsR8wiY2jGyzCTeUrELQchP6xMq92CiFr8uhR80ZvGfs_C1gDWGg8Hfmb7TTbsjvrPE_crvyj9yPHJy4yJAuBDkaG2mjC.webp?r=b7b"
          alt="image not found"
        ></img>

        <div className="upper-image-content">
          <h1>The Umberella Acedemy</h1>
          <h2>Top 2 Show Trending In India </h2>
          <p>
            Reunited by their father's death, estranged siblings with
            extraordinary powers uncover shocking family secrets — and a looming
            threat to humanity.
          </p>

          <div className="upper-buttons">
            <button className="play">Play</button>
            <button className="more">More </button>
          </div>
        </div>
      </div>
      <div className="movei-type">
        <h1> Tranding Movies.....</h1>

        <br></br>

        <div className="moveis">
          {moveisWithVideos.map((data) => (
            <Card movies={data} key={data.id} videoUrl={data.URL} />
          ))}
        </div>
        <div className="movei-type">
        <h1> More Movies..... </h1>

        <br></br>
        </div>
        <div className="upcomingmoveis">
        {upcomingMovies.map((anevalemovei)=>(
          <UpcomingMovies upcomingmovies={anevalemovei} key={anevalemovei.id}></UpcomingMovies>

        ))

        }
          
        </div>
      </div>
     
    </div>
  );
};

export default Home;
