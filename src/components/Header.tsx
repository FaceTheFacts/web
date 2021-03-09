import React from 'react';
import './Header.css';
import '../index.css';

interface ContainerProps {
	name: string;
}

const Header: React.FC<ContainerProps> = ({ name }: ContainerProps) => {
	return (
		<div className="Header">
			<strong>{name}</strong>
		</div>
	);
};

export default Header;
