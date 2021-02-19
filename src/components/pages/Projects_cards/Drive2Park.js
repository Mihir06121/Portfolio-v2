import React from 'react';
import { UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/drive_to_park.png"
import project1_2 from "../../../images/assects/drive_to_park2.png"
import project1_3 from "../../../images/assects/drive_to_park3.png"
import project1_4 from "../../../images/assects/drive_to_park4.png"
import project1_5 from "../../../images/assects/drive_to_park5.png"

const Drive2Park = () => {

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
        },
        {
            src: project1_5,
            caption: '',
            altText: 'Slide 5',
            key: '5'
        }
    ];

    return (
        <section className="">
            <div align="center" className="pt-5 pb-5 container container-fluid" data-aos="zoom-in" data-aos-delay="300">
            <h1 align="center" className="" style={{fontSize:"50px"}}><span className="text-primary">D</span>rive2Park</h1>
            </div>
            <div className=" pb-3" data-aos="flip-up" data-aos-delay="300">
                <UncontrolledCarousel items={project_1} />
            </div>
            <div className="lineP1" data-aos="zoom-in" data-aos-delay="500"></div>
            <div className="pt-5 pb-5">
                <h3>
                    Drive2park is an Online Marketplace for booking parking space.  
                    Drive2park makes it easy to find and book parking space for any location.<br/><br/>
                    This was my first group project as well as first major assigned by IIDE(indian Institute if Digital Education).
                    I mainly worked with the frontend part along with <a href="https://github.com/akshaydonhe12" target="_blanck">Akshay Donhe</a> 
                    and on the backend we had <a href="https://github.com/prashantpaddune" target="_blanck">Prashant Paddune.</a>
                    <br/><br/>
                    This was MERN Stack project, so as expected we had REACT.js for the frontend styled witb BootStrap. 
                    BootStrap really helped in building this application responsive.
                </h3>
                <div align="center" className="col-3 pt-4 pb-2">
                    <Table borderless>
                        <tbody>
                            <tr>
                            <td>Status:</td>
                            <td>Completed</td>
                            </tr>
                            <tr>
                            <td>Type:</td>
                            <td>Group <br/> <a href="https://github.com/prashantpaddune" target="_blanck">Prashant Paddune, </a> <br/>
                            <a href="https://github.com/akshaydonhe12" target="_blanck">Akshay Donhe</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default Drive2Park