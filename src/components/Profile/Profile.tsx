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
import fetch, { newfetch } from '../../functions/queries';
import NoDataCard from '../NoDataCard/NoDataCard';
import SegmentButtons from '../SegmentButtons';
import CVComponent from '../CVComponent/CVComponent';
import WebLinkComponent from '../WebLinkComponent/WebLinkComponent';
import { cv } from './AmthorCv';
import { AmthorWeblinks } from './AmthorWeblinks';
import Spinner from '../Spinner/Spinner';


interface ProfileProps {
	candidate: Politician;
	profileId: string;
}

const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const [showArrow, setArrow] = React.useState(true);
	const [tab, setTab] = React.useState('0');
	let cvData = cv
	const webLinksData = AmthorWeblinks

	// The return type of this will have to get adapted to the final data structure
	// This probably will have to get moved to another component at the top of this app
	// This should overwrite cvData displayed as first try
	// eslint-disable-next-line
	window.onmessage = (e: any): any => {
		console.log(`Received message: ${e.data}`);
		cvData = e.data;
	};


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
	const hasData = data?.data.length !== 0
	const sideJobs = useQuery(
		`sideJob-${candidate.label}`,
		() => newfetch(`sidejobs?politician_name=${candidate.label}`),
		{
			staleTime: 60 * 2880000,
			cacheTime: 60 * 2880000, // 2 days
		}
	);
	const hasSideJob = sideJobs.data?.length !== 0

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

	const hasPollData = polls[0].data !== undefined

	if (status === 'loading' || sideJobs.status === 'loading' || polls[0].status === 'loading') {
		return <Spinner/>;
	}

	if (status === 'error' || sideJobs.status === 'error' || polls[0].status === 'error') {
		return <p>Error</p>;
	}
	return (
		<React.Fragment>
			<SegmentButtons tab={tab} setTab={setTab} type={1} />
			{tab === '0' ? (
				<div className="profile-black-back">
					{hasData ? (
						<div>
							<TitleHeader title="Politische Schwerpunkte" />
							<div className="profile-topic">
								<TopicCard topics={data.data} />
							</div>
						</div>
					) : undefined}
					{hasPollData ? (
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
									polls.map((poll: any, index: number):
										| JSX.Element
										| undefined => {
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
					) : undefined}

					<TitleHeader title="Bekannte Nebentätigkeiten" />
					{hasSideJob ? (
						// eslint-disable-next-line
						sideJobs.data.map((sideJob: any, index: number) => {
							return <SideJobCard sideJob={sideJob} key={index} />;
						})
					) : (
						<NoDataCard type="sideJob" />
					)}
				</div>
			) : tab === '1' ? (
				<CVComponent data={cvData} />
			) : (
				<WebLinkComponent data={webLinksData} />
			)}
		</React.Fragment>
	);
};
export default Profile;
