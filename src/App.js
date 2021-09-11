import React, { useState } from "react";
import './App.css';
import GamePage from './components/GamePage/GamePage';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#B7D968'];

function App() {
  const [ guesses, setGuesses ] = useState([getNewGuess()]);
  const [ selColorIdx, setSelColorIdx] = useState(0);
  const [ code, setCode ] = useState(genCode());
  const [ isTiming, setIsTiming ] = useState(true);
  const [ elapsedTime, setElapsedTime ] = useState(0);

  let winTries = getWinTries();


  function getInitialState() {
    setSelColorIdx(0);
    setGuesses(getNewGuess());
    setCode(genCode());
    setElapsedTime(0);
    setIsTiming(true);
  }

  function getWinTries() {
    let lastGuess = guesses.length - 1;
    return guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  function getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  function handleTimerUpdate() {
    setElapsedTime((preValue) => ++preValue);
  }

  function genCode() {
    let numColors = colors.length;
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * numColors));
  }

  function handleColorSelection(colorIdx){
    setSelColorIdx(colorIdx);
  }

  function handleNewGameClick() {
    getInitialState();
  }

  function handlePegClick(pegIdx) {
    let currentGuessIdx = guesses.length - 1;
    let guessesCopy = [...guesses];
    let guessCopy = {...guessesCopy[currentGuessIdx]};
    let codeCopy = [...guessCopy.code];

    codeCopy[pegIdx] = selColorIdx;
    guessCopy.code = codeCopy;
    guessesCopy[currentGuessIdx] = guessCopy;
    setGuesses(guessesCopy);
  }

  function handleScoreClick() {
    let currentGuessIdx = guesses.length - 1;

    let guessCodeCopy = [...guesses[currentGuessIdx].code];
    let secretCodeCopy = [...code];

    let perfect = 0, almost = 0;

    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        secretCodeCopy[foundIdx] = null;
      }
    });

    let guessesCopy = [...guesses];
    let guessCopy = {...guessesCopy[currentGuessIdx]};
    let scoreCopy = {...guessCopy.score};

    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;
    guessCopy.score = scoreCopy;
    guessesCopy[currentGuessIdx] = guessCopy;

    if (perfect === 4) {
      setIsTiming(false);
    } else {
      guessesCopy.push(getNewGuess());
    }


    setGuesses(guessesCopy);
    setIsTiming(perfect !== 4);
  }

  return (
    <div>
      <header className='header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
      <GamePage
          winTries={winTries}
          colors={colors}
          selColorIdx={selColorIdx}
          guesses={guesses}
          elapsedTime={elapsedTime}
          isTiming={isTiming}
          handleColorSelection={handleColorSelection}
          handleNewGameClick={handleNewGameClick}
          handlePegClick={handlePegClick}
          handleScoreClick={handleScoreClick}
          handleTimerUpdate={handleTimerUpdate}
      />
    </div>
  );
}

export default App;
