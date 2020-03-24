import React, { Component } from "react";
import { Link } from "react-router-dom";

const Rules = props => {
  return (
    <div>
      <Link to="/" className="board-link">
        Go back to scoreboard
      </Link>
      <Link to="/board" className="board-link">
        Start new game
      </Link>
      <div className="rules">
        <h1>Ultimate Tic Tac Toe</h1>
        <h3>Otherwise known as Tic Tac Toe Ten</h3>
        <p>
          Each small 3 × 3 tic-tac-toe board is referred to as a local board,
          and the larger 3 × 3 board is referred to as the global board.
        </p>
        <p>
          The game starts with X playing wherever they want in any of the 81
          empty spots. This move "sends" their opponent to its relative
          location. For example, if X played in the top right square of their
          local board, then O needs to play next in the local board at the top
          right of the global board. O can then play in any one of the nine
          available spots in that local board, each move sending X to a
          different local board.
        </p>
        <p>
          If a move is played so that it is to win a local board by the rules of
          normal tic-tac-toe, then the entire local board is marked as a victory
          for the player in the global board. Once a local board is won by a
          player or it is filled completely, no more moves may be played in that
          board.
        </p>
        <p>
          If a player is sent to such a board, then that player may play in any
          other board. Game play ends when either a player wins the global board
          or there are no legal moves remaining, in which case the game is a
          draw.
        </p>
      </div>
    </div>
  );
};

export default Rules;
