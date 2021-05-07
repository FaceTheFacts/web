import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import './HomeNavBar.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const HomeNavBar: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="nav-header">
			<NavLink id="home" to={'/'}>
				<Logo />
			</NavLink>
			<div className="links">
				<NavLink
					id="legal-notice"
					to={'/legal-notice'}
					className="navbar"
					activeClassName="navbar activ"
				>
					Impressum
				</NavLink>
				<NavLink
					id="privacy"
					to={'/privacy'}
					className="navbar"
					activeClassName="navbar activ"
				>
					Datenschutz
				</NavLink>
			</div>
		</div>
	);
};

export default HomeNavBar;
