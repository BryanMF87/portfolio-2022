import './homePage.css';
import React from 'react';
// import components
import ListOfProjects from '../../components/Projects/listOfProjects';
import ProjectItem from '../../components/Projects/ProjectItem';
// import icons
import { FaLinkedinIn, FaFigma, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGithubAlt} from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
// import assets
import me from '../../assets/me.png';
import resume from '../../assets/resume2022.pdf';


const HomePage = ({ isOpen, setIsOpen, activeProject, setActiveProject}) => {

    return (
        <main>
            <section className="hero" id="home">
                <h1>BRYAN FINK</h1>
                <img className="hero-image" src={me} alt="professional selfie"/>
                <div className="hero-info">
                    <h3>Front-End Developer</h3>
                    <div className="hero-buttons">
                        <a href="https://github.com/BryanMF87" target="_blank" rel="noopener noreferrer">
                            <button className="white">Github</button>
                        </a>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            <button className="white-transparent">Resume</button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2>Nice to meet you</h2>
                        <div className="purple-bar"></div>
                    </div>
                    <div className="section-content">
                        <div className="intro">
                            <p className="light">Hi there! I’m Bryan Fink, a front-end developer based in Tbilisi, Georgia (the country, not the state). From concept to completion, I love creating compelling layouts and turning them into wonderful websites and web applications.</p>
                            <p className="light">I actually love it so much that I left my successful sales career in Atlanta, Georgia (the state, not the country) to move abroad and learn JavaScript and React programming. Now my goal is to continue my lifelong learning under the mentorship of an amazing company and their senior developers.</p>
                        </div>
                        <div className="tech-stack">
                            <h4>Current tech stack</h4>
                            <ul className="skills">
                                <li className="skill-item">
                                    <FaFigma className="icon"/>
                                    <p>Figma</p>
                                </li>
                                <li className="skill-item">
                                    <FaHtml5 className="icon"/>
                                    <p>HTML</p>
                                </li>
                                <li className="skill-item">
                                    <FaCss3Alt className="icon"/>
                                    <p>CSS</p>
                                </li>
                                <li className="skill-item">
                                    <FaJsSquare className="icon"/>
                                    <p>JavaScript</p>
                                </li>
                                <li className="skill-item">
                                    <FaReact className="icon"/>
                                    <p>React</p>
                                </li>
                                <li className="skill-item">
                                    <FaBootstrap className="icon"/>
                                    <p>Bootstrap</p>
                                </li>
                                <li className="skill-item">
                                    <FaGithubAlt className="icon"/>
                                    <p>Github</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="awards">
                            <div className="award-item">
                                <div className="award-top"></div>
                                <div className="award-mid">
                                        BUILDING<br/>
                                        WEBSITES<br/>
                                        SINCE 2009
                                        <div className="purple-bar"></div>
                                </div>
                                <div className="award-bottom"></div>
                            </div>
                            <div className="award-item">
                                <div className="award-top"></div>
                                <div className="award-mid">
                                        WORKING<br/>
                                        REMOTELY<br/>
                                        SINCE 2017
                                        <div className="purple-bar"></div>
                                </div>
                                <div className="award-bottom"></div>
                            </div>
                            <div className="award-item">
                                <div className="award-top"></div>
                                <div className="award-mid">
                                        SELF<br/>
                                        TAUGHT<br/>
                                        PROGRAMMER
                                        <div className="purple-bar"></div>
                                </div>
                                <div className="award-bottom"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="work" id="work">
                <div className="container">
                    <div className="section-header">
                        <h2>I love to create</h2>
                        <div className="purple-bar"></div>
                    </div>
                    <div className="section-content">
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
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-header">
                        <h2>Let's connect</h2>
                        <div className="purple-bar"></div>
                    </div>
                    <div className="section-content">
                        <p className="light">Thank you for taking the time to view my website. I'm currently looking for new opprotunites, so if you would like to hire me or collaborate on a project together, please reach out using the links provided.</p>
                        <ul className="contact-methods">
                            <li>
                                <span className='contact-icon'><MdAlternateEmail /></span>
                                <a href="mailto:bmfink87@gmail.com">
                                    <button>
                                        <p>Send email</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <span className='contact-icon'><FaLinkedinIn /></span>
                                <a href="https://www.linkedin.com/in/bfink777" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <p>Social media</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <span className='contact-icon'><FiDownload /></span>
                                <a href={resume} target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <p>My resume</p>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default HomePage