import * as React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { newfetch } from '../functions/queries';
import Spinner from '../components/Spinner/Spinner';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile';
import Tabs from '../components/Tabs';
import './MobileScreen.css';

interface MobileScreenProps {
	children?: JSX.Element;
}

type ElectoralDataResult = {
	id: number;
	label: string;
	party: string;
	result: number;
}

type CVSteps = {
	Raw: string;
	Label: string;
	Date: string;
}

type Sidejobs = {
	label: string;
	income_level: string;
	date: string;
	organisation: string;
	interval: string|undefined;
}

type Votes = {
	poll_id: number;
	vote:'yes'|'no'|'abstain'|'no_show';
}

type TotalData = {
	[key:string]:{name: string;
	party: string;
	electoral_data: {
		constituency: {
			state: string|undefined;
			id: number,
			label: string,
			result:ElectoralDataResult[];
	  }
  };
	occupation: string[]|[];
	cv: {
		Raw: string;
		ShortDescription: string;
		Steps: CVSteps[];
	}|[];
	weblinks: string[]|[];
	committees: string|undefined;
	sidejobs:Sidejobs[]|undefined;
	votes:Votes[]|undefined
  }
}

const MobileScreen: React.FC<MobileScreenProps> = (props: MobileScreenProps) => {
	const { id } = useParams<{ id: string }>();
	let mainComponent: JSX.Element | undefined;

	const { data, status, error } = useQuery(
		`politician-${id}`,
		() => newfetch(`politicians/${id}`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	const { data: image } = useQuery(
		`politician-${id}-Image`,
		() => newfetch(`politicians/${id}/image`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	if (status === 'success') {
		mainComponent = props.children;
	}

	if (status === 'loading') {
		mainComponent = <Spinner />;
	}

	if (status === 'error') {
		mainComponent = <p>Error: {error}</p>;
	}

	return (
		<IonPage className="MobileScreen">
			{data !== undefined ? <PoliticianProfile candidate={data} image={image} /> : null}
			<Tabs id={id} />
			<IonContent>{mainComponent}</IonContent>
		</IonPage>
	);
};

export default MobileScreen;
