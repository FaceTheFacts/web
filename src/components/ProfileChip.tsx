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

// Need to find a way to use Chips dynamically so that the 2nd, 3rd, etc. chips are all placed in line!
// Pass in an array of all chips, then use array.map