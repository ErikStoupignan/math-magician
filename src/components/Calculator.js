/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/Calculator.css';
// import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="Container-calculator">
        <p className="screen">13091996</p>
        <Buttons />
      </div>
    );
  }
}

const Buttons = () => {
  return (
    <div className="Container-buttons">
      <button type="button" className="btn0">0</button>
      <button type="button" className="btn1">1</button>
      <button type="button" className="btn2">2</button>
      <button type="button" className="btn3">3</button>
      <button type="button" className="btn4">4</button>
      <button type="button" className="btn5">5</button>
      <button type="button" className="btn6">6</button>
      <button type="button" className="btn7">7</button>
      <button type="button" className="btn8">8</button>
      <button type="button" className="btn9">9</button>
      <button type="button" className="btn-add orange">+</button>
      <button type="button" className="btn-less orange">-</button>
      <button type="button" className="btn-division orange">/</button>
      <button type="button" className="btn-multiplication orange">*</button>
      <button type="button" className="btn-percentage">%</button>
      <button type="button" className="btn-moremin">+/-</button>
      <button type="button" className="btn.dot">.</button>
      <button type="button" className="btn-equal orange">=</button>
      <button type="button" className="btn-Ac">AC</button>
    </div>
  );
};
