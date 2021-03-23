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
            <input type="text" id="email" name="email" className="form-control" required="true" placeholder="Your Email"/>
        </div>
        <br/>
        <div className="md-form">
            <textarea type="text" id="message" name="message" rows="10" className="form-control md-textarea" required="true" placeholder="Send me a message"></textarea>
        </div>
        <br/>
        <Link to="/formsubmitted"><button className=" btn btn-primary pure-buton button-success pure-button button-xlarge" >Send</button></Link>
        
    <script data-cfasync="false" type="text/javascript"
    src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>

    </form>
    </div>
    )
} 

export default ContactForm