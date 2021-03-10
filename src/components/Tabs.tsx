import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router';
import { Candidate } from '../Types';
import { person, home, chatbubbles, archive } from 'ionicons/icons';
import Votes from '../pages/Votes';
import Electionchances from '../pages/ElectionChances';
import Profile from '../pages/Profile';
import './Tabs.css';

interface TabsProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Tabs: React.FC<TabsProps> = ({ candidate }: TabsProps) => {
	/* This is returned when using this component */
	return (
		<div>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/candidate/:id/profile" exact>
						<Profile candidate={candidate as Candidate}></Profile>
					</Route>
					<Route path="/candidate/:id/votes" exact>
						<Votes candidate={candidate as Candidate}></Votes>
					</Route>
					<Route path="/candidate/:id/electionchances" exact>
						<Electionchances candidate={candidate as Candidate}></Electionchances>
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="top" className="tabbar" selectedTab="profile">
					<IonTabButton className="tabbutton" tab="profile" href="profile">
						<IonIcon icon={person} />
					</IonTabButton>
					<IonTabButton className="tabbutton" tab="votes" href="votes">
						<IonIcon icon={home} />
					</IonTabButton>
					<IonTabButton className="tabbutton" tab="controversies">
						<IonIcon icon={chatbubbles} />
					</IonTabButton>
					<IonTabButton
						className="tabbutton"
						tab="electionchances"
						href="electionchances"
					>
						<IonIcon icon={archive} />
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</div>
	);
};

export default Tabs;
