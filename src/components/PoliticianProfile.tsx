import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonChip, IonIcon, IonAvatar } from '@ionic/react';
import "./PoliticianProfile.css";

interface ContainerProps {
	politician: any;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ politician }) => {
	return (
        <div>
            <div className="imgContainer">
                <img src={politician.image}></img>  
            </div>

            <div className="politician-name">
                {politician.name}
            </div>

            {politician.chips.map((chip : string, index : number) => {
						return <IonChip className="politician-details" key={index}>{chip}</IonChip>
					})}

        </div>
        
      );
  };

export default PoliticianProfile;
