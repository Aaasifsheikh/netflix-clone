import React, { useEffect } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
    const [movie, setM]
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.fetchNetflixOriginal);

    }
    fetchData();
  }, []);
  return <header></header>;
}

export default Banner;
