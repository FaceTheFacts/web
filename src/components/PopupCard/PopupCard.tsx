import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';

import './PopupCard.css';

interface PopupCardProps {
  title: string;
  children?: JSX.Element;
}
const PopupCard: React.FC<PopupCardProps>= (props: PopupCardProps)=>(
  <IonCard className='PopupCard'>
    <IonCardHeader className='popup-header'>
      <IonCardTitle className='popup-title'>
        {props.title}
      </IonCardTitle>
    </IonCardHeader>
    <div className='popup-border'></div>
    {props.children}
  </IonCard>
);

export default PopupCard;