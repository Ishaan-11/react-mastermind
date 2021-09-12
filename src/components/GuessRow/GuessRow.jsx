import React from "react";
import ScoreButton from "../ScoreButton/ScoreButton";
import GuessScore from "../GuessScore/GuessScore";
import GuessPegs from "../GuessPegs/GuessPegs";
import './GuessRow.css';


function GuessRow (props) {
  return(
    <div className="GuessRow">
      <div
        className="rowNum"
        style={{color: props.currentGuess ? 'black' : 'lightgrey'}}
      >
        {props.rowIdx + 1}
      </div>
      <GuessPegs
        colors={props.colors}
        code={props.guess.code}
        currentGuess={props.currentGuess}
        handlePegClick={props.handlePegClick}
      />
      {
       !props.defeat && props.currentGuess && props.guess.score.perfect !== 4 ?
          <ScoreButton
            disabled={props.guess.code.includes(null)}
            handleScoreClick={props.handleScoreClick}
          /> :
          <GuessScore score={props.guess.score} />
      }
    </div>
  );
}

export default GuessRow;