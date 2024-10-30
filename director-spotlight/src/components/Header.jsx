import React from 'react';
import logo from '../img/logo.png';
import '../App.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <div id="page-container">
        <div className="intro-text">
            <p className="intro-p">
            This page invites you to explore the unique styles and iconic films of Quentin Tarantino, Gaspar Noé, Richard Linklater, and Sofia Coppola. Each section is thoughtfully curated with the writer's favorites, showcasing the distinct aesthetics of these cinematic maestros through deliberate color choices.
            </p>
        </div>
      </div>
    </header>
  );
}

export default Header;