import React from 'react';
import {UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/technova21.png"


const TechNova21 = () => {

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
            <h1 align="center" className="" style={{fontSize:"50px"}}><span className="text-primary">T</span>ech<span className="text-primary">N</span>ova<span className="text-primary">21</span></h1>
            </div>
            <div className=" pb-3" data-aos="flip-up" data-aos-delay="300">
                <UncontrolledCarousel items={project_1} />
            </div>
            <div className="lineP1" data-aos="zoom-in" data-aos-delay="500"></div>
            <div className="pt-5 pb-5">
                <h3>
                    My College's Event Site developed again with React.js and bootstrap but this 
                    time I tried something new with the hosting, I used this Netlify for deploying this site.
                    <br/><br/>
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
                            <a className="text-primary" href="https://technova21.netlify.app/" target="_blanck">
                                TechNova21
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

export default TechNova21