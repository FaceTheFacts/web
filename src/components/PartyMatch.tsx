import React from 'react';
import { IonButton, IonIcon, IonContent, IonThumbnail, IonLabel, IonItem } from '@ionic/react';
import { star } from 'ionicons/icons';
import './PartyMatch.css';
interface ContainerProps {
  name: string;
}
const parties = [
    {
      name: "CDU",
      image: "assets/image/cdu_logo.jpeg",
      filter: "",
      percentage: "96%"
    },
    {
      name: "SPD",
      image: "assets/image/spd_logo.jpeg",
      filter: "",
      percentage: "96%"
    },
    {
      name: "FDP",
      image: "assets/image/fdp_logo.jpeg",
      filter: "",
      percentage: "73%"
    },
    {
      name: "Die Grünen",
      image: "assets/image/gruenen_logo.png",
      filter: "",
      percentage: "63%"
    },
  ]

const PartyMatch: React.FC<ContainerProps> = ({ name }) => {
  return (

    <div className="party-matches">
      <div className="party-match-row">
        {parties.map((party, index) => {
          return (
            <IonItem className="party-item">
          <IonThumbnail className="party-thumbnail">
            <img src={party.image}></img>
          </IonThumbnail>
          <IonLabel>{party.percentage}</IonLabel>
          </IonItem>
          );
        })}
      </div>
  </div>

  );
};

export default PartyMatch;
