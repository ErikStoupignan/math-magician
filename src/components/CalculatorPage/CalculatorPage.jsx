import React from 'react';
import Calculator from '../CalculatorWorking/Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => (
  <section>
    <div>
      <h2>Let&apos;s do some Math!</h2>
    </div>
    <div>
      <Calculator />
    </div>
  </section>
);

export default CalculatorPage;
