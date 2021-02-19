import React from 'react';
import { UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/covid_tracker_01.png"


const CovidTracker = () => {

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
            <h1 align="center" className="" style={{fontSize:"50px"}}><span className="text-primary">C</span>ovid-19 <span className="text-primary">T</span>racker</h1>
            </div>
            <div className=" pb-3" data-aos="flip-up" data-aos-delay="300">
                <UncontrolledCarousel items={project_1} />
            </div>
            <div className="lineP1" data-aos="zoom-in" data-aos-delay="500"></div>
            <div className="pt-5 pb-5">
                <h3>
                    Another API based REACT.js application but for a change I used Material-UI to style this application.
                    This was a small challange for me as I was new to this Material-UI and it took a while for me to understand its styling concepts.
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
                            <td>Deployed</td>
                            <td>
                                <a className="text-primary" href="https://mihir06121.github.io/Covid-19-Tracker/" target="_blanck">
                                    Covid-19 Tracker
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

export default CovidTracker