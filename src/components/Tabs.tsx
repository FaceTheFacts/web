import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css';
interface TabsProps {
	id: string;
}

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
	return (
		<div className="tabbar">
			<NavLink
				id="Position"
				to={`/politician/${props.id}/position`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div className="tabtext">Positionen</div>
			</NavLink>
			<NavLink
				id="Profile"
				to={`/politician/${props.id}/profile`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div className="tabtext">Profilseite</div>
			</NavLink>
			<NavLink
				to={`/politician/${props.id}/election`}
				className="tabs"
				activeClassName="tabs activated"
			>
				<div className="tabtext">Wahlchancen</div>
			</NavLink>
		</div>
	);
};

export default Tabs;
