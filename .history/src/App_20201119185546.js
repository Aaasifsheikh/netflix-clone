import "./App.css";
import request from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals/>
      <Row title="Trending Now" fetchUrl={request.}/>
    </div>
  );
}

export default App;
