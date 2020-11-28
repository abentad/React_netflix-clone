import React, { useEffect, useState } from "react";
import axios from "./axios";
//import the css
import "./row.css";

const basePosterUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  //a snippet of code which runs based on a specific condition
  useEffect(() => {
    //if [] is blank, then it means run once when the Row loads and dont run it again
    //an async function to fetchdata from the api using axios
    async function fetchData() {
      //it will combine the url in axios.js file and then sends a get request by appending the url in the parameter that is fetchUrl
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  return (
    <div className="row">
      {/* we are displaying the title that is passed through the function */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* div for the poster(s) */}
        {movies.map((movie) => {
          //movie.poster_path is the path to which the api returns the poster image for the movie
          return (
            <img
              key={movie.id}
              className="row__poster"
              src={basePosterUrl + movie.poster_path}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* the whole container for the row */}
    </div>
  );
}

export default Row;

//poster url
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
