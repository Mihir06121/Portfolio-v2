import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/blog_platform_01.png"
import project1_2 from "../../../images/assects/blog_platform_02_2.png"
import project1_3 from "../../../images/assects/blog_platform_03.png"
import project1_4 from "../../../images/assects/blog_platform_04.png"
import project1_5 from "../../../images/assects/blog_platform_05.png"
import project1_6 from "../../../images/assects/blog_platform_06.png"


const BloggingPlatform = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const project_1 = [
        {
            src: project1_1,
            altText: 'Slide 1',
            key: '1'
        },
        {
            src: project1_2,
            altText: 'Slide 2',
            key: '2'
        },
        {
            src: project1_3,
            altText: 'Slide 3',
            key: '3'
        },
        {
            src: project1_4,
            altText: 'Slide 4',
            key: '4'
        },
        {
            src: project1_5,
            altText: 'Slide 5',
            key: '5'
        },
        {
            src: project1_6,
            altText: 'Slide 6',
            key: '6'
        }
    ];

    

    return (
        <section className="pt-5">
            <div className="container">
                <div className="conatiner project1 row d-flex  align-items-center" id="project1">
                    <div className="container col-md-3 order-md-last">
                        <h1 style={{fontSize:"200px"}}>02</h1>
                    </div>
                    <div className="container col-md-9">
                        <UncontrolledCarousel items={project_1} style={{height:'100px'}} />
                    </div>
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
                            <Table borderless>
                                <tbody>
                                    <tr>
                                    <td>Status:</td>
                                    <td>In Progress</td>
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

export default BloggingPlatform