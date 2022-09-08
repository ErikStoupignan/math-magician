import React from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick(event) {
    const buttonUse = event.target.textContent;
    const result = calculate(this.state, buttonUse);
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
