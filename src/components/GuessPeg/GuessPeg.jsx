import React from "react";
import './GuessPeg.css';

function GuessPeg(props) {
  return (
    <div
      className="peg"
      style={{
        backgroundColor: props.color,
        border: props.color ? `1px solid ${props.color}`: '1px dashed grey',
        cursor: props.currentGuess && 'pointer'
      }}
      onClick={props.currentGuess ? props.handlePegClick : null}
    />
  );
}

export default GuessPeg;