import React from "react";
import './GameTimer.css';

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function GameTimer(props) {

  function handleTick() {
    if (!props.isTiming) return;
    props.handleTimerUpdate();
  };

  // componentDidMount() {
  //   timerId = setInterval(handleTick, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(timerId);
  // }

  return(
    <div className="GameTimer flex-h">
      {formatTime(props.elapsedTime)}
    </div>
  );
}

export default GameTimer;