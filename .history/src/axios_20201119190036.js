import axios from "axios";

// base url to make requests to the the movie database
const instance = axios.created({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
