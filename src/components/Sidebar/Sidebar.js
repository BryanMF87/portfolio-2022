import {React, useEffect} from 'react';
import "./Sidebar.css";
import ListOfProjects from '../Projects/listOfProjects';
// asset imports

const Sidebar = ({isOpen, setIsOpen, activeProject}) => {

    const hideSidebar = () => {
        setIsOpen(false);
    }

    const defaultProject = {
        title: "",
        liveLink: "",
        codeLink: "",
        video: "",
        videoAlt: "",
        tags: [],
        details: "",
        challenges: "",
        lessons: ""
    }

    const {title, liveLink, codeLink, video, videoAlt, tags, details, challenges, lessons} = ListOfProjects.find((project) => {
            return project.title === activeProject;
    }) || defaultProject;

    useEffect(() => {
        document.querySelector(".sidebar-video").load();
    }, [title]);

    const tagList = tags.map((tag) => {
        return <li key={tag}><p className="light">{tag}</p></li>
    }) || {};

        return (
            <div className={isOpen === true ? "sidebar-open" : "sidebar-closed"}>
                <div className="sidebar-content">
                    <button className="close-button" onClick={hideSidebar}>
                        <p><b>x</b> close</p>
                    </button>
                    <h3>{title}</h3>
                    <div className="inline">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer"><button className="black">Live demo</button></a>
                        <a href={codeLink} target="_blank" rel="noopener noreferrer"><button className="black-transparent">View code</button></a>
                    </div>
                    <video className="sidebar-video" muted autoPlay loop>
                        <source src={video} type="video/mp4" alt={videoAlt} />
                        Sorry, your browser doesn't support videos.
                    </video>
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