import React, { useState } from 'react';
import './Navigation.css'
import {FiMenu} from 'react-icons/fi';

const Navigation = () => {

  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    window.scrollY >= window.innerHeight ? setNavColor(true) : setNavColor(false)
  }
  window.addEventListener("scroll", changeNavColor);


  const [showNav, setShowNav] = useState(false);
  const handleNavChange = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };
 

  return (
    <div className={navColor ? "sticky-wrapper-light" : "sticky-wrapper"}>
      <div className="container">
        <nav>
            <div className="mobile-navbar">
              <div className="brand">BF</div>
              <div className="mobile-icon">
                <button onClick={handleNavChange}><FiMenu /></button>
              </div>
            </div>
            <ul className="nav-links" style={{
              display: !showNav ? '' : 'flex',
            }}>
                <li><button onClick={handleNavChange}>X</button></li>
                <li><a href="#home"><button onClick={handleNavChange}>Home</button></a></li>
                <li><a href="#about"><button onClick={handleNavChange}>About</button></a></li>
                <li><a href="#work"><button onClick={handleNavChange}>Work</button></a></li>
                <li><a href="#contact"><button onClick={handleNavChange}>Contact</button></a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation