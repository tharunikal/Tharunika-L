import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.header h1 span');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('visible');
      }, 50 * index);
    });
  }, []);

  return (
    <header className="header">
      <h1 aria-label="Hello">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
      </h1>
      <p>nice to meet you, this is Tharunika L.</p>
    </header>
  );
};

export default Header;
