import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import VoteCard from '../components/VoteCard';
import SideJobCard from '../components/SideJobCard';
<<<<<<< HEAD
import PoliticianProfile from '../components/PoliticianProfile';
=======
import KontroCard from '../components/KontroCard';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile'
>>>>>>> Add styling for Tabs
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
				<div className="profile-header">
					<PoliticianProfile politician={candidate} />
				</div>

				<div className="black-back">
					<div className="category-container">
						<div className="category-items" data-testid="candidate-priorities">
							Politische Schwerpunkte
						</div>
					</div>
					<div className="horizontal-scroll">
						<TopicCard />
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
