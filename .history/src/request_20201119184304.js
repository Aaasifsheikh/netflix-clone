const API_KEY = "a1a30cddf9378347c51dc3b763046559";

const request ={
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
}