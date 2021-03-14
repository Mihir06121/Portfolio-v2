import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"
import AOS from 'aos'

const Projects = () => {

    AOS.init({
        duration: '1200'
    })

    return (
        <section className="pt-5" id="projects">
            <h1 align="center" className="pb-4 pt-4" style={{fontSize:"40px"}}><span className="text-primary">M</span>y <span className="text-primary">P</span>rojects</h1>
                <section  className="pt-5 pb-5" id="#projects">
                    <div className="container">
                        <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2">
                            <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="200">
                                <div className="content">
                                    <h1 className="title">Drive2Park</h1>
                                    <p className="copy">Advanced MERN Application to Find and Book Parking Space.</p>
                                    <Link to="/project/drive2Park"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link>
                                </div>
                            </div>
                            <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" >
                                <div className="content">
                                    <h2 className="title">Blogging Platform</h2>
                                    <p className="copy">Another Mern Appliocation for Multiuser Blogging</p>
                                    <Link to="/project/bloggingplatform"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link>
                                </div>
                            </div>
                            <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="400">
                                <div className="content">
                                    <h2 className="title">YoutubeClone</h2>
                                    <p className="copy">React application build along with Youtube API</p>
                                    <Link to="/project/youtubeclone"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2">
                            <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="200">
                                <div className="content">
                                    <h2 className="title">DRMS</h2>
                                    <p className="copy">Another MERN application for college mini-project</p>
                                    <Link to="/project/drms"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link>
                                </div>
                            </div>
                            <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" >
                                <div className="content">
                                    <h2 className="title">Covid19-Tracker</h2>
                                    <p className="copy">Description of project</p>
                                    <Link to="/project/covid19-tracker"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link>
                                </div>
                            </div>
                            <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" >
                                <div className="content">
                                    <h2 className="title">TechNova21</h2>
                                    <p className="copy">Description of project</p>
                                    <Link to="/project/technova21"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default Projects