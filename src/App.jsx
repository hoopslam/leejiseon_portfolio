import "./App.css";
import Nav from "./Components/Nav";
import Illustrations from "./Components/Illustrations";
import Infographics from "./Components/Infographics";
import About from "./Components/About";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/animations" exact component={Home} />
          <Route path="/illustrations" exact component={Illustrations} />
          <Route path="/infographics" exact component={Infographics} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
