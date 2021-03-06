import React, { useEffect, useState } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // it run snippet of code on the basis of specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          <img
            className="row_poster"
            src={`${base_url}${movie.poster.path}`}
            alt=""
          />;
        })}
      </div>
    </div>
  );
}

export default Row;
