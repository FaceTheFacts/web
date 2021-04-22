import { IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { iconEnum } from '../enums/icon.enum';
import { iconChangeHandler } from '../functions/iconChangeHandler';

import './LinkButton.css';

interface LinkButtonProps {
	linkTo: string;
	icon: iconEnum;
}

const LinkButton: React.FC<LinkButtonProps> = ({ linkTo, icon }: LinkButtonProps) => {
	const iconName = iconChangeHandler(icon);
	return (
		<Link to={linkTo}>
			<IonButton className="LinkButton" size="small" fill="clear">
				<IonIcon slot="icon-only" icon={iconName} />
			</IonButton>
		</Link>
	);
};

export default LinkButton;
