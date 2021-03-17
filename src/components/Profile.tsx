import React from 'react';
import TopicCard from './TopicCard';
import ArrowLinkButton from './ArrowLinkButton';
import { Candidate } from '../Types';
import VoteCard from '../components/VoteCard';
import SideJobCard from '../components/SideJobCard';
import './Profile.css'
import TitleHeader from './TitleHeader';

import './Profile.css';
interface ProfileProps {
	candidate: Candidate;
	profileId: string;
}
const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => (
	<React.Fragment>
		<div className="profile-black-back">
			{/* <div className="category-container">
				<div className="category-items" data-testid="candidate-priorities">
					Politische Schwerpunkte
				</div>
			</div> 
			<div className="category-container">
				<div className="category-items" data-testid="candidate-recent-votes">
					Kürzliche Abstimmungen
				</div>
			</div>
			<div className="category-container">
				<div className="category-items" data-testid="candidate-activities">
					Bezahlte Tätigkeiten
				</div>
			</div> */}

			<TitleHeader title="Politische Schwerpunkte" />
			<div className="horizontal-scroll">
				<TopicCard />
			</div>
			<TitleHeader title="Kürzliche Abstimmungen">
				<ArrowLinkButton linkTo={`/politician/${profileId}/votes`} />
			</TitleHeader>
			<ul className="vote-card-lists">
				{candidate.polls.map((poll, index) => {
					return (
						<li key={index}>
							<VoteCard vote={poll} />
						</li>
					);
				})}
			</ul>

			<TitleHeader title="Bezahlte Tätigkeiten" />
			{candidate.sideJobs.map((sideJob, index) => {
				return <SideJobCard sideJob={sideJob} key={index} />;
			})}
		</div>
	</React.Fragment>
);
export default Profile;
