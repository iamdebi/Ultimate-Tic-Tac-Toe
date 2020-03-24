import React, { Component } from "react";
import Box from "./board-box";
import * as utils from "../functions/functions";

class SmallerBoard extends Component {
  handleClick(index) {
    const boxes = this.props.boxes.slice();
    let history = this.props.history;
    if (utils.findWinner(boxes) || boxes[index]) {
      return;
    }
    if (utils.areAllBoxesClicked(boxes) === true) {
      return;
    }
    boxes[index] = this.props.xIsNext ? "x" : "o";
    history.push(this.props.xIsNext ? "x" : "o");

    this.props.updateSate(this.props.board, boxes, history);
  }

  render() {
    return (
      <div className="inner-board">
        <div className="board-row">
          <Box
            value={this.props.boxes[0]}
            onClick={() => this.handleClick(0)}
          />
          <Box
            value={this.props.boxes[1]}
            onClick={() => this.handleClick(1)}
          />
          <Box
            value={this.props.boxes[2]}
            onClick={() => this.handleClick(2)}
          />
        </div>

        <div className="board-row">
          <Box
            value={this.props.boxes[3]}
            onClick={() => this.handleClick(3)}
          />
          <Box
            value={this.props.boxes[4]}
            onClick={() => this.handleClick(4)}
          />
          <Box
            value={this.props.boxes[5]}
            onClick={() => this.handleClick(5)}
          />
        </div>

        <div className="board-row">
          <Box
            value={this.props.boxes[6]}
            onClick={() => this.handleClick(6)}
          />
          <Box
            value={this.props.boxes[7]}
            onClick={() => this.handleClick(7)}
          />
          <Box
            value={this.props.boxes[8]}
            onClick={() => this.handleClick(8)}
          />
        </div>
      </div>
    );
  }
}

export default SmallerBoard;
