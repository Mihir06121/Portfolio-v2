import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'

const Contact = () => {
    return (
        <section id="contact" className="pt-5">
            <div className="container">
                <h1>Contact Me</h1>
                <div className="row">
                    <div className="col-sm">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title 
                                and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title 
                                and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title 
                                and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact