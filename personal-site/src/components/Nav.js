import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { goToAnchor } from 'react-scrollable-anchor';
import { stack as Menu } from 'react-burger-menu';
import $ from 'jquery';


export default class NavBar extends React.Component {

	render(){
		return(
			<div>
		  	  	<nav className="cl-effect-7 navigation">
					<a href="#about">ABOUT</a>
					<a href="#projects">PROJECTS</a>
					<a href="#contact">CONTACT</a>
					<a href="https://drive.google.com/file/d/0B8o9JiszeZyPVHhwYTctYlJGWHM/view?usp=sharing">RESUME</a>
				</nav>
				<Menu left isOpen={ false } className={"mobile-nav"}>
					<h2>J Rojas</h2>
					<hr/>
					<a href="#about">ABOUT</a>
					<a href="#projects">PROJECTS</a>
					<a href="#contact">CONTACT</a>
					<a href="https://drive.google.com/file/d/0B8o9JiszeZyPVHhwYTctYlJGWHM/view?usp=sharing">RESUME</a>
				</Menu>
			</div>
		)
	}
}

