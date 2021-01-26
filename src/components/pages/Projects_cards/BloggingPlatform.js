import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/blog_platform_01.png"
import project1_2 from "../../../images/assects/blog_platform_02_2.png"
import project1_3 from "../../../images/assects/blog_platform_03.png"
import project1_4 from "../../../images/assects/blog_platform_04.png"
import project1_5 from "../../../images/assects/blog_platform_05.png"
import project1_6 from "../../../images/assects/blog_platform_06.png"
import AOS from 'aos'

const BloggingPlatform = () => {

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
        },
        {
            src: project1_6,
            caption: '',
            altText: 'Slide 6',
            key: '6'
        }
    ];

    

    return (
        <section className="pt-5">
            <div className="row d-flex ">
                <div align="center" className="col-1 order-last">
                    <div className="lineP2" data-aos="fade-in" data-aos-delay="200"></div>
                </div>
                <div className="col-11">
                    <div className="container" data-aos="flip-up">
                        <h1><span className="text-primary">B</span>logging <span className="text-primary">P</span>latform</h1>
                        <div className="conatiner project1 row d-flex shadow-lg bg-light align-items-center"
                        id="project1" data-aos="flip-up" data-aos-delay="800">
                            <div className="container col-md-3 mt-5 mb-5 order-md-3">
                                <h1 align="center" style={{fontSize:"150px"}} data-aos="fade-left" data-aos-delay="1000">02</h1>
                            </div>
                            <div className="container col-md-8 mt-5 mb-5">
                                <UncontrolledCarousel items={project_1} style={{height:'100px'}} />
                            </div>
                        </div><div className="lineP1" data-aos="fade-in" data-aos-delay="200"></div>
                        <div className="p-3">
                            <Collapse isOpen={!isOpen} align="center">
                                <div>
                                    <CardBody style={{textAlign:"left"}}>
                                        <h1>Multi-User Blogging Platform with NEXT.js</h1>
                                    </CardBody>
                                </div>
                            </Collapse>
                        </div>
                        <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                        <Collapse isOpen={isOpen} align="center">
                            <Card>
                                <CardBody style={{textAlign:"left"}}>
                                    This is my second major project, a blogging platform refered from Udemy.
                                    I went for this project to get an better exprience on Backendand Databse as this is also a MERN Stack.
                                    For the frontend I used NEXT.js which is a pretty good framework of REACT.js.<br/><br/> While developing this application 
                                    I came across various new concepts like Search Engine Optimization (SEO), ServerSide Rendering, hashing password, Role based Authentication etc.<br/>
                                    I also came across this richtext editor named Quill supported by all mordern browers.<br/><br/>
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