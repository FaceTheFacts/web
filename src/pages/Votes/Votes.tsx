import { IonContent, IonImg, IonItem, IonLabel, IonPage } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import './Votes.css';
import LinkButton from '../../components/LinkButton';
import { iconEnum } from '../../enums/icon.enum';
import { useParams } from 'react-router';
import { useQueries, useQuery } from 'react-query';
import { newfetch } from '../../functions/queries';
import VoteCard from '../../components/VoteCard/VoteCard';
import Topics from '../../components/TopicFilter/Topics/Topics';
import filterLogo from '../../assets/images/filter.svg';
import arrowLogo from '../../assets/images/arrow-up.svg';
import { topicsIdHandler } from '../../functions/topicsIdHandler/topicsIdHandler';

const Votes: React.FC = () => {
	const filterList = [
		'Arbeit und Soziales',
		'Auswärtiges',
		'Bau und Wohnen',
		'Bildung und Forschung',
		'Digitale Agenda',
		'Entwicklung',
		'Ernährung und Landwirtschaft',
		'Europäische Union',
		'Familie',
		'Finanzen',
		'Gesundheit',
		'Haushalt',
		'Inneres',
		'Kultur und Medien',
		'Menschenrechte',
		'Nachrichtendienste',
		'Parlamentsangelegenheiten',
		'Recht und Verbraucherschutz',
		'Sport',
		'Tourismus',
		'Umwelt',
		'Infrastruktur',
		'Verteidigung',
		'Wirtschaft und Energie',
	];

	const [filter, setFilter] = useState(false);
	const [filterIds, setFilterIds] = useState<number[]>([]);
	const [topicFilter, setTopicFilter] = useState(filterList);
	useEffect(() => {
		setFilterIds(topicsIdHandler(topicFilter));
	}, [topicFilter]);
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const { id } = useParams<{ id: string }>();
	const { data, status } = useQuery(`politician-${id}`, () => newfetch(`politicians/${id}`), {
		staleTime: 60 * 10000000, // 10000 minute = around 1 week
		cacheTime: 60 * 10000000,
	});
	let dependantQuery = false;
	if (status === 'success') {
		dependantQuery = true;
	}

	const contentRef = useRef<HTMLIonContentElement | null>(null);
	const scrollToTop = (): void => {
		setFilter(!filter);
		contentRef.current && contentRef.current.scrollToTop(1000);
	}
	const polls = useQueries(
		pollIds.map((pollId) => {
			return {
				queryKey: ['new-poll', pollId],
				// eslint-disable-next-line
				queryFn: () => newfetch(`polls/${pollId}`),
				staleTime: 60 * 1440000,
				cacheTime: 60 * 1440000, // 1 day
				// eslint-disable-next-line
				enabled: dependantQuery!!,
			};
		})
	);

	return (
		<IonPage className="votes-black-back">
			<div className="votes-header-container">
				<LinkButton linkTo={`/politician/${id}/profile`} icon={iconEnum.CHEVRON_BACK} />
				<div className="vote-page-title">zurück</div>
				<IonImg
					id="filter-logo"
					src={filterLogo}
					alt="filter"
					onClick={(): void => scrollToTop() }
				/>
			</div>
			<IonContent ref={contentRef}>
				{filter ? (
					<div className="vote-filter">
						<div className="vote-filter-title">Nach Themen filtern</div>
						<div className="votes-topics">
							<Topics setFilter={setTopicFilter} filter={topicFilter} />
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
				<div className="vote-content-title">Abstimmungen</div>
				<div className="votes-black-back">
					{
						// eslint-disable-next-line
						polls.map((poll: any, index: number): JSX.Element | undefined => {
							if (poll.status === 'success') {
								const fieldTopicLength = poll.data.field_topics.length;
								for (let i = 0; i < fieldTopicLength; i++) {
									if (
										filterIds
											.flat()
											.flat()
											.includes(poll.data.field_topics[i].id) ||
										filterIds.length === 0
									) {
										return (
											<div className="votes-vote-card" key={`poll-${index}`}>
												<VoteCard
													vote={poll.data}
													name={data.label}
													setArrow={(): null => null}
												/>
											</div>
										);
									}
								}
							}
						})
					}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
