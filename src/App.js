import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "./components/board";
import Rules from "./components/Ruless";
import Scoreboard from "./components/Scoreboard";
import "./styles/board.css";
import "./styles/box.css";
import "./styles/buttons.css";
import "./styles/rule.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
          <Route path="/rules" component={Rules} />
        </Router>
      </div>
    );
  }
}

export default App;
