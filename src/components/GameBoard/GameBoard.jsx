import React from "react";
import GuessRow from "../GuessRow/GuessRow";
import './GameBoard.css';

function GameBoard (props) {
  return (
    <div className="GameBoard">
      {props.guesses.map((guess, idx) =>
        <GuessRow
          guess={guess}
          defeat={props.defeat}
          colors={props.colors}
          rowIdx={idx}
          currentGuess={idx === (props.guesses.length - 1)}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
          key={idx}
        />
      )}
    </div>
  );
}

export default GameBoard;