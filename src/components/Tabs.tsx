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
				// directing to bio until Position Page is ready
				to={`/politician/${id}/bio`}
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
			{/* BIO and NEWS not part of current MVP
			<NavLink to={`/politician/${id}/bio`} className="tabs" activeClassName="tabs activated">
				<div>BIO</div>
			</NavLink>
			<NavLink
				to={`/politician/${id}/news`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div>NEWS</div>
			</NavLink> */}
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
