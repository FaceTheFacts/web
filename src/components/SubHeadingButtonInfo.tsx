import React from "react";
import {IonButton, IonFab, IonFabButton} from "@ionic/react";
import "./SubHeadingButtonInfo.css";

interface ContainerProps {
	name: string;
}

/* This is just a simple component to repeat the subheading button wherever we need it */
const SubHeadingButtonInfo: React.FC<ContainerProps> = ({ name }) => {
	return (
        <div>
            <IonButton className="sub-heading-button">
                <strong>{name}</strong>
            </IonButton>  
            <IonFab horizontal="end" slot="fixed" className="scrollhidden">
				<IonFabButton className="info-button">
					<img src="..\assets\icon\infobutton.svg"/> 
				</IonFabButton>
       		</IonFab>
        </div>
             
            
	);
};

export default SubHeadingButtonInfo;
