import HomeFooter from '../../components/HomeFooter';
import HomeHeader from '../../components/HomeHeader';
import { IonApp, IonContent } from '@ionic/react';
import React from 'react';

import './HomeHeaderFooter.css';

interface HomeHeaderFooterProps {
	children?: JSX.Element[] | JSX.Element;
}

const HomeHeaderFooter: React.FC<HomeHeaderFooterProps> = (props: HomeHeaderFooterProps) => {
	return (
		<IonApp>
			<HomeHeader />
			<IonContent>
				{props.children}
				<div className="homeheaderfooter-footer">
					<HomeFooter />
				</div>
			</IonContent>
		</IonApp>
	);
};

export default HomeHeaderFooter;
