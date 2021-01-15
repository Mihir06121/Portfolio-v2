import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/drive_to_park.png"
import project1_2 from "../../../images/assects/drive_to_park2.png"
import project1_3 from "../../../images/assects/drive_to_park3.png"
import project1_4 from "../../../images/assects/drive_to_park4.png"
import project1_5 from "../../../images/assects/drive_to_park5.png"
import AOS from 'aos'

const Drive2Park = () => {

    AOS.init({
        duration: '1200'
    })

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
        <section className="pt-5">
            <div className="container" data-aos="flip-up">
                <h1>Drive2Park</h1><div className="lineP1" data-aos="fade-in" data-aos-delay="200"></div>
                <div className="conatiner project1 row d-flex shadow-lg bg-light align-items-center" 
                id="project1" data-aos="fade-up" data-aos-delay="800">
                <div className="col-md-1 order-md-first">
                   <div className="lineP2" data-aos="fade-in" data-aos-delay="200"></div>
                </div>
                    <div className="container col-md-3 mt-5 mb-5">
                        <h1 align="center" style={{fontSize:"150px"}} data-aos="fade-right" data-aos-delay="1000">01</h1>
                    </div>
                    <div className="container col-md-8 mt-5 mb-5">
                        <UncontrolledCarousel items={project_1} />
                    </div>
                </div>
                <div className="p-3">
                    <Collapse isOpen={!isOpen} align="center">
                        <div>
                            <CardBody style={{textAlign:"left"}}>
                                <h2>An advanced MERN stack project for booking parking space online.</h2>
                            </CardBody>
                        </div>
                    </Collapse>
                </div> 
                <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card>
                        <CardBody style={{textAlign:"left"}}>
                            Drive2park is an Online Marketplace for booking parking space.  
                            Drive2park makes it easy to find and book parking space for any location.<br/><br/>
                            This was my first group project as well as first major assigned by IIDE(indian Institute if Digital Education).
                            I mainly worked with the frontend part along with <a href="https://github.com/akshaydonhe12" target="_blanck">Akshay Donhe</a> 
                            and on the backend we had <a href="https://github.com/prashantpaddune" target="_blanck">Prashant Paddune.</a>
                            <br/><br/>
                            This was MERN Stack project, so as expected we had REACT.js for the frontend styled witb BootStrap. 
                            BootStrap really helped in building this application responsive.<br/><br/>
                            <div className="col-3">
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
                        </CardBody>
                    </Card>
                        <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
                </Collapse>             
            </div>
        </section>
    )
}

export default Drive2Park