import "./App.css";
import request from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals/>
      <Row title="Trending Now" fetch/>
    </div>
  );
}

export default App;
