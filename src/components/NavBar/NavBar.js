import React from 'react';
import { Link } from 'react-router-dom';
import './Nav-bar.css';

const NavBar = () => (
  <section className="border">
    <div>
      <h1>Math Magician</h1>
    </div>
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/CalculatorPage">Calculator</Link>
      <Link to="/Quote">Quote</Link>
    </div>
  </section>
);

export default NavBar;
