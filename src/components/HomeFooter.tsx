import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Logo_without_text.svg';
import './HomeFooter.css';
import SocialMediaLinks from './SocialMediaLinks';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const HomeFooter: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="nav-footer">
			<NavLink id="home" to={'/'}>
				<img src={logo} alt="logo"/>
				<span>Face The Facts</span>
			</NavLink>
			<div className="social-media-bottom">
				<SocialMediaLinks position="bottom"/>
			</div>
			<div className="links">
				<NavLink
					id="privacy-bottom"
					to={'/privacy'}
					className="navbar"
					activeClassName="navbar activ"
				>
					Datenschutz
				</NavLink>
				<NavLink
					id="legal-notice-bottom"
					to={'/legal-notice'}
					className="navbar"
					activeClassName="navbar activ"
				>
					Impressum
				</NavLink>
			</div>
		</div>
	);
};

export default HomeFooter;
