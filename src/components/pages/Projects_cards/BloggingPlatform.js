import React from 'react';
import {UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/blog_platform_01.png"
import project1_2 from "../../../images/assects/blog_platform_02_2.png"
import project1_3 from "../../../images/assects/blog_platform_03.png"
import project1_4 from "../../../images/assects/blog_platform_04.png"
import project1_5 from "../../../images/assects/blog_platform_05.png"
import project1_6 from "../../../images/assects/blog_platform_06.png"

const BloggingPlatform = () => {

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
        <section className="">
            <div align="center" className="pt-5 pb-5 container container-fluid" data-aos="zoom-in" data-aos-delay="300">
            <h1 align="center" className="" style={{fontSize:"50px"}}><span className="text-primary">B</span>Logging <span className="text-primary">P</span>latform</h1>
            </div>
            <div className=" pb-3" data-aos="flip-up" data-aos-delay="300">
                <UncontrolledCarousel items={project_1} />
            </div>
            <div className="lineP1" data-aos="zoom-in" data-aos-delay="500"></div>
            <div className="pt-5 pb-5">
                <h3>
                    This is my second major project, a blogging platform refered from Udemy.
                    I went for this project to get an better exprience on Backendand Databse as this is also a MERN Stack.
                    For the frontend I used NEXT.js which is a pretty good framework of REACT.js.<br/><br/> While developing this application 
                    I came across various new concepts like Search Engine Optimization (SEO), ServerSide Rendering, hashing password, Role based Authentication etc.<br/>
                    I also came across this richtext editor named Quill supported by all mordern browers.<br/><br/>
                </h3>
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
            </div>
        </section>
    )
}

export default BloggingPlatform