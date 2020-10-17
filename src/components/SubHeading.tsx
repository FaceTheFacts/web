import React from 'react';
import { IonButton, IonFabButton, IonFab, IonRouterOutlet } from '@ionic/react';
import { useHistory } from 'react-router';
import './SubHeading.css';
import PropTypes from 'prop-types'

interface SubheadingProps {
	icon?: string;
	buttonAction?: string;
	name: string;
}

/* This is just a simple component to repeat the subheading wherever we need it */
const SubHeading: React.FC<SubheadingProps> = ({ name, buttonAction, icon }) => {
	var heading = null;
	var headingIcon = null;

	const history = useHistory();

	const executeButtonAction = () => {
		history.push(buttonAction as string);
	};

	if (buttonAction !== undefined) {
		heading = (
			<IonButton
				className="sub-heading-button"
				onClick={executeButtonAction}
				data-testid="subheading-button"
			>
				<strong>{name}</strong>
			</IonButton>
		);
	} else {
		heading = <strong>{name}</strong>;
	}

	if (icon !== undefined) {
		const iconSrc = `../assets/icon/${icon}`;
		headingIcon = (
			<IonFab horizontal="end" slot="fixed" className="scrollhidden">
				<IonFabButton className="info-button">
					<img src={iconSrc} data-testid="subheading-icon" />
				</IonFabButton>
			</IonFab>
		);
	}

	if (buttonAction === undefined) {
		return (
			<div className="sub-heading">
				{heading}
				{headingIcon}
			</div>
		);
	} else {
		return (
			<div>
				{heading}
				{headingIcon}
			</div>
		);
	}
};

SubHeading.propTypes = {
	icon: PropTypes.string,
	buttonAction: PropTypes.string,
	name: PropTypes.string.isRequired
}

export default SubHeading;
