import React from 'react';
import TopicCard from './TopicCard';
import ArrowLinkButton from './ArrowLinkButton';
import { Candidate } from '../Types';
import VoteCard from '../components/VoteCard';
import SideJobCard from '../components/SideJobCard';
import './Profile.css'

interface ProfileProps {
	candidate: Candidate;
	profileId: string;
}
const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => (
	<React.Fragment>
		<div className="profile-black-back">
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
				<ArrowLinkButton linkTo={`/politician/${profileId}/votes`} />
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
	</React.Fragment>
);
export default Profile;
