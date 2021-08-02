import React from 'react';
import WebLinkComponentCard from './WebLinkComponentCard';

interface WebLinkComponentProps {
	data: Array<string>;
}

const WebLinkComponent: React.FC<WebLinkComponentProps> = ({ data }: WebLinkComponentProps) => {
	return (
		<React.Fragment>
			{data.map((Link: string, index: number) => (
				<WebLinkComponentCard link={Link} key={index} />
			))}
		</React.Fragment>
	);
};

export default WebLinkComponent;
