import React from "react";

function NewGameButton(props) {
  return (
    <button
      className='btn btn-default'
      onClick={props.handleNewGameClick}
    >
      New Game
    </button>
  );
}

export default NewGameButton;