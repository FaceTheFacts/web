import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonChip, IonIcon, IonAvatar } from '@ionic/react';
import "./ProfileImage.css";



interface ContainerProps {
	name: string;
}


/* This is just a simple component to repeat the ProfileImg wherever we need it */
const ProfileImage: React.FC<ContainerProps> = ({ name }) => {
	return (
        <div className="imgContainer">
            <div><img src="https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr"></img></div>
            <div><img className="gradientOverlay"></img></div>
            
        </div>
		
	);
};

export default ProfileImage;
