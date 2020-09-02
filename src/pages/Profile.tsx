import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonButtons, IonMenuButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { useParams } from 'react-router';
import './Page.css';
import ExploreContainer from '../components/ExploreContainer';
import TopicFilter from '../components/TopicFilter';
import SubHeading from '../components/SubHeading';
import Menu from '../components/Menu';
import Card from '../components/Card';
import Header from '../components/Header';

const Profile: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
              <IonCardTitle>Philipp Amthor</IonCardTitle>
              
          </IonCardHeader>

              <IonCardContent>
              
              </IonCardContent>

        </IonCard>
        <SubHeading name="Abstimmungsverhalten >" />
      
        <SubHeading name="Kontroversen" />
      
        <SubHeading name="Bekannte Nebentätigkeiten" />
      </IonContent>
  
    </IonPage>
  );
};

export default Profile;
