import HomeFooter from '../../components/HomeFooter';
import HomeHeader from '../../components/HomeHeader';
import { IonApp, IonContent } from '@ionic/react';
import React from 'react';

interface HomeHeaderFooterProps {
	children?: JSX.Element[];
}

const HomeHeaderFooter: React.FC<HomeHeaderFooterProps> = (props: HomeHeaderFooterProps) => {
	return (
		<IonApp>
			<HomeHeader />
			<IonContent>
				{props.children}
				<HomeFooter />
			</IonContent>
		</IonApp>
	);
};

export default HomeHeaderFooter;
