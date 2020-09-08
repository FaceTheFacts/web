import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';
import "./ProfileImg.css";



interface ContainerProps {
	name: string;
}


/* This is just a simple component to repeat the ProfileImg wherever we need it */
const ProfileImg: React.FC<ContainerProps> = ({ name }) => {
	return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Philipp_Amthor.jpg/1280px-Philipp_Amthor.jpg"></img>
            <div className="politician-name">Philipp Amthor</div>
        </div>
		
	);
};

export default ProfileImg;
