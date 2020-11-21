import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/netflix" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
