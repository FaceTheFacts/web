import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css';
import faceTheFactsLogoNoText from '../assets/images/Logo_without_text.svg';
import SocialMediaLinks from './SocialMediaLinks';


/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const HomeHeader: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="nav-header">
			<NavLink id="home" to={'/'}>
                <img src={faceTheFactsLogoNoText} alt="logo" />
			</NavLink>
			<SocialMediaLinks />
		</div>
	);
};

export default HomeHeader;