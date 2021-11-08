import React from 'react';
import { webLinkHandler } from '../../functions/webLinkHandler';
import './WebLinkComponentCard.css';

interface WebLinkComponentProps {
	link: string;
}

const WebLinkComponentCard: React.FC<WebLinkComponentProps> = ({ link }: WebLinkComponentProps) => {
	return webLinkHandler(link);
};
export default WebLinkComponentCard;
