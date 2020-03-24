import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Storage } from "./../storage/storage";
import SmallBoard from "./smaller-board";
import * as utils from "../functions/functions";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: Array(9).fill(null),
      boxesOne: Array(9).fill(null),
      boxesTwo: Array(9).fill(null),
      boxesThree: Array(9).fill(null),
      boxesFour: Array(9).fill(null),
      boxesFive: Array(9).fill(null),
      boxesSix: Array(9).fill(null),
      boxesSeven: Array(9).fill(null),
      boxesEight: Array(9).fill(null),
      boxesNine: Array(9).fill(null),
      history: [],
      xIsNext: true
    };

    this.updateSate = this.updateSate.bind(this);
  }

  storage = new Storage();

  updateSate(currentBoard, boxes, history) {
    this.setState({
      [currentBoard]: boxes,
      history: history,
      xIsNext: !this.state.xIsNext
    });
  }

  handleBoardRestart = () => {
    this.setState({
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true
    });
  };

  render() {
    let boxesOne = "boxesOne";
    let boxesTwo = "boxesTwo";
    let boxesThree = "boxesThree";
    let boxesFour = "boxesFour";
    let boxesFive = "boxesFive";
    let boxesSix = "boxesSix";
    let boxesSeven = "boxesSeven";
    let boxesEight = "boxesEight";
    let boxesNine = "boxesNine";

    return (
      <div>
        <Link to="/" className="board-link">
          Go back to scoreboard
        </Link>
        <Link to="/rules" className="board-link">
          View the rules
        </Link>
        <div className="board-wrapper">
          <div className="board">
            <h2 className="board-heading">Status Should be here</h2>
            <div className="board-row">
              <SmallBoard
                board={boxesOne}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesOne}
                value={this.state.boards[0]}
                updateSate={this.updateSate}
              />
              <SmallBoard
                board={boxesTwo}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesTwo}
                value={this.state.boards[1]}
                updateSate={this.updateSate}
              />
              <SmallBoard
                board={boxesThree}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesThree}
                value={this.state.boards[2]}
                updateSate={this.updateSate}
              />
            </div>

            <div className="board-row">
              <SmallBoard
                board={boxesFour}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesFour}
                value={this.state.boards[3]}
                updateSate={this.updateSate}
              />

              <SmallBoard
                board={boxesFive}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesFive}
                value={this.state.boards[4]}
                updateSate={this.updateSate}
              />

              <SmallBoard
                board={boxesSix}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesSix}
                value={this.state.boards[5]}
                updateSate={this.updateSate}
              />
            </div>

            <div className="board-row">
              <SmallBoard
                board={boxesSeven}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesSeven}
                value={this.state.boards[6]}
                updateSate={this.updateSate}
              />

              <SmallBoard
                board={boxesEight}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesEight}
                value={this.state.boards[7]}
                updateSate={this.updateSate}
              />

              <SmallBoard
                board={boxesNine}
                xIsNext={this.state.xIsNext}
                history={this.state.history}
                boxes={this.state.boxesNine}
                value={this.state.boards[8]}
                updateSate={this.updateSate}
              />
            </div>
          </div>
          <div className="board-history">
            <h2 className="board-heading">Moves history:</h2>
            <ul className="board-historyList">
              {this.state.history.length === 0 && (
                <span>No moves to show.</span>
              )}

              {this.state.history.length !== 0 &&
                this.state.history.map((move, index) => {
                  return (
                    <li key={index}>
                      Move {index + 1}: <strong>{move}</strong>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="board-footer">
            <button className="btn" onClick={this.handleBoardRestart}>
              Start new game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
