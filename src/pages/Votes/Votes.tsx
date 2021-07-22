import { IonContent, IonImg, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import './Votes.css';
import LinkButton from '../../components/LinkButton';
import { iconEnum } from '../../enums/icon.enum';
import { useParams } from 'react-router';
import { useQueries } from 'react-query';
import { newfetch } from '../../functions/queries';
import VoteCard from '../../components/VoteCard/VoteCard';
import Topics from '../../components/TopicFilter/Topics/Topics';

import filterLogo from '../../assets/images/filter.svg';

const Votes: React.FC = () => {
	const [filter, setFilter] = useState(false);
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const { id } = useParams<{ id: string }>();
	const polls = useQueries(
		pollIds.map((pollId) => {
			return {
				queryKey: ['new-poll', pollId],
				// eslint-disable-next-line
				queryFn: () => newfetch(`polls/${pollId}`),
				staleTime: 60 * 1440000,
				cacheTime: 60 * 1440000, // 1 day
			};
		})
	);
	return (
		<IonPage className="votes-black-back">
			<div className="votes-header-container">
				<LinkButton linkTo={`/politician/${id}/profile`} icon={iconEnum.CHEVRON_BACK} />
				<IonImg
					id="filter-logo"
					src={filterLogo}
					alt="filter"
					onClick={(): void => setFilter(true)}
				/>
			</div>
			<IonContent>
				{filter? (
				<div>
					<div>
						nach Themen filtern
					</div>
					<div className="votes-topics">
						<Topics/>
					</div>
					<div>
					<button onClick={(): void => setFilter(false)}>einklappen</button>
					</div>
				</div>
				
				) :null}
				
				<div className="votes-black-back">
					<div>
						Alle Abstimmungen
					</div>
					{
						// eslint-disable-next-line
						polls.map((poll: any, index: number): JSX.Element | undefined => {
							if (poll.status === 'success') {
								return (
									<div className="votes-vote-card" key={`poll-${index}`}>
										<VoteCard
											vote={poll.data}
											name={poll.label}
											setArrow={(): null => null}
										/>
									</div>
								);
							}
						})
					}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
