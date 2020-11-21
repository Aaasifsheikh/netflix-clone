import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/b/original/${movie?.backdrop_path}"),backgroundPosition:"center center`,
      }}
    >
        <div className="banner_contents">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner_button">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 classNames="banneer_description">{}</h1>
    </header>
  );
}

export default Banner;
