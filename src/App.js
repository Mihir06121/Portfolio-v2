import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from '../src//components/pages/Home'
import About from '../src//components/pages/About'
import Projects from '../src//components/pages/Projects'
import Qualification from '../src/components/pages/Qualification'
import Footer from '../src//components/Footer'
import NavBar from '../src/components/Header'
import Drive2Park from '../src/components/pages/Projects_cards/Drive2Park'
import BloggingPlatform from './components/pages/Projects_cards/BloggingPlatform'
import DRMS from './components/pages/Projects_cards/DRMS'
import YoutubeClone from './components/pages/Projects_cards/Youtube_clone'
import CovidTracker from './components/pages/Projects_cards/Covid-19_tracker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos'

const App = () => {

  AOS.init({
    duration: '800',
  })

  return (
    <>
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar className="fixed-top" />
            <Home />
            <About />
            <Projects />
            <Qualification />
            <Footer/>
          </Route>
          <Route exact path="/project/Drive2Park">
            <Drive2Park />
          </Route>
          <Route exact path="/project/Bloggingplatform">
            <BloggingPlatform />
          </Route>
          <Route exact path="/project/drms">
            <DRMS />
          </Route>
          <Route exact path="/project/YoutubeClone">
            <YoutubeClone />
          </Route>
          <Route exact path="/project/Covid19-Tracker">
            <CovidTracker />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
