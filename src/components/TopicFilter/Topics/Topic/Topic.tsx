import React, { useState } from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import { topicFilterHandler } from '../../../../functions/topicFilterHandler';
import className from 'classnames';
import './Topic.css';

// const topics =['Arbeit und Soziales', 'Auswärtiges', 'Bau und Wohnen','Bildung und Forschung', 'Digitale Agenda', 'Entwicklung','Ernährung und Landwirtschaft','Europäische Union', 'Familie', 'Finanzen', 'Gesundheit','Haushalt','Inneres', 'Kultur und Medien', 'Menschenrechte', 'Nachrichtendienste', 'Parlamentsangelegenheiten','Recht und Verbraucherschutz', 'Sport', 'Tourismus', 'Umwelt', 'Infrastruktur', 'Verteidigung','Wirtschaft und Energie']
interface TopicProps {
	title: string;
	setFilter: Function;
	filter: Array<string>;
}

const Topic: React.FC<TopicProps> = (props: TopicProps) => {
	const [topic, setTopic] = useState(false);
	const topicChange = (): void => {
		setTopic(!topic);
		if (props.filter.length === 24) {
			props.setFilter([props.title]);
		} else {
			if (props.filter.includes(props.title)) {
				props.setFilter(props.filter.filter((filteritem) => filteritem !== props.title));
			} else {
				props.setFilter(props.filter.concat(props.title));
			}
		}
	};
	const topicClassName = className('topic', topic ? 'topic-clicked' : '');
	return (
		<IonChip className={topicClassName} onClick={topicChange}>
			<IonLabel>{topicFilterHandler(props.title, topic)}</IonLabel>
		</IonChip>
	);
};

export default Topic;
