import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Home: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="tabbar">
			<NavLink
				id="legal-notice"
				to={'/legal-notice'}
				className="navbar"
				activeClassName="navbar activated"
			>
				<div className="navtext">Impressum</div>
			</NavLink>
			<NavLink
				id="privacy"
				to={`/privacy`}
				className="navbar"
				activeClassName="navbar activated"
			>
				<div className="navtext">Datenschutz</div>
			</NavLink>
        </div>
	);
};

export default Home;