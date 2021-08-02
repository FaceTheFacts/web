import React from 'react';
import { CVData, Steps } from '../../Types';
import CVComponentCard from './CVComponentCard';

interface CVComponentProps {
	data: CVData;
}

const CVComponent: React.FC<CVComponentProps> = ({ data }: CVComponentProps) => {
	return (
		<React.Fragment>
			{data.Biography.Steps.map((Step: Steps, index: number) => (
				<CVComponentCard step={Step} key={index} />
			))}
		</React.Fragment>
	);
};

export default CVComponent;
