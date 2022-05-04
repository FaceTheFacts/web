import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface AppStoreButtonProps {
	link: string;
	source: string;
}

const Mockup: React.FC<AppStoreButtonProps> = (props: AppStoreButtonProps) => (
	<div>
		<a href={props.link}>
			<LazyLoadImage src={props.source} alt="logo" effect="blur" />
		</a>
	</div>
);
export default Mockup;
