import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonChip, IonIcon, IonAvatar } from '@ionic/react';
import "./ProfileName.css";



interface ContainerProps {
	name: string;
}

/* This is just a simple component to repeat the ProfileImg wherever we need it */
const ProfileImage: React.FC<ContainerProps> = ({ name }) => {
	return (
            <div className="politician-name">Philipp Amthor</div>
	);
};

export default ProfileImage;
