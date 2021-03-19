import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import VoteCard from '../components/VoteCard';
import SideJobCard from '../components/SideJobCard';
import KontroCard from '../components/KontroCard';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile'
import './Profile.css';
import { Candidate } from '../Types';
import ArrowLinkButton from '../components/ArrowLinkButton';
import TopicCard from '../components/TopicCard';

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

				{/* Pass name to Subheading to be in control of the sub heading text */}

				<div data-testid="profile-subheading-controversies">
					<SubHeading name="Kontroversen" icon="infobutton.svg" />
				</div>

					<div className="category-container">
						<div className="category-items" data-testid="candidate-recent-votes">
							Kürzliche Abstimmungen
						</div>
						<ArrowLinkButton linkTo={`/politician/${id}/votes`} />
					</div>

					<ul className="vote-card-lists">
						{candidate.polls.map((poll, index) => {
							return (
								<li key={index}>
									<VoteCard vote={poll} />
								</li>
							);
						})}
					</ul>

					<div className="category-container">
						<div className="category-items" data-testid="candidate-activities">
							Bezahlte Tätigkeiten
						</div>
					</div>
					{/* For each item in title, render a NebenCard component */}
					{candidate.sideJobs.map((sideJob, index) => {
						return <SideJobCard sideJob={sideJob} key={index} />;
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
