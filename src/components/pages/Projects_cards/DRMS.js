import React from 'react';
import { UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/drms_01.png"
import project1_2 from "../../../images/assects/drms_02.png"
import project1_3 from "../../../images/assects/drms_03.png"
import project1_4 from "../../../images/assects/drms_04.png"


const DRMS = () => {
    const project_1 = [
        {
            src: project1_1,
            caption: '',
            altText: 'Slide 1',
            key: '1'
        },
        {
            src: project1_2,
            caption: '',
            altText: 'Slide 2',
            key: '2'
        },
        {
            src: project1_3,
            caption: '',
            altText: 'Slide 3',
            key: '3'
        },
        {
            src: project1_4,
            caption: '',
            altText: 'Slide 4',
            key: '4'
        }
    ];

    
    return (
        <section className="">
            <div align="center" className="pt-5 pb-5 container container-fluid" data-aos="zoom-in" data-aos-delay="300">
            <h1 align="center" className="" style={{fontSize:"50px"}}><span className="text-primary">D</span>RMS</h1>
            </div>
            <div className=" pb-3" data-aos="flip-up" data-aos-delay="300">
                <UncontrolledCarousel items={project_1} />
            </div>
            <div className="lineP1" data-aos="zoom-in" data-aos-delay="500"></div>
            <div className="pt-5 pb-5">
                <h3>
                    DRMS(Daily Report Management System), this is my mini-project for college. 
                    This has mainly two users i.e. faculties and admin, where faculties will make their 
                    daily report of their class attendance and submit it. There is a admin user that can 
                    keep tack of this records.<br/><br/>
                    <p>
                        This is for mini-project, for further addons I am thinking of adding of 'Students Portal' 
                        where the students would put their quries related o their academics, or can also get
                        in touch to their subject teachers.
                    </p>
                </h3>
                <div className="col-3">
                    <Table borderless>
                        <tbody>
                            <tr>
                            <td>Status:</td>
                            <td>On going</td>
                            </tr>
                            <tr>
                            <td>Type:</td>
                            <td>Solo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default DRMS