import React from 'react';
import { Position } from '../Types';
import PositionCard from './PositionCard';
interface PostionCardsProps {
	positions: Array<Position>;
}
const PositionCards: React.FC<PostionCardsProps> = ({ positions }: PostionCardsProps) => (
	<React.Fragment>
		{positions.map((position, index) => (
			<PositionCard key={`position-${index}`} title={position.title} />
		))}
	</React.Fragment>
);

export default PositionCards;
