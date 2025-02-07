import React from 'react';
import './App.css'; // Import global styles
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
