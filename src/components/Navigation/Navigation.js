import React, { useState, useEffect } from 'react';
import './Navigation.css'
import {CgClose} from 'react-icons/cg';
import {FiMenu} from 'react-icons/fi';

const Navigation = () => {

  // change nav color on scroll
  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    window.scrollY >= window.innerHeight ? setNavColor(true) : setNavColor(false)
  }
  window.addEventListener("scroll", changeNavColor);


  // change mobileIcon & reveal nav-links on click
  const [mobileIcon, setMobileIcon] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const changeMobileIcon = () => {
    setMobileIcon(!mobileIcon);
  };
 

  return (
    <div className={navColor ? "sticky-wrapper-light" : "sticky-wrapper"}>
      <div className="container">
        <nav>
            <div className="mobile-navbar">
              <div className="brand">BF</div>
              <div className="mobile-icon">
                <button onClick={changeMobileIcon}>{mobileIcon ? <FiMenu /> : <CgClose />}</button>
              </div>
            </div>
            <ul className="nav-links" style={{
              display: mobileIcon ? '' : 'flex',
            }}>
                <li><a href="#home"><button>Home</button></a></li>
                <li><a href="#about"><button>About</button></a></li>
                <li><a href="#work"><button>Work</button></a></li>
                <li><a href="#contact"><button>Contact</button></a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation