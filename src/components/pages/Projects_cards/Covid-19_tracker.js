import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/covid_tracker_01.png"


const Drive2Park = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const project_1 = [
        {
            src: project1_1,
            caption: '',
            altText: 'Slide 1',
            key: '1'
        }
    ];

    return (
        <section className="pt-5">
            <div className="container">
                <div className="conatiner project1 row d-flex shadow-lg bg-light align-items-center" id="project1">
                    <div className="container col-md-4 mt-5 mb-5">
                        <h1 align="center" style={{fontSize:"150px"}}>05</h1>
                    </div>
                    <div className="container col-md-8 mt-5 mb-5">
                        <UncontrolledCarousel items={project_1} />
                    </div>
                </div>
                <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card>
                        <CardBody style={{textAlign:"left"}}>

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