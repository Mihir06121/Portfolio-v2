import React from 'react';
import Drive2Park from "./Projects_cards/Drive2Park"
import BloggingPlatform from "./Projects_cards/BloggingPlatform"
import YoutubeClone from "./Projects_cards/Youtube_clone"
import DRMS from "./Projects_cards/DRMS"
import CovidTracker from "./Projects_cards/Covid-19_tracker"
import "./Home.css"
import AOS from 'aos'

const Projects = () => {

    AOS.init({
        duration: '1200'
    })

    return (
        <section className="pt-5">
            <h1 align="center" className="pb-4 pt-4" style={{fontSize:"80px"}}>My Projects</h1>
            <div className="vert-move block3 shadow-lg" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="2000"></div>
            <div className="mt-3 mb-3 mr-3 ml-3">
                <Drive2Park />
                <hr className="bg-dark mb-5"/>
                <BloggingPlatform />
                <hr className="bg-dark mb-5"/>
                <YoutubeClone />
                <hr className="bg-dark mb-5"/>
                <DRMS />
                <hr className="bg-dark mb-5"/>
                <CovidTracker />
            </div>
        </section>
    )
}

export default Projects