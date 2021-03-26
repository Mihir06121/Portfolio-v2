import React, { useEffect} from 'react';
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
import Technova21 from './components/pages/Projects_cards/TechbNova21'
// import ContactForm from './components/ContactForm'
// import FormSubmitted from "./components/pages/FormSubmitted"
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';
import AOS from 'aos'

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

const ScrollToTop = withRouter(_ScrollToTop)

const App = () => {

  AOS.init({
    duration: '800',
  })

  return (
    <>
    <div className="container">
      <Router>
        <Switch>
          <ScrollToTop>
          <Route exact path="/">
            <NavBar className="fixed-top" />
            <Home />
            <About />
            <Projects />
            <Qualification />
            {/* <ContactForm /> */}
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
          <Route exact path="/project/technova21">
            <Technova21 />
          </Route>
//           <Route exact path="/formsubmitted">
//             <FormSubmitted />
//           </Route>
          </ScrollToTop>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
