import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./Header.css";
// import profile from "../images/image1.png";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-top bg-light shadow-lg bb">
      <Navbar className="ml-4 mr-4" light expand="md">
        <NavbarBrand className="underline-color" href="#home"><h2>
            {/* <img className="d-inline-block align-top" width="50" height="50" src={profile}  alt="" /> */}
            <span className="text-primary">Mihir</span> Panchal</h2></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
            <Collapse className="mr-0" isOpen={isOpen} navbar>
            <Nav className="rightNav ml-auto text-dark" navbar>
                <NavItem className="pr-2">
                <NavLink className="underline-color" href="#about" onClick={toggle}><h4><span className="text-primary">A</span>bout</h4></NavLink>
                </NavItem>
                <NavItem className="pr-2">
                <NavLink className="underline-color" href="#projects" onClick={toggle}><h4><span className="text-primary">P</span>rojects</h4></NavLink>
                </NavItem>
                <NavItem className="pr-2">
                <NavLink className="underline-color" href="#qualification" onClick={toggle}><h4><span className="text-primary">Q</span>ualification</h4></NavLink>
                </NavItem>
                <NavItem className="pr-2">
                <NavLink className="underline-color" href="#contact" onClick={toggle}><h4><span className="text-primary">C</span>ontact</h4></NavLink>
                </NavItem>
            </Nav>
            </Collapse>         
      </Navbar>
    </div>
  );
}

export default NavBar;