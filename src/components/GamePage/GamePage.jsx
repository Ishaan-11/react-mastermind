import React from "react";
import GameBoard from "../GameBoard/GameBoard";
import ColorPicker from "../ColorPicker/ColorPicker";
import GameTimer from "../GameTimer/GameTimer";
import NewGameButton from "../NewGameButton/NewGameButton";
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
        <div className='GamePage-controls'>
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <GameTimer
            elapsedTime={props.elapsedTime}
            handleTimerUpdate={props.handleTimerUpdate}
            isTiming={props.isTiming}
          />
          <NewGameButton handleNewGameClick={props.handleNewGameClick}/>
        </div>
      </div>
      <footer className='header-footer'>
        {(props.winTries ? `You Won in ${props.winTries} Guesses!` : 'Good Luck!')}
      </footer>
    </div>
  );
}

export default GamePage;