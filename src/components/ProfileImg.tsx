import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';
import "./ProfileImg.css";



interface ContainerProps {
	name: string;
}


/* This is just a simple component to repeat the ProfileImg wherever we need it */
const ProfileImg: React.FC<ContainerProps> = ({ name }) => {
	return (
        <div className="imgContainer">
            <img src="https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr"></img>
            <div className="politician-name">Philipp Amthor</div>
        </div>
		
	);
};

export default ProfileImg;
