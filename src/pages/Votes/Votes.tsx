import arrowLogo from '../../assets/images/arrow-up.svg';
import filterLogo from '../../assets/images/filter.svg';
import LinkButton from '../../components/LinkButton';
import Topics from '../../components/TopicFilter/Topics/Topics';
import VoteCard from '../../components/VoteCard/VoteCard';
import { iconEnum } from '../../enums/icon.enum';
import { newfetch } from '../../functions/queries';
import './Votes.css';
import { IonContent, IonImg, IonItem, IonLabel, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { useParams } from 'react-router';
import Spinner from '../../components/Spinner/Spinner';

const Votes: React.FC = () => {
	const [filter, setFilter] = useState(false);
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const { id } = useParams<{ id: string }>();
	const { data, status } = useQuery(`politician-${id}`, () => newfetch(`politicians/${id}`), {
		staleTime: 60 * 10000000, // 10000 minute = around 1 week
		cacheTime: 60 * 10000000,
	});

	const polls = useQueries(
		pollIds.map((pollId) => {
			return {
				queryKey: ['profile-page-polls', pollId, data?.label],
				// eslint-disable-next-line
				queryFn: () => newfetch(`profile-page-polls/${pollId}/${data?.label}`),
				staleTime: 60 * 1440000,
				cacheTime: 60 * 1440000, // 1 day
			};
		})
	);
	if (status === 'loading' || polls[0].status === 'loading') {
		return <Spinner/>;
	}

	if (status === 'error' || polls[0].status === 'error') {
		return <Spinner/>;
	}

	return (
		<IonPage className="votes-black-back">
			<div className="votes-header-container">
				<LinkButton linkTo={`/politician/${id}/profile`} icon={iconEnum.CHEVRON_BACK} />
				<div className="vote-page-title">zurück</div>
				<IonImg
					id="filter-logo"
					src={filterLogo}
					alt="filter"
					onClick={(): void => setFilter(true)}
				/>
			</div>
			<IonContent>
				{filter ? (
					<div className="vote-filter">
						<div className="vote-filter-title">Nach Themen filtern</div>
						<div className="votes-topics">
							<Topics />
						</div>
						<IonItem
							className="votes-filter-fold"
							onClick={(): void => setFilter(false)}
						>
							<IonLabel>einklappen</IonLabel>
							<IonImg id="filter-fold" src={arrowLogo} alt="filter-fold" />
						</IonItem>
					</div>
				) : null}
				<div className="vote-content-title">Alle Abstimmungen</div>
				<div className="votes-black-back">
					{
						// eslint-disable-next-line
						polls.map((poll: any, index: number): JSX.Element | undefined => {
							return (
								<div className="votes-vote-card" key={`poll-${index}`}>
									<VoteCard
										vote={poll.data}
										name={data?.label}
										setArrow={(): null => null}
									/>
								</div>
							);
						})
					}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
