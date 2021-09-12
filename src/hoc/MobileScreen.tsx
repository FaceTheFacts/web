import * as React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { newfetch } from '../functions/queries';
import Spinner from '../components/Spinner/Spinner';
import Tabs from '../components/Tabs';
import './MobileScreen.css';
import PoliticianHeader from '../components/PoliticianHeader/PoliticianHeader';

interface MobileScreenProps {
	children?: JSX.Element;
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
			{data !== undefined ? <PoliticianHeader candidate={data} image={image} /> : null}
			<Tabs id={id} />
			<IonContent>{mainComponent}</IonContent>
		</IonPage>
	);
};

export default MobileScreen;
