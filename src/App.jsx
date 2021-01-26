import "./App.css";
import Nav from "./Components/Nav";
import Animations from "./Components/Animations";
import Illustrations from "./Components/Illustrations";
import Infographics from "./Components/Infographics";
import About from "./Components/About";
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/animations" component={Animations} />
          <Route path="/illustrations" component={Illustrations} />
          <Route path="/infographics" component={Infographics} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
