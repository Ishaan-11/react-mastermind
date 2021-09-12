import React, { useState } from "react";
import './Rules.css';

function Rules() {
  const [ showRule, setShowRule ] = useState(false);
  const link = 'https://en.wikipedia.org/wiki/Mastermind_(board_game)';
  const rulesTitle = showRule ? 'Show Rules' : 'Hide Rules';
  const style = {
    display: showRule ? 'none' : 'block',
  }

  function toogleRules() {
    setShowRule(prevValue => !prevValue);
  }

  return(

    <div className='rules'>
      <h3 onClick={toogleRules}> {rulesTitle} </h3>
      <p style={style}> Try to guess the pattern, in both order and
      color, within ten turns. After submitting a row,
      a small black dot is shown for each circle
      in a correct position and color. A white dot
      indicates the existence of a correct color in an
      incorrect position. <br />
      More info on <a href={link}>Wikipedia</a>.
      </p>
    </div>
  );
}

export default Rules;