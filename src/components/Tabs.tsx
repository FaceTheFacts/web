import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Tabs.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Tabs: React.FC = () => {
	/* This is returned when using this component */
	const { id } = useParams<{ id: string }>();

	return (
		<div className="tabbar">
			<NavLink
				to={`/politician/${id}/profile`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div>PROFIL</div>
			</NavLink>
			<NavLink
				to={`/politician/${id}/votes`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div>BIO</div>
			</NavLink>
			<NavLink
				to={`/politician/${id}/votes`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div>NEWS</div>
			</NavLink>
			<NavLink
				to={`/politician/${id}/election`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div>WAHL</div>
			</NavLink>
		</div>
	);
};

export default Tabs;
