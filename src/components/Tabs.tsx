import { IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import './Tabs.css';
import { Candidate } from '../Types';

interface TabsProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Tabs: React.FC<TabsProps> = ({  }: TabsProps) => {
	/* This is returned when using this component */
	const { id } = useParams<{ id: string }>();
	const [selectedTab, setSelectedTab] = React.useState('0'); 

	return (
		<div className="tabbar">
			<Link to={`/politician/${id}/profile`}>
				{selectedTab == '0' ? 
					<IonButton className="tabs acticated" onClick={(e) => setSelectedTab('0')} >PROFIL<br />SEITE</IonButton>
				:
					<IonButton className="tabs" onClick={(e) => setSelectedTab('0')} >PROFIL<br />SEITE</IonButton>
				}
			</Link>
				<IonButton className="tabs">LEBENS<br />LAUF</IonButton>
				<IonButton className="tabs">KONTRO<br />VERSEN</IonButton>
			<Link to={`/politician/${id}/election`}>
			{selectedTab == '4' ?
				<IonButton className="tabs activated" onClick={(e) => setSelectedTab('4')}>WAHL<br />CHANCEN</IonButton>
			:
			<IonButton className="tabs" onClick={(e) => setSelectedTab('4')}>WAHL<br />CHANCEN</IonButton>
			}
			</Link>
		</div>	
	);
};

export default Tabs;
