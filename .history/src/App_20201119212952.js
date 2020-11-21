import "./App.css";
import request from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={request.fetchTrending} />
      <Row title="Horr" fetchUrl={request.fetchTrending} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
