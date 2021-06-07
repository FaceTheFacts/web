import React from 'react';
import TopicCard from '../TopicCard';
import LinkButton from '../LinkButton';
import { Candidate, SideJob, Politician, PollData } from '../../Types';
import VoteCard from '../VoteCard/VoteCard';
import SideJobCard from '../SideJobCard';
import './Profile.css';
import TitleHeader from '../TitleHeader';
import { useQuery } from 'react-query';
import './Profile.css';
import { iconEnum } from '../../enums/icon.enum';
import fetch from '../../functions/queries';

interface ProfileProps {
	candidate: Politician;
	profileId: string;
}

const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const { data, status, error } = useQuery(
		`politicalFocus-${candidate.label}`,
		() =>
			fetch(
				`committee-memberships?candidacy_mandate[entity.label][cn]=${candidate.label} (Bundestag 2017 - 2021)`
			),
		{
			staleTime: 60 * 10000000,
			cacheTime: 60 * 10000000, // 10000 minute = around 1 week
		}
	);
	const sideJobs = useQuery(
		`sideJob-${candidate.label}`,
		() => fetch(`sidejobs?mandates[entity.label][cn]=${candidate.label}&range_end=10`),
		{
			staleTime: 60 * 2880000,
			cacheTime: 60 * 2880000, // 2 days
		}
	);
	const polls = useQuery(
		'poll',
		() => fetch('polls?field_legislature[entity.label]eq=Bundestag 2017 - 2021&range_end=10'),
		{
			staleTime: 60 * 1440000,
			cacheTime: 60 * 1440000, // 1 day
		}
	);

	if (status === 'loading' || sideJobs.status === 'loading' || polls.status === 'loading') {
		return <iframe src="https://lottiefiles.com/iframe/58266-quad-cube-shifter-1"></iframe>;
	}

	if (status === 'error' || sideJobs.status === 'error' || polls.status === 'error') {
		return <p>Error: {error}</p>;
	}
	return (
		<React.Fragment>
			<div className="profile-black-back">
				{data.data.length !== 0 ? (
					<div>
						<TitleHeader title="Politische Schwerpunkte" />
						<div className="profile-topic">
							<TopicCard topics={data.data} />
						</div>
					</div>
				) : null}
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
								<VoteCard vote={poll} name={candidate.label} />
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
