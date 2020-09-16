import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonChip, IonIcon, IonAvatar } from '@ionic/react';
import "./ProfileChip.css";

interface ContainerProps {
	name: string;
}

const ProfileImgDetails: React.FC<ContainerProps> = ({ name }) => {
	return (
          <IonChip className="politician-details">CDU/CSU</IonChip>
      );
  };

export default ProfileImgDetails;

// Need to find a way to use Chips dynamically so that the 2nd, 3rd, etc. chips are all placed in line!