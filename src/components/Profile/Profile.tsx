import React from 'react';
import TopicCard from '../TopicCard';
import LinkButton from '../LinkButton';
import { Politician } from '../../Types';
import VoteCard from '../VoteCard/VoteCard';
import SideJobCard from '../SideJobCard';
import './Profile.css';
import TitleHeader from '../TitleHeader';
import { useQueries, useQuery } from 'react-query';
import './Profile.css';
import { iconEnum } from '../../enums/icon.enum';
import fetch, { newfetch, localFetch } from '../../functions/queries';
import NoDataCard from '../NoDataCard/NoDataCard';

interface ProfileProps {
	candidate: Politician;
	profileId: string;
}

const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const [showArrow, setArrow] = React.useState(true);
	const { data, status } = useQuery(
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
		() => newfetch(`sidejobs?politician_name=${candidate.label}`),
		{
			staleTime: 60 * 2880000,
			cacheTime: 60 * 2880000, // 2 days
		}
	);
	const polls = useQueries(
		pollIds.map((pollId) => {
			return {
				queryKey: ['poll', pollId, candidate.label],
				// eslint-disable-next-line
				queryFn: () => fetch(`polls/${pollId}`),
				staleTime: 60 * 1440000,
				cacheTime: 60 * 1440000, // 1 day
			};
		})
	);

	if (status === 'loading' || sideJobs.status === 'loading' || polls[0].status === 'loading') {
		return null;
	}

	if (status === 'error' || sideJobs.status === 'error' || polls[0].status === 'error') {
		return null;
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
				{polls[0].data !== undefined ? (
					<div>
						<TitleHeader title="Wichtigste Abstimmungen">
							<div className={showArrow ? 'show-arrow' : 'hide-arrow'}>
								<LinkButton
									linkTo={`/politician/${profileId}/votes`}
									icon={iconEnum.ARROW_FORWARD}
								/>
							</div>
						</TitleHeader>
						<ul className="vote-card-lists">
							{showArrow ? (
								// eslint-disable-next-line
								polls.map((poll: any, index: number): JSX.Element | undefined => {
									return (
										<li key={index}>
											<VoteCard
												vote={poll.data?.data}
												name={candidate.label}
												setArrow={setArrow}
											/>
										</li>
									);
								})
							) : (
								<NoDataCard type="vote" />
							)}
						</ul>
					</div>
				) : null}

				<TitleHeader title="Bekannte Nebentätigkeiten" />
				{sideJobs.data.length !== 0 ? (
					// eslint-disable-next-line
					sideJobs.data.map((sideJob: any, index: number) => {
						return <SideJobCard sideJob={sideJob} key={index} />;
					})
				) : (
					<NoDataCard type="sideJob" />
				)}
			</div>
		</React.Fragment>
	);
};
export default Profile;
