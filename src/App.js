import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "./components/board";
import Scoreboard from "./components/Scoreboard";
import "./styles/board.css";
import "./styles/box.css";
import "./styles/buttons.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
        </Router>
      </div>
    );
  }
}

export default App;
