import React from "react";
import VoteChart from "./VoteChart";
import "./VoteCard.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  ViewStacks,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";

interface ContainerProps {
  vote: any;
}

const VoteCard: React.FC<ContainerProps> = ({ vote }) => {
    const candidateVoteClassName = `candidate-vote ${vote.candidateVote.toLowerCase()}`
  return (
    <IonCard>
      <IonCardHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="8">
              <IonCardSubtitle>{vote.subtitle}</IonCardSubtitle>
              <IonCardTitle>{vote.title}</IonCardTitle>
            </IonCol>
            <IonCol size="4">
                <div className={candidateVoteClassName}>
                    {vote.candidateVote}
                </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>

      <IonCardContent>
        <div className="vote-chart-container">
          <VoteChart vote={vote} />
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default VoteCard;
