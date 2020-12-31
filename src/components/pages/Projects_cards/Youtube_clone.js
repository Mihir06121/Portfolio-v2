import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel } from 'reactstrap';
import project1_1 from "../../../images/assects/react_youtube.png"


const BloggingPlatform = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const project_1 = [
        {
            src: project1_1,
            altText: 'Slide 1',
            key: '1'
        }
    ];

    return (
        <section className="pt-5">
              <div className="container">
                <div className="conatiner project1 row d-flex  align-items-center" id="project1">
                    <div className="container col-md-3">
                        <h1 style={{fontSize:"200px"}}>03</h1>
                    </div>
                    <div className="container col-md-9">
                        <UncontrolledCarousel items={project_1} />
                    </div>
                </div>
                <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card>
                        <CardBody style={{textAlign:"left"}}>
                            This is build with the help of Youtube API and BootStrap. 
                            Bootstrap helped me to make this application very much responsive
                            like my other applications.<br/><br/>
                            <div align="center">
                            <a href="https://mihir06121.github.io/youtube-clone/" target="_blanck">
                                <button className="btn btn-sm btn-outline-primary" >Youtube Clone</button></a>
                            </div>
                        </CardBody>
                    </Card>
                        <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
                </Collapse>              
            </div>
        </section>
    )
}

export default BloggingPlatform