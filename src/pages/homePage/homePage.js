import './homePage.css';
import React from 'react';
// import components
import ListOfProjects from '../../components/Projects/listOfProjects';
import ProjectItem from '../../components/Projects/ProjectItem';
import Skills from '../../components/Skills/Skills';
// icon imports
import { FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
// image imports
import resume from '../homePage/resume2022.pdf';
import myGuy from './guy.png';
import crissCross from './crisscross.jpg';


const HomePage = ({ isOpen, setIsOpen, activeProject, setActiveProject}) => {

// THINGS TO DO
    // Make website responsive
    // fix used button colors
    // fix project buttons line height
    // Move contact button background to hover, maybe
    // Create short usage videos for each project and add to website
    // Take personal pictures, add to website

    return (
        <main>
            <section className="hero" id="home">
                <div className="container">
                    <h1>HELLO WORLD</h1>
                    <img className="hero-image" src={myGuy} alt="personal image" />
                    <div className="hero-info">
                        <p className="grey">Welcome to my website!</p>
                        <h4>I'm Bryan, a front-end web developer based in Georgia</h4>
                        <p className="grey"> <i>(The country, not the state)</i></p>
                        <div className="hero-buttons">
                            <a href="https://github.com/BryanMF87" target="_blank">
                                <button className="white">My Github</button>
                            </a>
                            <a href={resume} target="_blank">
                                <button className="white-transparent">My resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="about-me">
                        <h3>Want to start a new web project?</h3>
                        <h3>I can help you design and build it!</h3>
                        <p className="light">I am a classically trained graphic designer and self-taught web developer who loves clean design and even cleaner code. I’m passionate about working on creative and interesting projects, including those that promote positive social engineering and sustainable practices.</p>
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
                        <div className="knowledge">
                            <ul>
                                <Skills skillName={'Figma'} skillLevel={60}/>
                                <Skills skillName={'Html'} skillLevel={90}/>
                                <Skills skillName={'Css'} skillLevel={90}/>
                                <Skills skillName={'Javascript'} skillLevel={75}/>
                            </ul>
                            <ul>
                                <Skills skillName={'React framework'} skillLevel={50}/>
                                <Skills skillName={'Bootstrap'} skillLevel={40}/>
                                <Skills skillName={'Webpack'} skillLevel={30}/>
                                <Skills skillName={'Jest'} skillLevel={30}/> 
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work" id="work">
                <div className="container">
                    <div className="project-list">
                        {ListOfProjects.map((obj, index) => (
                            <ProjectItem
                                key={obj.id}
                                title={obj.title}
                                image={obj.image}
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
                        <h2>Ready to<br />get started?</h2>
                        <p className="light">Thanks for taking the time to look from my website. I'm currently looking for new opprotunites so if you’d like to hire me or collaborate on a project together please reach out using the links below.</p>
                        <ul className="contact-methods">
                            <li><span className='purple'><MdAlternateEmail /></span><a href="mailto:bmfink87@gmail.com"><button>Send email</button></a></li>
                            <li><span className='purple'><FaLinkedinIn /></span><a href="https://www.linkedin.com/in/bfink777" target="_blank"><button>Social media</button></a></li>
                            <li><span className='purple'><FiDownload /></span><a href={resume} target="_blank"><button>Download resume</button></a></li>
                        </ul>
                    </div>
                    <img src={crissCross} alt="2nd personal image"/>
                </div>
            </section>
        </main>
    )
}

export default HomePage