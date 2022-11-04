import './homePage.css';
import React from 'react';
// import components
import ListOfProjects from '../../components/Projects/listOfProjects';
import ProjectItem from '../../components/Projects/ProjectItem';
// import icons
import { FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
// import assets
import me from '../../assets/me.png';
import resume from '../../assets/resume2022.pdf';


const HomePage = ({ isOpen, setIsOpen, activeProject, setActiveProject}) => {

    return (
        <main>
            <section className="hero" id="home">
                <div className="container">
                    <h1>HELLO WORLD</h1>
                    <img className="hero-image" src={me} alt=""/>
                    <div className="hero-info">
                        <h4>Bryan Fink</h4>
                        <h5 className="light">Front-end software developer</h5>
                        <div className="hero-buttons">
                            <a href="https://github.com/BryanMF87" target="_blank" rel="noopener noreferrer">
                                <button className="white">My Github</button>
                            </a>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <button className="white-transparent">My resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="about-me">
                        <h3>I can help build your next project</h3>
                        <p className="light">
                            I am a classically trained graphic designer / web developer who loves clean design and even cleaner code.
                            I’m passionate about working on creative and interesting projects, including those that promote positive social engineering and sustainable environmental practices.
                        </p>
                    </div>
                    
                    <div className="exp-banner">
                        <div className="grey-box"></div>
                        <div>
                            <div className="exp-item">
                                <h2 className="exp-num">5</h2>
                                <div className="exp-info">
                                    <p>years<br/>experience</p>
                                    <p className="light">building websites</p>
                                </div>
                            </div>
                        </div>
                        <div className="grey-box"></div>
                    </div>

                    <div className="tech-stack">
                        <h4>Current tech stack</h4>
                        <ul className="skills">
                            <li className="skill-item">Figma</li>
                            <li className="skill-item">Html</li>
                            <li className="skill-item">Css</li>
                            <li className="skill-item">JavaScript</li>
                            <li className="skill-item">React</li>
                            <li className="skill-item">Bootstrap</li>
                            <li className="skill-item">Webpack</li>
                            <li className="skill-item">Jest</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="work" id="work">
                <div className="container">
                    <div className="project-list">
                        {ListOfProjects.map((obj) => (
                            <ProjectItem
                                key={obj.id}
                                title={obj.title}
                                video={obj.video}
                                vieoAlt={obj.videoAlt}
                                liveLink={obj.liveLink}
                                codeLink={obj.codeLink}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                activeProject={activeProject}
                                setActiveProject={setActiveProject}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-info">
                        <h2>Let's get started</h2>
                        <p className="light">Thanks for taking the time to look from my website. I'm currently looking for new opprotunites so if you’d like to hire me or collaborate on a project together please reach out using the links below.</p>
                        <ul className="contact-methods">
                            <li><span className='purple'><MdAlternateEmail /></span><a href="mailto:bmfink87@gmail.com"><button>Send email</button></a></li>
                            <li><span className='purple'><FaLinkedinIn /></span><a href="https://www.linkedin.com/in/bfink777" target="_blank" rel="noopener noreferrer"><button>Social media</button></a></li>
                            <li><span className='purple'><FiDownload /></span><a href={resume} target="_blank" rel="noopener noreferrer"><button>Download resume</button></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage