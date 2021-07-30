import React from 'react';
import { CVData } from '../../Types';
import CVComponentCard from './CVComponentCard';

interface CVComponentProps {
	data: CVData;
}

const CVComponent: React.FC<CVComponentProps> = ({ data }: CVComponentProps) => {
    return <React.Fragment>
        {data.Biography.Steps.map((Step: any, index: number) => (<CVComponentCard step={Step} key={index} />)
        )}
    </React.Fragment>;
};

export default CVComponent;
