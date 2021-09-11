import React from "react";
import "./ScoreButton.css";

function ScoreButton(props) {
  return(
    <button
    className="btn btn-default"
    disabled={props.disabled}
    onClick={props.handleScoreClick}
  >
    ✔
  </button>
  );
}

export default ScoreButton;