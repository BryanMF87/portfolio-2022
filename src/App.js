import './App.css';
import React, { useState } from 'react';
import Favicon from "react-favicon";
import ListOfProjects from './components/Projects/listOfProjects';
// import components and pages
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/homePage/homePage';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
// import images
import favIcon from '../src/assets/favicon.png';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(ListOfProjects[0].title);

  return (
    <div className="App">
      <Favicon url={favIcon}></Favicon>
      <Navigation />
      <HomePage 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setActiveProject={setActiveProject}
      />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeProject={activeProject}
      />
      <Footer />
    </div>
  );
}

export default App;
