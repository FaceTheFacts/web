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
				id="Position"
				to={`/politician/${id}/position`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div className="tabtext">Positionen</div>
			</NavLink>
			<NavLink
				id="Profile"
				to={`/politician/${id}/profile`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div className="tabtext">Profilseite</div>
			</NavLink>
			<NavLink
				to={`/politician/${id}/election`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div className="tabtext">Wahlchancen</div>
			</NavLink>
		</div>
	);
};

export default Tabs;
