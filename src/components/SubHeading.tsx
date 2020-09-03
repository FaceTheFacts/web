import React from "react";
import "./SubHeading.css";

interface ContainerProps {
	name: string;
}

const SubHeading: React.FC<ContainerProps> = ({ name }) => {
	return (
		<div className="sub-heading">
			<strong>{name}</strong>
		</div>
	);
};

export default SubHeading;
