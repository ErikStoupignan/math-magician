/* eslint-disable class-methods-use-this */
// import React from 'react';
import '../styles/Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 'Welcome',
      next: null,
      operation: null,
    };
    this.keycontrol = this.keycontrol.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keycontrol);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keycontrol);
  }

  HandleClick = (event) => {
    const buttonUse = event.target.textContent;
    const result = calculate(this.state, buttonUse);
    this.setState(result);
  };

  keycontrol(event) {
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
    const result = calculate(this.state, buttonPress);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="Container-calculator">
        <p className="screen">
          {total}
          {operation}
          {next}
        </p>
        <Buttons handler={this.HandleClick} />
      </div>
    );
  }
}

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
