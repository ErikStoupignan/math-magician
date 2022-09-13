import React from 'react';
import Calculator from '../CalculatorWorking/Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => (
  <section className="CalculatorPage-Container">
    <div className="Container-title">
      <h2 className="CalculatorPage-title">Let&apos;s do some Math!</h2>
      <p className="CalculatorPage-paragraph">Use your own keyboard!</p>
    </div>
    <div className="CalculatorPage-AppContainer">
      <Calculator />
    </div>
  </section>
);

export default CalculatorPage;
