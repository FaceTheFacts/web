import React from "react";
import {IonButton} from "@ionic/react";
import "./SubHeadingButton.css";

interface ContainerProps {
	name: string;
}

/* This is just a simple component to repeat the subheading wherever we need it */
const SubHeadingButton: React.FC<ContainerProps> = ({ name }) => {
	return (
            <IonButton className="sub-heading-button">
                <strong>{name}</strong>
            </IonButton>   
	);
};

export default SubHeadingButton;
