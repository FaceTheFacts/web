import { IonContent, IonRouterOutlet, IonHeader, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonFab } from '@ionic/react';
import React from 'react';
import { useParams, Route,  } from 'react-router';
import SubHeading from '../components/SubHeading';
import VoteCard from '../components/VoteCard';
import SideJobCard from '../components/SideJobCard';
import KontroCard from '../components/KontroCard';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';
import { person, home, chatbubbles, archive } from 'ionicons/icons';
import Votes from '../pages/Votes';
import Electionchances from '../pages/ElectionChances';
import Profile from '../pages/Profile';
import './Tabs.css'

interface TabsProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Tabs: React.FC<TabsProps> = ({ candidate }: TabsProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();

	/* This is returned when using this component */
	return (<div>
        
    <IonTabs>
        
                
{/*	
Using the render method prop cuts down the number of renders your components will have due to route changes.
Use the component prop when your component depends on the RouterComponentProps passed in automatically.
	*/}	<IonRouterOutlet>
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
                <IonTabButton tab="profile" href="profile">
                    <IonIcon icon={person} />
                </IonTabButton>
                <IonTabButton tab="votes" href="votes" >
                    <IonIcon icon={home} />
                </IonTabButton>
                <IonTabButton tab="controversies" >
                    <IonIcon icon={chatbubbles} />
                </IonTabButton>
                <IonTabButton tab="electionchances" href="electionchances">
                    <IonIcon icon={archive} />
                </IonTabButton>
            </IonTabBar>
            
        </IonTabs></div>
    );
};

export default Tabs;