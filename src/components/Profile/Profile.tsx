import React from 'react';
import TopicCard from '../TopicCard';
import LinkButton from '../LinkButton';
import { Candidate, SideJob } from '../../Types';
import VoteCard from '../VoteCard/VoteCard';
import SideJobCard from '../SideJobCard';
import './Profile.css';
import TitleHeader from '../TitleHeader';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import './Profile.css';
import { iconEnum } from '../../enums/icon.enum';
interface ProfileProps {
	candidate: Candidate;
	profileId: string;
}

const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const data = useQuery('politicalFocus', () => axios(`https://www.abgeordnetenwatch.de/api/v2/committee-memberships?candidacy_mandate[entity.label][cn]=${candidate.name}`))
	const politicalFocusData: AxiosResponse<any> | undefined | any = data.data

	return (
		<React.Fragment>
			<div className="profile-black-back">
<<<<<<< HEAD
				<TitleHeader title="Politische Schwerpunkte" />
				<div className="profile-topic">
					<TopicCard />
				</div>
=======
				{politicalFocusData !== undefined ?	
				<div>
					<TitleHeader title="Politische Schwerpunkte" />
					<TopicCard topics={politicalFocusData} />
				</div>
				: null }
>>>>>>> Add if statemant in case no political focus data
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
				{candidate.sideJobs.map((sideJob, index) => {
					return <SideJobCard sideJob={sideJob} key={index} />;
				})}
			</div>
		</React.Fragment>
	);
};
export default Profile;
