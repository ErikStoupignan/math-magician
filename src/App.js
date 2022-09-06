/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import './styles/Calculator.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="welcome">Welcome to my Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
