import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/drive_to_park.png"
import project1_2 from "../../../images/assects/drive_to_park2.png"
import project1_3 from "../../../images/assects/drive_to_park3.png"
import project1_4 from "../../../images/assects/drive_to_park4.png"
import project1_5 from "../../../images/assects/drive_to_park5.png"


const Drive2Park = () => {

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
            <div className="container">
                <div className="conatiner project1 row d-flex shadow-lg align-items-center" id="project1">
                    <div className="container col-md-4 mt-5 mb-5">
                        <h1 align="center" style={{fontSize:"150px"}}>01</h1>
                    </div>
                    <div className="container dull col-md-8 mt-5 mb-5">
                        <UncontrolledCarousel items={project_1} />
                    </div>
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
                        </CardBody>
                    </Card>
                        <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
                </Collapse>             
            </div>
        </section>
    )
}

export default Drive2Park