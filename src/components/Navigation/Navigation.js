import React, { useState } from 'react';
import './Navigation.css'

const Navigation = () => {

  // change nav color on scroll
  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    window.scrollY >= window.innerHeight ? setNavColor(true) : setNavColor(false)
  }
  window.addEventListener("scroll", changeNavColor);

  return (
    <div className={navColor ? "sticky-wrapper-light" : "sticky-wrapper"}>
      <div className="container">
        <nav>
            <div className="brand">BF</div>
            <span className="h-line"></span>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation