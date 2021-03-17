import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import VoteCard from '../components/VoteCard';
import SubHeading from '../components/SubHeading'
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile'
import './Profile.css';
import { Candidate } from '../Types';
import ProfileComponent from '../components/Profile';
interface ProfileProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC<ProfileProps> = ({ candidate }: ProfileProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();

	/* This is returned when using this component */
	return (
		<IonPage>
			{' '}
			{/* Page Tag */}
			<IonHeader>
				{' '}
				{/* Header Tag */} {/* Toolbar tag, this is the title bar / top bar */}
			</IonHeader>
			{/* Here the content of our page starts */}
			
			{/* ProfileImg component that holds all the images of the politicians. 
			Right now the name property is not being used, maybe it's an idea to dynamically pass in images 
			to make our life easier when we add the profiles images of new politicians.
			The politicans name is included on the ProfileImg */}

			{/* Subheading-button created by using a div for the background color and placing a button over part of it*/}
			<PoliticianProfile candidate={candidate}/>
			<Tabs />
			<IonContent>
				<div className="subheading-button-underlay" data-testid="profile-subheading-votes">
					<SubHeading
						name="Abstimmungsverhalten >"
						icon="infobutton.svg"
						buttonAction={`/politician/${id}/votes`}
					/>
				</div>
				<div className="grey-back">
					{/* 
				For each vote in votes, render a VoteCard component 
				Only the first vote for now, until we display them horizontally
				*/}
					{candidate.polls.map((poll, index) => {
						if (index === 0) return <VoteCard vote={poll} key={index} />;
						else return null;
					})}
				</div>
				<ProfileComponent candidate = {candidate} profileId = {id}/>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
