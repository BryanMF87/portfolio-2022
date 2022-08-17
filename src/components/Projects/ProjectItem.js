import React from 'react';
import './ProjectItem.css';


const ProjectItem = ({title, image, isOpen, codeLink, setIsOpen, setActiveProject}) => {

    const showSidebar = () => {
        setIsOpen(!isOpen);
        setActiveProject(title);
    }


  return (
    <div className="project">
        <img src={image} />
        <div className="project-info">
            <h5>{title}</h5>
            <div className="inline">
                <button onClick={showSidebar} className="black">See more</button>
                <a href={codeLink} target="_blank"><button className="light">View code</button></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem