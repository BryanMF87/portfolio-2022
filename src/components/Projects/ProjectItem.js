import React from 'react';
import './ProjectItem.css';


const ProjectItem = ({title, video, videoAlt, isOpen, codeLink, setIsOpen, setActiveProject}) => {

    const showSidebar = () => {
        setIsOpen(!isOpen);
        setActiveProject(title);
    }

  return (
    <div className="project">
        <video>
            <source src={video} type="video/mp4" alt={videoAlt} autoplay loop />
            Sorry, your browser doesn't support videos.
        </video>
        <div className="project-info">
            <h5>{title}</h5>
            <div className="inline">
                <button onClick={showSidebar} className="black">See more</button>
                <a href={codeLink} target="_blank" rel="noopener noreferrer"><button className="light">View code</button></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem