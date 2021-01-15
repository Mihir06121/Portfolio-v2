import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/react_youtube.png"


const BloggingPlatform = () => {

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
            <div className="row d-flex">
                <div className="col-1 order-first">
                   <div className="lineP2" data-aos="fade-in" data-aos-delay="200"></div>
                </div>
                <div className="col-11">
                    <div className="container">
                    <h1>Youtube Clone</h1><div className="lineP1" data-aos="fade-in" data-aos-delay="200"></div>
                    <div className="conatiner project1 row d-flex shadow-lg bg-light align-items-center" 
                    id="project1" data-aos="flip-up" data-aos-delay="800">
                        <div className="container col-md-3 mt-5 mb-5">
                            <h1 align="center" style={{fontSize:"150px"}} data-aos="fade-right" data-aos-delay="1000">03</h1>
                        </div>
                        <div className="container col-md-8 mt-5 mb-5">
                            <UncontrolledCarousel items={project_1} />
                        </div>
                    </div>
                    <div className="p-3">
                        <Collapse isOpen={!isOpen} align="center">
                            <div>
                                <CardBody style={{textAlign:"left"}}>
                                    <h1>My first React.js application with youtube API</h1>
                                </CardBody>
                            </div>
                        </Collapse>
                    </div>
                    <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                    <Collapse isOpen={isOpen} align="center">
                        <Card>
                            <CardBody style={{textAlign:"left"}}>
                                I went for this project as to get better hands on using APIs. This Project is also made with REACT.js
                                along with bootstrap. The main challange I faced here is making a the streaming column 
                                static. As it would not be a good user-experience that while a video
                                the player scrolls while playing.<br/><br/>
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
                                <div align="center">
                                </div>
                            </CardBody>
                        </Card>
                            <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
                    </Collapse>              
                </div>
                </div>
            </div>
              
        </section>
    )
}

export default BloggingPlatform