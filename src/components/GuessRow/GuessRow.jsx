import React from "react";
import ScoreButton from "../ScoreButton/ScoreButton";
import GuessScore from "../GuessScore/GuessScore";
import GuessPegs from "../GuessPegs/GuessPegs";
import styles from './GuessRow.css';


function GuessRow (props) {
  return(
    <div className={styles.GuessRow}>
      <div
        className={styles.rowNum}
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
        props.currentGuess && props.guess.score.perfect !== 4 ?
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