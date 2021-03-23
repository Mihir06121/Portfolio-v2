import React from 'react'
import {Link} from 'react-router-dom'
const FormSubmitted = () => {
    return (
        <div align="center" className="p-5">
            <h1>Form Submitted Thank You</h1>
            <div className="p-5">
                <Link to ="/"><button className="btn btn-primary">Back to Home</button></Link>
            </div>
        </div>
    )
}

export default FormSubmitted