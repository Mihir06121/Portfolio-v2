import React from 'react'
import Contact from '../components/pages/Contact'

const Footer = () => {
    return(
        <footer className="footer bg-light text-center pb-3 pt3">
            <Contact />
            <div className="container">Copyright © <a rel="noopener noreferrer" target="_blank"
                href="https://mihirpanchal.com">mihirpanchal.com</a> 2020
            </div>
        </footer>
    )
}

export default Footer