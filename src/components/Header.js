import React from 'react';
import {
  NavLink,
} from 'reactstrap';
import "./pages/Nav.css";

const NavBar = (props) => {

  return (
   


    <div>
      <div class="navigation">
			<input type="checkbox" id="navi-toggle" class="navigation__checkbox" />

			<label for="navi-toggle" class="navigation__button">
				<span class="navigation__icon">
					<span class="navigation__icon-span"></span>
					<span class="navigation__icon-span"></span>
					<span class="navigation__icon-span"></span>
					<span class="navigation__icon-span"></span>
					<span class="navigation__icon-span"></span>
					<span class="navigation__icon-span"></span>
				</span>
			</label>

			<div for="navi-toggle" class="navigation__background">&nbsp;</div>

			<nav class="navigation__nav">
				<ul class="navigation__list" id="navi-toggle">
					<li for="navi-toggle" class="navigation__item">
            <NavLink className="navigation__link" href="#about"><span className="text-primary">A</span>bout</NavLink>
					</li>
					<li for="navi-toggle" class="navigation__item">
          <NavLink className="navigation__link" href="#projects"><span className="text-primary">P</span>rojects</NavLink>
					</li>
					<li for="navi-toggle" class="navigation__item" >
          <NavLink className="navigation__link" href="#qualification"><span className="text-primary">Q</span>ualification</NavLink>
					</li>
					<li for="navi-toggle" class="navigation__item">
          <NavLink className="navigation__link" href="#contact"><span className="text-primary">C</span>ontact</NavLink>
					</li>
				</ul>
			</nav>
		</div>
  
    </div>


  );
}

export default NavBar;