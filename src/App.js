import React from "react";
import "./App.css";
import Home from "./components/Home";
import Feedback from "./components/Feedback";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Mycontext from "./context/Mycontext";

function App() {
  return (
    <Router>


  <h1>UseContext </h1>
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/feedback">Feedback</Link>
      </li>
      <Mycontext>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/feedback" component={Feedback} />
      </Switch>
      </Mycontext>
    </Router>
  );
}

export default App;
