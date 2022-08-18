import React from 'react';
import "./Sidebar.css";
import ListOfProjects from '../Projects/listOfProjects';

const Sidebar = ({isOpen, setIsOpen, activeProject}) => {

    const {id, title, codeLink, image, imageAlt, tags, details, challenges, lessons} = ListOfProjects.find((project) => {
        return project.title === activeProject;
    });

    const hideSidebar = () => {
        setIsOpen(false);
    }

    const tagList = tags.map((tag) => {
        return <li key={tag}><p className="light">{tag}</p></li>
    })

    return (
    <div className={isOpen === true ? "sidebar-open" : "sidebar-closed"}>
        <div className="sidebar-content">
            <button className="close-button" onClick={hideSidebar}>
                <p><b>x</b> close</p>
            </button>
            <h3>{title}</h3>
            <div className="inline">
                <button className="black" a href={"/projects/" + id} target="_blank">Live demo</button>
                <button className="light" a href={codeLink}>View code</button>
            </div>
            <img src={image} alt={imageAlt} />
            <ul className="project-tags">
                {tagList}
            </ul>
            <h4>Details</h4>
            <p className="light">
                {details}
            </p>
            <h4>Challenges</h4>
            <p className="light">
                {challenges}
            </p>
            <h4>What I learned</h4>
            <p className="light">
                {lessons}
            </p>
        </div>
    </div>
  )
}

export default Sidebar