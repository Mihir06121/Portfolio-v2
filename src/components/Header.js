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
        <NavbarBrand href="#home"><h2>
            {/* <img className="d-inline-block align-top" width="50" height="50" src={profile}  alt="" /> */}
            Mihir Panchal</h2></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
            <Collapse className="mr-0" isOpen={isOpen} navbar>
            <Nav className="rightNav ml-auto" navbar>
                <NavItem>
                <NavLink href="#about" onClick={toggle}>About</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#projects" onClick={toggle}>Projects</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#contact" onClick={toggle}>Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>         
      </Navbar>
    </div>
  );
}

export default NavBar;