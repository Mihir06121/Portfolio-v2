import React from 'react'
import Contact from '../components/pages/Contact'

const Footer = () => {
    return(
        <footer className="footer bg-light text-center pb-3 pt3">
            <Contact />
            <div className="pt-3 pb-3 text-center">
                <a className="mx-2" href="https://www.instagram.com/_mihir.panchal_/" ><i className="fab fa-instagram fa-2x"></i></a>
                <a className="mx-2" href="https://github.com/Mihir06121"><i className="fab fa-github fa-2x"></i></a>
                <a className="mx-2" href="https://www.linkedin.com/in/mihir-panchal-5167811a4/"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
            <div className="container">Copyright © <a rel="noopener noreferrer" target="_blank"
                href="https://mihirpanchal.com">mihirpanchal.com</a> 2020
            </div>
        </footer>
    )

}

export default Footer