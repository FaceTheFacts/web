import React, { useEffect, useState } from 'react';
import TopicCard from './TopicCard';
import LinkButton from './LinkButton';
import { Candidate, SideJob } from '../Types';
import VoteCard from '../components/VoteCard/VoteCard';
import SideJobCard from '../components/SideJobCard';
import './Profile.css';
import TitleHeader from './TitleHeader';

import './Profile.css';
import { iconEnum } from '../enums/icon.enum';
interface ProfileProps {
	candidate: Candidate;
	profileId: string;
}
const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const [sideJob, setSideJob] = useState<SideJob>();
	const url = `https://virtserver.swaggerhub.com/Face-the-Facts/REST-API/0.0.4/candidates/${profileId}/sidejobs`;
	const loadData = async (): Promise<void> => {
		const response = await fetch(url);
		const data = await response.json();
		setSideJob(data[0]);
	};
	useEffect(() => {
		loadData();
	});

	return (
		<React.Fragment>
			<div className="profile-black-back">
				<TitleHeader title="Politische Schwerpunkte" />
				<div className="profile-topic">
					<TopicCard />
				</div>
				<TitleHeader title="Kürzliche Abstimmungen">
					<LinkButton
						linkTo={`/politician/${profileId}/votes`}
						icon={iconEnum.ARROW_FORWARD}
					/>
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
				{sideJob !== undefined ? <SideJobCard sideJob={sideJob} /> : null}
				{candidate.sideJobs.map((sideJob, index) => {
					return <SideJobCard sideJob={sideJob} key={index} />;
				})}
			</div>
		</React.Fragment>
	);
};
export default Profile;
