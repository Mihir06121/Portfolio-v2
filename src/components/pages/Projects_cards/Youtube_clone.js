import React from 'react';
import {UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/react_youtube.png"


const YoutubeClone = () => {

    const project_1 = [
        {
            src: project1_1,
            caption: '',
            altText: 'Slide 1',
            key: '1'
        }
    ];

    return (
        <section className="">
            <div align="center" className="pt-5 pb-5 container container-fluid" data-aos="zoom-in" data-aos-delay="300">
            <h1 align="center" className="" style={{fontSize:"50px"}}><span className="text-primary">Y</span>outube<span className="text-primary">C</span>lone</h1>
            </div>
            <div className=" pb-3" data-aos="flip-up" data-aos-delay="300">
                <UncontrolledCarousel items={project_1} />
            </div>
            <div className="lineP1" data-aos="zoom-in" data-aos-delay="500"></div>
            <div className="pt-5 pb-5">
                <h3>
                    I went for this project as to get better hands on using APIs. This Project is also made with REACT.js
                    along with bootstrap. The main challange I faced here is making a the streaming column 
                    static. As it would not be a good user-experience that while a video
                    the player scrolls while playing.<br/><br/>
                </h3>
                <div className="col-3">
                    <Table borderless>
                        <tbody>
                            <tr>
                            <td>Status:</td>
                            <td>Completed</td>
                            </tr>
                            <tr>
                            <td>Type:</td>
                            <td>Solo</td>
                            </tr>  
                            <tr>
                            <td>deployed</td>
                            <td>
                            <a className="text-primary" href="https://mihir06121.github.io/youtube-clone/" target="_blanck">
                                Youtube Clone
                            </a>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default YoutubeClone