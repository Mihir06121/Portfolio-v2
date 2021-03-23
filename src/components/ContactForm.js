import React from 'react'
import {Link} from 'react-router-dom'

const ContactForm = () => {
    return (
        <div align="center">
            
        <h2 className="content-head is-center">Contact Me!</h2>
    <form id="gform" method="POST" className="pure-form pure-form-stacked" data-email="from_email@example.com"
          action="https://script.google.com/macros/s/AKfycbzwxtMvFsESIPZp31PpUYKG-KPfFev8Ihf58K8ILoAwCSVfeZ0gxVFyQvhfdKAA4CLs/exec">

        <div className="md-form mb-0">
            <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />
        </div>
        <br/>
        <div className="md-form mb-0">
            <input type="text" id="email" name="email" className="form-control" placeholder="Your Email"/>
        </div>
        <br/>
        <div className="md-form">
            <textarea type="text" id="message" name="message" rows="10" className="form-control md-textarea" placeholder="Send me a message"></textarea>
        </div>
        <br/>
        <Link to="#home"><button className=" btn btn-primary button-success pure-button button-xlarge" >Send</button></Link>
        
    </form>

    <div style={{display:"none"}} id="thankyou_message">
        <h2>
            <em>Thanks</em> for contacting us!
            We will get back to you soon!
        </h2>
    </div>
    </div>
    )
} 

export default ContactForm