import React from 'react';
<<<<<<< HEAD:src/components/Profile/Profile.tsx
import TopicCard from '../TopicCard';
import LinkButton from '../LinkButton';
import { Candidate, SideJob } from '../../Types';
import VoteCard from '../VoteCard/VoteCard';
import SideJobCard from '../SideJobCard';
=======
import TopicCard from './TopicCard';
import LinkButton from './LinkButton';
import { Candidate, SideJob, Politician, PollData } from '../Types';
import VoteCard from '../components/VoteCard';
import SideJobCard from '../components/SideJobCard';
>>>>>>> Implement API:src/components/Profile.tsx
import './Profile.css';
import TitleHeader from '../TitleHeader';
import { useQuery } from 'react-query';
import './Profile.css';
<<<<<<< HEAD:src/components/Profile/Profile.tsx
import { iconEnum } from '../../enums/icon.enum';
=======
import { iconEnum } from '../enums/icon.enum';
import fetch from '../functions/queries'
>>>>>>> Implement API:src/components/Profile.tsx
interface ProfileProps {
	candidate: Politician;
	profileId: string;
}

const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const { data, status, error } = useQuery(`politicalFocus-${candidate.label}`, () => fetch(`committee-memberships?candidacy_mandate[entity.label][cn]=${candidate.label} (Bundestag)`))
	const sideJobs = useQuery(`sideJob-${candidate.label}`, () => fetch(`sidejobs?mandates[entity.label][cn]=${candidate.label}&range_end=10`))
	const polls = useQuery('poll', () => fetch('polls?field_legislature[entity.label]eq=Bundestag&range_end=10'))
	
	if (status === 'loading' || sideJobs.status === 'loading' || polls.status === 'loading' ) {
		return (<p>Loading</p>);
	}

	if (status === 'error' || sideJobs.status === 'error' || polls.status === 'error') {
		return (<p>Error: {error}</p>);
	}
	return (
		<React.Fragment>
			<div className="profile-black-back">
				{ data.data.length !== 0 ? 
				<div>
					<TitleHeader title="Politische Schwerpunkte" />
					<div className="profile-topic">	
						<TopicCard topics={data.data} />
					</div>
				</div> : null }
				<TitleHeader title="Kürzliche Abstimmungen">
					<LinkButton
						linkTo={`/politician/${profileId}/votes`}
						icon={iconEnum.ARROW_FORWARD}
					/>
				</TitleHeader>
				<ul className="vote-card-lists">
					{polls.data.data.map((poll: PollData, index: number) => {
						return (
							<li key={index}>
								<VoteCard vote={poll} name={candidate.label}/>
							</li>
						);
					})}
				</ul>

				<TitleHeader title="Bezahlte Tätigkeiten" />
				{sideJobs.data.data.map((sideJob: any, index: number) => {
					return <SideJobCard sideJob={sideJob} key={index} />;
				})}
			</div>
		</React.Fragment>
	);
};
export default Profile;