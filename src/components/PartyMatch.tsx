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
      image: "assets/image/cdu.png",
      filter: "",
      percentage: "96%"
    },
    {
      name: "SPD",
      image: "assets/image/spd.png",
      filter: "",
      percentage: "96%"
    },
    {
      name: "FDP",
      image: "assets/image/fdp.png",
      filter: "",
      percentage: "73%"
    },
    {
      name: "Die Grünen",
      image: "assets/image/gruen.png",
      filter: "",
      percentage: "63%"
    },
    {
      name: "Alternative für Deutschland",
      image: "assets/image/afd.png",
      filter: "",
      percentage: "3%"
    },
  ]

const PartyMatch: React.FC<ContainerProps> = ({ name }) => {
  return (

    <div className="party-matches">
      <div className="party-match-row">
        {parties.map((party, index) => {
          return (
            <div className="party-item">
          <IonThumbnail className="party-thumbnail">
            <img src={party.image}></img>
          </IonThumbnail>
          <IonLabel className="party-percentage">{party.percentage}</IonLabel>
          </div>
          );
        })}
      </div>
  </div>

  );
};

export default PartyMatch;
