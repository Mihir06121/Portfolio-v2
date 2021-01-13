import React from 'react';
import './Home.css'
// import profile from "../../images/image1.png";
import AOS from 'aos'

const Home = () => {

    AOS.init({
        duration: '1200'
    })

    return (
        <div id="home" className="p-lg-5">
        <div className="p-lg-5">
            <section className="parent-container pt-5 pb-5">
                <div className="child-container">
                    <h1 className="p-5">
                        <div className="" data-aos="fade-up" data-aos-delay="00">
                            My code <span className="text-primary">DOESN’T WORK</span>, I have no idea why.
                        </div><br/>
                        <div className="" data-aos="fade-up" data-aos-delay="200">
                            My code <span className="text-primary">DOES WORK</span>, I have no idea why.
                        </div>
                        <div className="col-md-4 p-2 bottom-border" data-aos="fade-left" data-aos-delay="600"></div>
                    </h1>  
                </div>    
                {/* <div className="container upper">
                    <div className="row pl-2 pr-2 d-flex justify-content-around">
                        <div className="col-lg-5 order-lg-first pb-2 bg-light shadow-lg"  data-aos="flip-right" data-aos-easing="ease-out-back" data-aos-delay="300">
                            <div className="h-100">
                                <div className="d-flex h-100 ">
                                    <div className="w-100 my-auto text-left text-lg-left left-border" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="800" >
                                        <h1 className="text-large pl-3">Hey! There</h1>
                                        <h1 className="text-large pl-3">This is <span style={{color:"skyblue"}}>Mihir Panchal</span></h1>
                                        <div className="pt-3 pb-3 text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center shadow-lg pb-2" data-aos="fade-left" data-aos-easing="ease-in-out-back">
                            <img className="img-fluid" src={profile} alt="" />
                        </div>
                    </div>
                    <div className="vert-move block2 shadow-lg" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="2000"></div>
                </div> */}
                <div className="vert-move block6 shadow-lg" data-aos="zoom-in" data-aos-easing="ease-out-back"></div>
                <div className="vert-move block shadow-lg" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay=""></div>
            </section>
            
            {/* <section  className="pt-5 pb-5" id="#projects">
                <div className="text-left header">
                    <h1 className="pt-3 pb-3">
                        Projects
                    </h1>
                </div>
                    <div className="container">
                        <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2">
                            <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="200">
                                <div className="content">
                                    <h2 className="title">Drive2Park</h2>
                                    <p className="copy">Advanced MERN Application to Find and Book Parking Space.</p>
                                    <a href="/projects"><button className="btn btn-lg btn-primary btn-block">View Project</button></a>
                                </div>
                            </div>
                            <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" >
                                <div className="content">
                                    <h2 className="title">Blogging Platform</h2>
                                    <p className="copy">Another Mern Appliocation for Multiuser Blogging</p>
                                    <a href="/projects"><button className="btn btn-lg btn-primary btn-block">View Project</button></a>
                                </div>
                            </div>
                            <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="400">
                                <div className="content">
                                    <h2 className="title">YoutubeClone</h2>
                                    <p className="copy">React application build along with Youtube API</p>
                                    <a href="/projects"><button className="btn btn-lg btn-primary btn-block">View Project</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2">
                            <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="200">
                                <div className="content">
                                    <h2 className="title">DRMS</h2>
                                    <p className="copy">Another MERN application for college mini-project</p>
                                    <a href="/projects"><button className="btn btn-lg btn-primary btn-block">View Project</button></a>
                                </div>
                            </div>
                            <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" >
                                <div className="content">
                                    <h2 className="title">Project 5</h2>
                                    <p className="copy">Description of project</p>
                                    <a href="/projects"><button className="btn btn-lg btn-primary btn-block">View Project</button></a>
                                </div>
                            </div>
                            <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2" data-aos="zoom-in" data-aos-delay="400">
                                <div className="content">
                                    <h2 className="title">project 6</h2>
                                    <p className="copy">Description of project</p>
                                    <a href="/projects"><button className="btn btn-lg btn-primary btn-block">View Project</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section> */}
        </div>
        </div>
    )
}

export default Home