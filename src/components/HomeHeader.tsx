import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './HomeHeader.css';
import faceTheFactsLogoNoText from '../assets/images/Logo_without_text.svg';
import faceBookLogo from '../assets/images/facebook-square-brands.svg'
import instagramLogo from '../assets/images/instagram-brands.svg'
import linkedInLogo from '../assets/images/linkedin-brands.svg'
import twitterLogo from '../assets/images/twitter-brands.svg'


/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const HomeHeader: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="nav-header">
			<NavLink id="home" to={'/'}>
                <img src={faceTheFactsLogoNoText} alt="logo" />
			</NavLink>
			<div className="links">
                <a className="logo-link" href="https://www.instagram.com/face_the_facts_app/"><img src={instagramLogo} alt="logo" /></a>
                <a className="logo-link" href="https://www.linkedin.com/company/71743117"><img src={linkedInLogo} alt="logo" /></a>
                <a className="logo-link" href="https://www.facebook.com/Face-the-Facts-110924574516372"><img src={faceBookLogo} alt="logo" /></a>
                <a className="logo-link" href="https://twitter.com/FaceTheFactsApp"><img src={twitterLogo} alt="logo" /></a>
			</div>
		</div>
	);
};

export default HomeHeader;