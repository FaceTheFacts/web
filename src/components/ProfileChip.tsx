import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonChip, IonIcon, IonAvatar } from '@ionic/react';
import "./ProfileChip.css";

interface ContainerProps {
	chip: any;
}

const ProfileChip: React.FC<ContainerProps> = ({ chip }) => {
	return (
          <IonChip className="politician-details">{chip}</IonChip>
      );
  };

export default ProfileChip;
