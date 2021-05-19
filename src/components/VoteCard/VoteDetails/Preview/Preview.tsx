import * as React from 'react';

import './Preview.css';

interface PreviewProps {
	title: string;
	content: string;
}
const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
	// As a default, 'Read More === mehr lesen' will show up
	const [isReadMore, setIsReadMore] = React.useState(true);
	//isReadMore === true => sentence should be short
	const [isShort, setIsShort] = React.useState('readmore-short');

	//If the button clicked
	const readmoreChange = (): void => {
		setIsReadMore(!isReadMore);
		//change class
		isReadMore ? setIsShort('readmore-short') : setIsShort('readmore-long');
	};

	return (
		<div className="preview-container">
			<div className="preview-title">{props.title}</div>
			<div className={['preview-content', isShort].join(' ')}>{props.content}</div>
			<button className="preview-button" onClick={readmoreChange}>
				{isReadMore ? 'mehr lesen' : 'weniger lesen'}
			</button>
		</div>
	);
};

export default Preview;
