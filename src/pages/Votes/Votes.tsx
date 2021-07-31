import { IonContent, IonImg, IonItem, IonLabel, IonPage } from '@ionic/react';
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
import arrowLogo from '../../assets/images/arrow-up.svg';
import { topicsIdHandler } from '../../functions/topicsIdHandler/topicsIdHandler';

const Votes: React.FC = () => {
	const [filter, setFilter] = useState(false);
	const [filterIds, setFilterIds] = useState<number[]>([])
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
	// Dummy data
	const dummyTopics = [
		'Arbeit und Soziales',
		'Auswärtiges',
		'Bau und Wohnen',
		'Bildung und Forschung',
		'Digitale Agenda',
		'Entwicklung',
		'Ernährung und Landwirtschaft',
	]
	// Update filterIds
	const topicIdAdd = () => {
		const topicIdArr: any= []
		dummyTopics.forEach(topic => {
			const topicId = topicsIdHandler(topic);
				return topicIdArr.push(topicId)	
		})
		setFilterIds([...filterIds, topicIdArr])
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
							if (poll.status === 'success') {
								// console.log(poll.data.field_topics[0].id)
								// console.log(filterIds.flat().flat()[0])
								// filterIds.flat().flat().map(id => console.log(id))
								if(poll.data.field_topics[0].id === filterIds.flat().flat()[1]) {
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
							}
						})
					}
				</div>
				<button onClick = {()=>topicIdAdd()}>Dummy Button</button>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
