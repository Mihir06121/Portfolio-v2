import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from '../src//components/pages/Home'
import About from '../src//components/pages/About'
import Projects from '../src//components/pages/Projects'
import Contact from '../src//components/pages/Contact'
import Footer from '../src//components/Footer'


const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
