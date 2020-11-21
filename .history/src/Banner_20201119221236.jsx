import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
    const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.fetchNetflixOriginal);
    setMovie()
    }
    fetchData();
  }, []);
  return <header></header>;
}

export default Banner;
