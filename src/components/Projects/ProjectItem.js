import React from 'react';
import './ProjectItem.css';


const ProjectItem = ({title, video, videoAlt, isOpen, liveLink, setIsOpen, setActiveProject}) => {

    const showSidebar = () => {
        setIsOpen(!isOpen);
        setActiveProject(title);
    }

  return (
    <div className="project">
        <video className="background-video" muted autoPlay loop>
            <source src={video} type="video/mp4" alt={videoAlt} />
            Sorry, your browser doesn't support videos.
        </video>
        <div className="project-info">
            <h5>{title}</h5>
            <div className="inline">
                <a href={liveLink} target="_blank" rel="noopener noreferrer"><button className="black">Live demo</button></a>
                <button onClick={showSidebar} className="light">See more</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem