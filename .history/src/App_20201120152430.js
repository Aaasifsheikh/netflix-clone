import "./App.css";
import { BrowsRouter as Router, Route, Switch } from "react-router-dom";
import Row from "./Row";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;