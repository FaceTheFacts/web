import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Votes.css';
import LinkButton from '../../components/LinkButton';
import { iconEnum } from '../../enums/icon.enum';
import { useParams } from 'react-router';
import { useQueries, useQuery } from 'react-query';
import fetch from '../../functions/queries';
import VoteCard from '../../components/VoteCard/VoteCard';

const Votes: React.FC = () => {
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const { id } = useParams<{ id: string }>();
	const { data, status, error } = useQuery(
		`politicianProfile-${id}`,
		() => fetch(`politicians/${id}?related_data=show_information`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);
	const polls = useQueries(
		pollIds.map((pollId) => {
			return {
				queryKey: ['poll', pollId],
				// eslint-disable-next-line
				queryFn: () => fetch(`polls/${pollId}`),
				staleTime: 60 * 1440000,
				cacheTime: 60 * 1440000, // 1 day
			};
		})
	);

	switch (status) {
	case 'loading':
		// eslint-disable-next-line
			return <iframe src="https://lottiefiles.com/iframe/58266-quad-cube-shifter-1"></iframe>;
	case 'error':
		return <p>Error: {error}</p>;
	default:
		/* This is returned when using this component */
		return (
			<IonPage className="votes-black-back">
				<div className="votes-header-container">
					<LinkButton
						linkTo={`/politician/${id}/profile`}
						icon={iconEnum.CHEVRON_BACK}
					/>
				</div>
				<IonContent>
					<div className="votes-black-back">
						{
							// eslint-disable-next-line
								polls.map((poll: any, index: number): JSX.Element | undefined => {
								if (poll.data?.data !== undefined) {
									return (
										<li key={index}>
											<VoteCard
												vote={poll.data?.data}
												name={poll.data?.label}
											/>
										</li>
									);
								}
							})
						}
					</div>
				</IonContent>
			</IonPage>
		);
	}
};

export default Votes;
