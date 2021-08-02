import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { webLinkHandler } from '../../functions/webLinkHandler';

interface WebLinkComponentProps {
	link: string;
}

const WebLinkComponentCard: React.FC<WebLinkComponentProps> = ({ link }: WebLinkComponentProps) => {
    return webLinkHandler(link)
};
export default WebLinkComponentCard;