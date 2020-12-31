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
                <h1>Covid-19 Tracker</h1>
                <div className="conatiner project1 row d-flex shadow-lg bg-light align-items-center" id="project1" data-aos="flip-up" data-aos-delay="800">
                    <div className="container col-md-4 mt-5 mb-5">
                        <h1 align="center" style={{fontSize:"150px"}} data-aos="fade-right" data-aos-delay="1000">05</h1>
                    </div>
                    <div className="container col-md-8 mt-5 mb-5">
                        <UncontrolledCarousel items={project_1} />
                    </div>
                </div>
                <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card>
                        <CardBody style={{textAlign:"left"}}>
                                Another API based REACT.js application but for a change I used Material-UI to style this application.
                                This was a small challange for me as I was new to this Material-UI and it took a while for me to understand its styling concepts.
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
                                        </tbody>
                                    </Table>
                                </div>
                                <div align="center">
                                    <a href="https://mihir06121.github.io/Covid-19-Tracker/" target="_blanck">
                                        <button className="btn btn-sm btn-outline-primary">Covid-19 Tracker</button>
                                    </a>
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