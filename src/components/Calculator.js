/* eslint-disable class-methods-use-this */
// import React from 'react';
import '../styles/Calculator.css';
import { useEffect, useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 'Welcome', next: null, operation: null });

  // This function is if we want use the mouse on the screnn
  const HandleClick = (event) => {
    const buttonUse = event.target.textContent;
    const result = calculate(state, buttonUse);
    setState(result);
  };

  // This function filter the buttons from the keyboard
  const keycontrol = (event) => {
    let buttonPress = event.key;

    const regex = /([0-9]|\+|-|\*|\/|Enter|Backspace|\.|%)/g;
    if (regex.test(buttonPress) === false) return;

    if (buttonPress === 'Enter') {
      buttonPress = '=';
    }
    if (buttonPress === 'Backspace') {
      buttonPress = 'AC';
    }
    if (buttonPress === '/') {
      buttonPress = '÷';
    }
    const result = calculate(state, buttonPress);
    setState(result);
  };

  // This way is how we apply Eventlistener on the DOM using Hooks
  useEffect(() => {
    document.addEventListener('keydown', keycontrol);
    return () => {
      document.removeEventListener('keydown', keycontrol);
    };
  });

  const { total, next, operation } = state;
  return (
    <div className="Container-calculator">
      <p className="screen">
        {total}
        {operation}
        {next}
      </p>
      <Buttons handler={HandleClick} />
    </div>
  );
};

/* eslint-disable react/prop-types */
const Buttons = (props) => {
  const { handler } = props;
  return (
    <div className="Container-buttons">
      <button onClick={handler} type="button" className="btn0">0</button>
      <button onClick={handler} type="button" className="btn2">2</button>
      <button onClick={handler} type="button" className="btn1">1</button>
      <button onClick={handler} type="button" className="btn3">3</button>
      <button onClick={handler} type="button" className="btn4">4</button>
      <button onClick={handler} type="button" className="btn5">5</button>
      <button onClick={handler} type="button" className="btn6">6</button>
      <button onClick={handler} type="button" className="btn7">7</button>
      <button onClick={handler} type="button" className="btn8">8</button>
      <button onClick={handler} type="button" className="btn9">9</button>
      <button onClick={handler} type="button" className="btn-add orange">+</button>
      <button onClick={handler} type="button" className="btn-less orange">-</button>
      <button onClick={handler} type="button" className="btn-division orange">÷</button>
      <button onClick={handler} type="button" className="btn-multiplication orange">*</button>
      <button onClick={handler} type="button" className="btn-percentage">%</button>
      <button onClick={handler} type="button" className="btn-moremin">+/-</button>
      <button onClick={handler} type="button" className="btn.dot">.</button>
      <button onClick={handler} type="button" className="btn-equal orange">=</button>
      <button onClick={handler} type="button" className="btn-Ac">AC</button>
    </div>
  );
};

export default Calculator;
