import "./App.css";
import request from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.Act} />
      <Row title="Comedy Movies" fetchUrl={request.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={request.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={request.fetchTrending} />
      <Row title="Documentaries" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
