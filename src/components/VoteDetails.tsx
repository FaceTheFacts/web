import React, { useState } from 'react';
import { IonPopover, IonButton } from '@ionic/react';
import "./VoteDetails.css";

export const VotePopover: React.FC = () => {

    /* Create a Popover that appears on click */
    const [showPopover, setShowPopover] = useState(false);

    return (
        <>
        <IonPopover
            isOpen={showPopover}
            cssClass='popover-styling'
            onDidDismiss={e => setShowPopover(false)}
        >
            <p>This is popover content</p>
        </IonPopover>
        <IonButton onClick={() => setShowPopover(true)}>Show Popover</IonButton>
        </>
  );
};