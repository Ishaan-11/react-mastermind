import React from "react";
import GameBoard from "../GameBoard/GameBoard";
import ColorPicker from "../ColorPicker/ColorPicker";
import NewGameButton from "../NewGameButton/NewGameButton";
import './GamePage.css';

function GamePage (props) {
  const footerMessage = (props.defeat ? 'You  lose!' : (props.winTries ? `You Won in ${props.winTries} Guesses!` : 'Good Luck!'));

  return (
    <div className="GamePage">
      <div className="flex-h align-flex-end">
        <GameBoard
          colors={props.colors}
          defeat={props.defeat}
          guesses={props.guesses}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
        />
        <div className='GamePage-controls'>
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <NewGameButton handleNewGameClick={props.handleNewGameClick}/>
        </div>
      </div>
      <footer className='header-footer'>
        {footerMessage}
      </footer>
    </div>
  );
}

export default GamePage;