import React from "react";
import { IonFabButton, IonFab} from '@ionic/react';
import "./SubHeadingInfo.css";

interface ContainerProps {
	name?: string;
}

/* This is just a simple component to repeat the subheading wherever we need it */
const SubHeadingInfo: React.FC<ContainerProps> = ({ name }) => {
	return (
		<div className="sub-heading">
			<strong>{name}</strong>
			<IonFab horizontal="end" slot="fixed" className="scrollhidden">
				<IonFabButton className="info-button">
					<img src="..\assets\icon\infobutton.svg"/> 
				</IonFabButton>
       		</IonFab>
		</div>
	);
};

export default SubHeadingInfo;
