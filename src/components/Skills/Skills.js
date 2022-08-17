import React from 'react';
import './Skills.css';

const Skills = ({skillName, skillLevel}) => {

  return (
    <li className="skill-item">
        <p>{skillName}</p>
        <div className="skill-container">
            <div className="skill-level" style={{width: `${skillLevel}%`}}></div>
        </div>
    </li>
  )
}

export default Skills