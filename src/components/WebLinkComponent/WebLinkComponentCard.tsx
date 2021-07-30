import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

interface WebLinkComponentProps {
	link: string;
}

const WebLinkComponentCard: React.FC<WebLinkComponentProps> = ({ link }: WebLinkComponentProps) => {
    return (
        <IonCard className="sideJob-layout" href={link}>
			<IonCardHeader>
				<IonCardTitle className="sideJob-major" data-testid="profile-sidejob-position">
					{link}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
    )
};
export default WebLinkComponentCard;