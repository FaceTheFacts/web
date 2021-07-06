import * as React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';
import Spinner from '../components/Spinner/Spinner';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile';
import Tabs from '../components/Tabs';
import './MobileScreen.css';

interface MobileScreenProps {
  children?: JSX.Element;
}

const MobileScreen: React.FC <MobileScreenProps> = (props: MobileScreenProps) => {
	const { id } = useParams<{ id: string }>();
	let mainComponent: JSX.Element|undefined;

	const { data, status, error } = useQuery(
		`politicianProfile-${id}`,
		() => fetch(`politicians/${id}?related_data=show_information`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	if (status === 'success') {
		mainComponent = props.children
	}

	if (status === 'loading') {
		mainComponent = <Spinner/>;
	}

	if (status === 'error') {
		mainComponent = <p>Error: {error}</p>;
	}

	return (
		<IonPage className="MobileScreen">
			{data !== undefined ? <PoliticianProfile candidate={data.data} /> : null}
			<Tabs />
			<IonContent>
				{mainComponent}
			</IonContent>
		</IonPage>
	)
};

export default MobileScreen;
