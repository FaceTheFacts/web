import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css';
import faceTheFactsLogoNoText from '../assets/images/Logo_without_text.svg';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const HomeHeader: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="homeheader">
			<NavLink className= "homeheader-logo" id="home" to={'/'}>
				<img src={faceTheFactsLogoNoText} alt="logo" />
			</NavLink>
			<div>
				<NavLink
					to={'/about-us'}
					className="homeheader-navbar"
					activeClassName="homeheader-navbar homeheader-navbar-activ"
				>
					ÜBER UNS
				</NavLink>
				<NavLink
					to={'/contact'}
					className="homeheader-navbar homeheader-navbar-second"
					activeClassName="homeheader-navbar homeheader-navbar-activ"
				>
					KONTAKT
				</NavLink>
			</div>
		</div>
	);
};

export default HomeHeader;
