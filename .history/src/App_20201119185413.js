import "./App.css";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl/>
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
