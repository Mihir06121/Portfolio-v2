import React from 'react';
import AOS from 'aos'

const About = () => {

    AOS.init({
        duration: '1200',
    })

    return (
        <div id="about" className="pt-5 pb-5">
        <section className="pt-5">
            <div className="container" data-aos="fade-up" data-aos-delay="500">
                <h1 align="center" style={{fontSize:"40px"}}><span className="text-primary">A</span>bout <span className="text-primary">M</span>e</h1><br/>
                <p style={{fontSize:"20px"}}>
                    Currently second year student pursuing my degree in BSc. IT.<br/><br/>
                    I like to flash custom roms and custom recovery on an Android Devices and also like to play with cubes. 
                    Sometimes love to sketch sceneries and portraits.
                    <br/><br/>
                    I changed my focus to Web Development in my first year of college. 
                    I am looking forward to do some projects that would help in enhancing my skills and expand my knowledge in this field.
                    I have a pretty good knowledge on MERN stack development.
                </p><br/>
                {/* <div className="conatiner" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="m-5">Skills</h1>
                    <div className="row" data-aos="fade-up" data-aos-delay="300">
                        <div className="col-md-3">
                            <h2>HTML</h2>
                        </div>
                        <div className="col-md-8">
                            <div className="progress" style={{height:"30px"}}>
                                <div className="progress-bar" style={{width:"90%",height:"30px"}}>90%</div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="row" data-aos="fade-up" data-aos-delay="500">
                        <div className="col-md-3">
                            <h2>CSS</h2>
                        </div>
                        <div className="col-md-8">
                            <div className="progress" style={{height:"30px"}}>
                                <div className="progress-bar" style={{width:"70%",height:"30px"}}>97%</div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="row" data-aos="fade-up" data-aos-delay="800">
                        <div className="col-md-3">
                            <h2>JAVASCRIPT</h2>
                        </div>
                        <div className="col-md-8">
                            <div className="progress" style={{height:"30px"}}>
                                <div className="progress-bar" style={{width:"85%",height:"30px"}}>85%</div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="row" data-aos="fade-up" data-aos-delay="900">
                        <div className="col-md-3">
                            <h2>JAVA</h2>
                        </div>
                        <div className="col-md-8">
                            <div className="progress" style={{height:"30px"}}>
                                <div className="progress-bar" style={{width:"75%",height:"30px"}}>75%</div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="row" data-aos="fade-up" data-aos-delay="1000">
                        <div className="col-md-3">
                            <h2>C and C++</h2>
                        </div>
                        <div className="col-md-8">
                            <div className="progress" style={{height:"30px"}}>
                                <div className="progress-bar" style={{width:"72%",height:"30px"}}>72%</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section><br/>
           <div className="line"></div>
        </div>
    )
}

export default About