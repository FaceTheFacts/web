import React from 'react';
import { Position } from '../Types';
import PositionCard from './PositionCard';
interface PostionCardsProps {
	candidateId: number;
	positions: Array<Position>;
}
const PositionCards: React.FC<PostionCardsProps> = ({
	candidateId,
	positions,
}: PostionCardsProps) => (
	<React.Fragment>
		{positions.map((position, index) => (
			<PositionCard
				key={`position-${index}`}
				candidateId={candidateId}
				title={position.title}
				answer={position.answer}
			/>
		))}
	</React.Fragment>
);

export default PositionCards;
