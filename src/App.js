import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from '../src//components/pages/Home'
import About from '../src//components/pages/About'
import Projects from '../src//components/pages/Projects'
// import Contact from '../src//components/pages/Contact'
import Footer from '../src//components/Footer'
import NavBar from '../src/components/Header'
import AOS from 'aos'

const App = () => {

  AOS.init({
    duration: '800',
  })

  // let suggestion = "For better experience switch to desktop site"
  // alert(suggestion)

  return (
    <>
    <div className="container">
      <NavBar className="fixed-top" />
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer/>
    </div>
    </>
  );
}

export default App;
