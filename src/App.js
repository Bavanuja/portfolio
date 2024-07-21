import React from 'react';
import Nav from './components/Contact';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <Nav />
            <Intro />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
