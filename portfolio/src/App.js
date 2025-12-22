import React, { useState } from 'react';
import {motion} from "motion/react";
import './App.css';
function App() {
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const learningRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth"})}>Home</li>
          <li onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth"})}>About</li>
          <li onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth"})}>Projects</li>
          <li onClick={() => learningRef.current.scrollIntoView({ behavior: "smooth"})}>Learning</li>
        </ul>
      </nav>
      <section ref={homeRef} className='section Home'>Home</section>
      <section ref={aboutRef} className='section About'>About</section>
      <section ref={projectsRef} className='section Projects'>Projects</section>
      <section ref={learningRef} className='section Learning'>Learning</section>
    </div>
    
  );
}

export default App;
