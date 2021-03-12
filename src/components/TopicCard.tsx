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
    <IonChip className = "topic-card">
     <IonIcon src = "assets/icon/sack-dollar-light.svg" color="light" />
      <IonLabel>
        Finanzen
      </IonLabel>
    </IonChip>
    // <IonCard className = "topic-card">
    //   <IonItem>
    //    <IonIcon src = "assets/icon/sack-dollar-light.svg" slot="start"> 
    //    </IonIcon>
    //     Finanzen
    //   </IonItem>
    // </IonCard>
		// <div className="topic-filters">
		// 	<div className="topic-filter-row">
		// 		{topicFilters.row0.map((topicFilter, index) => {
		// 			return (
		// 				<IonButton fill="clear" className="topic-filter-button" key={`0-${index}`}>
		// 					<IonIcon slot="start" src={topicFilter.icon} />
		// 					{topicFilter.name}
		// 				</IonButton>
		// 			);
		// 		})}
		// 	</div>
		// </div>
	);
};

export default TopicCard;