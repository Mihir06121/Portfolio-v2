import React, {useState} from 'react';
import { Button, Collapse, Card, CardBody
} from 'reactstrap';
import "./pages/Nav.css";

const NavBar = (props) => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

return (
	<div>
		<div align="right" className="fixed-top">
			<div className="p-5 border-0">
				<Button onClick={toggle}>	
				<label className="navigation__button">
					<span className="navigation__icon">
						<span className="navigation__icon-span">&nbsp;</span>
						<span className="navigation__icon-span">&nbsp;</span>
						<span className="navigation__icon-span">&nbsp;</span>
						<span className="navigation__icon-span">&nbsp;</span>
						<span className="navigation__icon-span">&nbsp;</span>
						<span className="navigation__icon-span">&nbsp;</span>
					</span>
				</label></Button>
				<Collapse className="pt-5" isOpen={isOpen}>
					<Card className="border-0 bg-t">
					<CardBody className="border-0 ml-auto" align="right">
						<ul>
							<li>		
								<Button className="rounded-lg but-bg text-white" href="#home" onClick={toggle} style={{ marginBottom: '1rem' }}><h1>Home</h1></Button>
							</li>
							<li>
								<Button className="rounded-lg but-bg text-white" href="#about" onClick={toggle} style={{ marginBottom: '1rem' }}><h1>About</h1></Button>
							</li>
							<li>
								<Button className="rounded-lg but-bg text-white" href="#projects" onClick={toggle} style={{ marginBottom: '1rem' }}><h1>Projects</h1></Button>
							</li>
							<li>
								<Button className="rounded-lg but-bg text-white" href="#qualification" onClick={toggle} style={{ marginBottom: '1rem' }}><h1>Qualification</h1></Button>
							</li>
							<li>
								<Button className="rounded-lg but-bg text-white" href="#contact" onClick={toggle} style={{ marginBottom: '1rem' }}><h1>Contact</h1></Button>
							</li>
						</ul>
						
					</CardBody>
					</Card>
				</Collapse>
			</div>	
		</div>
	</div>
);
}

export default NavBar;