import React from "react";
import "./FabMenuButton.css";
import { IonContent, IonFab, IonFabButton, IonIcon, IonMenuButton } from '@ionic/react';

const FabMenuButton: React.FC = () => (
  <IonContent>
    {/*-- Fixed Floating Action Button that does not scroll with the content --*/}
    <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonFabButton>
            <IonMenuButton/>    
        </IonFabButton>
    </IonFab>

    
  </IonContent>
);

export default FabMenuButton;