import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'

const Contact = () => {
    return (
        <section id="contact" className="pt-5">
            <div className="container">
                <h1><span className="text-primary">C</span>ontact <span className="text-primary">M</span>e</h1>
                <div className="row p-4">
                    <div className="col-sm" data-aos="zoom-in" data-aos-delay="1000">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Phone</CardTitle>
                            <i className="fa fa-phone fa-2x"></i>
                            <CardText>7700983123</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm" data-aos="zoom-in" data-aos-delay="1200">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Gmail</CardTitle>
                            <i className="fab fa-google fa-2x"></i>
                            <CardText>mp06121@gmail.com</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm" data-aos="zoom-in" data-aos-delay="1500">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Instagram</CardTitle><i className="fab fa-instagram fa-2x"></i>
                            <CardText><a className="mx-2 text-dark" href="https://www.instagram.com/_mihir.panchal_/" >_mihir.panchal_</a></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm" data-aos="zoom-in" data-aos-delay="1800">
                        <Card>
                            <CardBody>
                            <CardTitle tag="h5">Github</CardTitle><i className="fab fa-github fa-2x"></i>
                            <CardText><a className="mx-2 text-dark" href="https://github.com/Mihir06121">Mihir06121</a></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact