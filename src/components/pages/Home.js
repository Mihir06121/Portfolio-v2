import React from 'react';
import './Home.css'
// import profile from "../../images/image1.png";
// import bg_video from "../../images/bg-video.mp4";
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
                <div className="vert-move block6 shadow-lg" data-aos="zoom-in" data-aos-easing="ease-out-back"></div>
                <div className="vert-move block shadow-lg" data-aos="zoom-in" data-aos-easing="ease-out-back"></div>
            </section>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Home