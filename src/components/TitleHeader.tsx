import React from 'react';
import './TitleHeader.css';

interface TitleHeaderProps {
	title: string;
	children?: JSX.Element;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, children }: TitleHeaderProps) => (
	<div className="category-container">
		<div className="category-items" data-testid="category-title">
			{title}
		</div>
		{children}
	</div>
);

export default TitleHeader;
