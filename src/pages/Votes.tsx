import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import TopicFilter from '../components/TopicFilter';
import SubHeading from '../components/SubHeading';
import './Page.css';

const Votes: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name} - Votes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen scrollEvents={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SubHeading name="Filtern Nach Themen" />
        <TopicFilter name={name} />
        <SubHeading name="Übereinstimmung mit anderen Fraktionen" />
        <SubHeading name="Abstimmungen" />
      </IonContent>
    </IonPage>
  );
};

export default Votes;
