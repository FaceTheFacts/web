import React from 'react';
import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import './TopicCard.css';




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