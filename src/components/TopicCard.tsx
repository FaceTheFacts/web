import React from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import './TopicCard.css';
import { Topics, Topic } from '../Types';
import { politicalFocusHandler } from '../functions/politicalFocusHandler';
interface TopicCardProps {
	topics: Topics;
}

const TopicCard: React.FC<TopicCardProps> = ({ topics }: TopicCardProps) => {
	return (
		<div>
			{topics instanceof Array
				? topics
					.slice(0)
					.reverse()
					.map((topic: Topic, index: number) => {
						return (
							<IonChip className="topic-card" key={`topic-${index}`}>
								<IonLabel data-testid="topic-name">
									{politicalFocusHandler(topic.committee.label)}
								</IonLabel>
							</IonChip>
						);
					})
				: null}
		</div>
	);
};

export default TopicCard;
