import { CVData, Steps } from '../../Types';
import { Cv } from '../../json/TestJsonData';
import CVComponentCard from './CVComponentCard';
import { data } from 'jquery';
import React from 'react';

interface CVComponentProps {
	data: any;
}

const CVComponent: React.FC<CVComponentProps> = ({ data }: CVComponentProps) => {
	return (
		<React.Fragment>
			{data.Steps !== undefined
				? data.Steps.map((Step: Steps, index: number) => (
					<CVComponentCard step={Step} key={index} />
				))
				: undefined}
		</React.Fragment>
	);
};

export default CVComponent;
