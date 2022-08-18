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
            <ul className="nav-links">
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