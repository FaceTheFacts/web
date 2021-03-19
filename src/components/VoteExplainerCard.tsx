
import React from 'react';
import './VoteExplainerCard.css';
import { IonCardSubtitle, IonBackButton} from '@ionic/react';


interface ContainerProps {
	vote: string;
}

const VoteExplainerCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {

    return ( 
        <div>
            <IonCardSubtitle>Wie funktioniert die {vote}?</IonCardSubtitle>
            <IonBackButton className="forward-button" defaultHref="profile" text="" />
        </div>



    );
};

export default VoteExplainerCard;
