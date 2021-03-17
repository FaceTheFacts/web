import React from 'react';

interface TitleHeaderProps {
	title: string;
	children?: JSX.Element;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, children }: TitleHeaderProps) => (
	<div className="category-container">
		<div className="category-items">{title}</div>
		{children}
	</div>
);

export default TitleHeader;
