import React from 'react';
import { Link } from 'react-router-dom';
import './Nav-bar.css';

const NavBar = () => (
  <section className="NavBar-Container">
    <div>
      <h1 className="NavBar-title">Math Magician</h1>
    </div>
    <div className="Container-links">
      <Link className="links" to="/Home">Home</Link>
      <Link className="links" to="/CalculatorPage">Calculator</Link>
      <Link className="links" to="/Quote">Quote</Link>
    </div>
  </section>
);

export default NavBar;
