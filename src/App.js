import React, { useState } from "react";
import GamePage from './components/GamePage/GamePage';
import Rules from './components/Rules/Rules';
import './App.css';

const colors = ['#FFB400', '#FF5A5F', '#8CE071', '#00D1C1', '#007A87', '#7B0051'];

function App() {
  const [ guesses, setGuesses ] = useState([getNewGuess()]);
  const [ selColorIdx, setSelColorIdx] = useState(0);
  const [ defeat, setDefeat] = useState(false);
  const [ code, setCode ] = useState(genCode());

  let winTries = getWinTries();


  function getInitialState() {
    setSelColorIdx(0);
    setDefeat(false);
    setGuesses([getNewGuess()]);
    setCode(genCode());
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

    if (perfect !== 4 && guesses.length < 10) {
      guessesCopy.push(getNewGuess());
    }

    setGuesses(guessesCopy);

    if (guesses.length >= 10) {
      setDefeat(true);
      return;
    }
  }

  return (
    <div>
      <header className='header-footer'>M A S T E R M I N D</header>
      <Rules />
      <GamePage
          winTries={winTries}
          defeat={defeat}
          colors={colors}
          selColorIdx={selColorIdx}
          guesses={guesses}
          handleColorSelection={handleColorSelection}
          handleNewGameClick={handleNewGameClick}
          handlePegClick={handlePegClick}
          handleScoreClick={handleScoreClick}
      />
    </div>
  );
}

export default App;
