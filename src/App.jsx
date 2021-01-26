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
    <div className="App">
      <Nav />
      <Router >
        <Home />
        <Animations />
        <Illustrations />
        <Infographics />
        <About />
      </Router>

    </div>
  );
}

export default App;
