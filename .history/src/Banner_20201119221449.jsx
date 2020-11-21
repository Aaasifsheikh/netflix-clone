import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      re
    }
    fetchData();
  }, []);
  return <header></header>;
}

export default Banner;
