import React from "react";
import styles from "./ScoreButton.css";

function ScoreButton(props) {
  return(
    <button
    className={`${styles.button} btn btn-default`}
    disabled={props.disabled}
    onClick={props.handleScoreClick}
  >
    ✔
  </button>
  );
}

export default ScoreButton;