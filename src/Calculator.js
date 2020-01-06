import React, { useState } from 'react';
import Interface from './Interface';

const Calculator = () => {
  const handleClick = e => {
    if (restartComputation) {
      setLastValue(e.target.textContent);
      setComputation(e.target.textContent);
      setRestartComputation(false);
    } else if (
      isNaN(parseInt(e.target.textContent)) ||
      isNaN(parseInt(lastValue))
    ) {
      setComputation(computation + ' ' + e.target.textContent);
    } else {
      setComputation(computation + e.target.textContent);
    }
    setLastValue(e.target.textContent);
  };

  const handleEquals = () => {
    let sanitizedString = computation.replace(/x/g, '*');
    let evaluation = eval(sanitizedString);
    if (!Number.isInteger(evaluation)) {
      evaluation = evaluation.toFixed(2);
    }
    setComputation(evaluation);
    setRestartComputation(true);
  };

  const handleClear = () => {
    setComputation('');
    setRestartComputation(false);
    setLastValue('');
  };

  const [computation, setComputation] = useState('');
  const [restartComputation, setRestartComputation] = useState(false);
  const [lastValue, setLastValue] = useState('');

  return (
    <div>
      <header className='header'>
        <h1>Calculator App</h1>
      </header>
      <Interface
        computation={computation}
        handleClear={handleClear}
        handleClick={handleClick}
        handleEquals={handleEquals}
      />
    </div>
  );
};

export default Calculator;
