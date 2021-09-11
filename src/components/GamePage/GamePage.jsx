import React from "react";
import GameBoard from "../GameBoard/GameBoard";
import './GamePage.css';

function GamePage (props) {
  return (
    <div className="GamePage">
      <div className="flex-h align-flex-end">
        <GameBoard
          colors={props.colors}
          guesses={props.guesses}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
        />
      </div>
    </div>
  );
}

export default GamePage;