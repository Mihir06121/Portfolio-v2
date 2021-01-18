import React from 'react';

const Qualification = () => {
    return (
        <div id="qualification" className="pt-5 pb-5">
            <div align="center" className="col-12">
                <h1 align="center" style={{fontSize:"40px"}}><span className="text-primary">M</span>y <span className="text-primary">Q</span>ualifications</h1>
            </div>
            <section className="pt-5 pb-3">
                <div className="left-border m-3 pt-5" data-aos="fade-left" data-aos-delay="1000">
                <h1 className="pl-2">BSc.IT</h1>
                <h4 className="pt-3 pl-3">Pursunig my BSc.IT degree from Shree L. R. Tiwari 
                degree college of Arts Commerce and Science in Mumbai.</h4>
                </div><hr/>
                <div className="left-border m-3 pt-5" data-aos="fade-left" data-aos-delay="1200">
                <h1 className="pl-2">Web Development</h1>
                <h4 className="pt-3 pl-3">I completed my full stack web development course from 
                IIDE(Indian Institution of Digital Education) </h4>
                </div><hr/>
                <div className="left-border m-3 pt-5" data-aos="fade-left" data-aos-delay="1400">
                <h1 className="pl-2">Junior College(Science)</h1>
                <h4 className="pt-3 pl-3">I completed my junior college in Science from 
                Mother Mary Junior College of Science and Commerce Mumbai.</h4>
                </div><hr/>
                <div className="left-border m-3 pt-5" data-aos="fade-left" data-aos-delay="1600">
                <h1 className="pl-2">School</h1>
                <h4 className="pt-3 pl-3">I completed my schooling from ST. Xavier's High School in Mumbai.</h4>
                </div>
            </section>
            <div className="line"></div>
        </div>
    )
}

export default Qualification