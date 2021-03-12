import React from 'react';
import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import './TopicCard.css';

const topics = [
		{
			name: 'Finanzen',
			icon: 'assets/icon/sack-dollar-light.svg',
			filter: '',
		},
		{
			name: 'Heimat',
			icon: 'assets/icon/landmark-light.svg',
			filter: '',
		},
		{
			name: 'Auswärtiges',
			icon: 'assets/icon/handshake-light.svg',
			filter: '',
		},
		{
			name: 'Wirtschaft und Energie',
			icon: 'assets/icon/chart-line-light.svg',
			filter: '',
		},
		{
			name: 'Justiz',
			icon: 'assets/icon/balance-scale-left-light.svg',
			filter: '',
		},
		{
			name: 'Soziales',
			icon: 'assets/icon/user-friends-light.svg',
			filter: '',
		},
		{
			name: 'Verteidigung',
			icon: 'assets/icon/shield-light.svg',
			filter: '',
		},
		{
			name: 'Landwirtschaft',
			icon: 'assets/icon/seedling-light.svg',
			filter: '',
		},
		{
			name: 'Familie',
			icon: 'assets/icon/users-light.svg',
			filter: '',
		},
		{
			name: 'Gesundheit',
			icon: 'assets/icon/heartbeat-light.svg',
			filter: '',
		},
		{
			name: 'Infrastruktur',
			icon: 'assets/icon/chart-network-light.svg',
			filter: '',
		},
		{
			name: 'Umwelt',
			icon: 'assets/icon/tree-alt-light.svg',
			filter: '',
		},
		{
			name: 'Bildung/Forschung',
			icon: 'assets/icon/graduation-cap-light.svg',
			filter: '',
  },
];


const TopicCard: React.FC = () => {
	return (
    <React.Fragment>
      {
        topics.map((topic, index)=>{
          return(
          <IonChip className = "topic-card" key={`topic-${index}`}>
            <IonIcon src = {topic.icon} color="light" />
            <IonLabel>
              {topic.name}
            </IonLabel>
          </IonChip>
          )
        })
      }
    </React.Fragment>
	);
};

export default TopicCard;