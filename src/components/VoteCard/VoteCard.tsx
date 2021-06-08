import React from 'react';
import VoteChart from './VoteChart/VoteChart';
import './VoteCard.css';
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonGrid,
	IonCol,
	IonRow,
} from '@ionic/react';
import { PollData } from '../../Types';
import { voteJudgeHandler } from '../../functions/voteJudgeHandler';
import Positioning from '../PositionCards/Positioning/Positioning';
import { useQuery } from 'react-query';
import fetch from '../../functions/queries'

interface ContainerProps {
	vote: PollData;
	name: string;
}

const VoteCard: React.FC<ContainerProps> = ({ vote, name }: ContainerProps) => {
	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);

	const votequery = useQuery(
		`vote-${vote.id}`,
		() => fetch(`votes?poll=${vote.id}&mandate[entity.label][cn]=${name}`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);
	const yes = useQuery(
		`yes-${vote.id}`,
		() => fetch(`votes?poll=${vote.id}&vote=yes&range_end=1`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);
	const no = useQuery(`no-${vote.id}`, () => fetch(`votes?poll=${vote.id}&vote=no&range_end=1`), {
		staleTime: 60 * 10000000, // 10000 minute = around 1 week
		cacheTime: 60 * 10000000,
	});
	const noShow = useQuery(
		`noShow-${vote.id}`,
		() => fetch(`votes?poll=${vote.id}&vote=no_show&range_end=1`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);
	const abstain = useQuery(
		`abstain-${vote.id}`,
		() => fetch(`votes?poll=${vote.id}&vote=abstain&range_end=1`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	if (votequery.status === 'loading') {
		return <p>Loading</p>;
	}

	if (yes.status === 'error') {
		return <p>Error: {votequery.error}</p>;
	}

	let judge, noTotal: number, yesTotal: number, abstainTotal: number, noShowTotal: number;
	let totalvotes: [number, number, number, number] = [0, 0, 0, 0];
	/* 
	Dynamically calculate the total number of votes
	*/
	if (
		yes.status === 'success' &&
		no.status === 'success' &&
		abstain.status === 'success' &&
		noShow.status === 'success'
	) {
		yesTotal = yes.data.meta.result.total;
		noTotal = no.data.meta.result.total;
		abstainTotal = abstain.data.meta.result.total;
		noShowTotal = noShow.data.meta.result.total;
		totalvotes = [yesTotal, noTotal, abstainTotal, noShowTotal];
		judge = 'Antrag ' + voteJudgeHandler(yesTotal, yesTotal + noTotal + abstainTotal);
	}

	let positioning = 'noData';

	if (votequery.data.data[0] !== undefined) {
		positioning = votequery.data.data[0].vote
	}

	return (
		<React.Fragment>
			<IonCard className="vote-card" onClick={(): void => setShowDetails(!showDetails)}>
				<IonCardHeader className="vote-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="8">
								<IonCardTitle
									className="vote-card-title"
									data-testid="vote-card-title"
								>
									{vote.label}
								</IonCardTitle>
							</IonCol>
							<IonCol size="4">
								<div className="candidate-vote">
									<Positioning positioning={positioning} />
								</div>
							</IonCol>
							<IonCol size="12">
								<div className="vote-card-border"></div>
								<div className="judgement" data-testid="vote-card-judgement">
									{judge}
								</div>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardHeader>

				<IonCardContent className="vote-card-content">
					{/* We also use a grid here to more easily arrange the indivdual components. */}
					<IonGrid>
						{/* Vote Result Chart */}
						<IonRow>
							<IonCol size="12">
								<div className="vote-chart-container">
									{/* Render a VoteChart component for the vote result */}
									<VoteChart totalvotes={totalvotes} />
								</div>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>
		</React.Fragment>
	);
};

export default VoteCard;
