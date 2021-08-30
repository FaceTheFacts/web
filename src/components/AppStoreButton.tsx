import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppStoreLogo from '../assets/images/app-store-logo.svg';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Mockup: React.FC = () => (
	<div>
		<a href="https://apps.apple.com/de/app/face-the-facts/id1579513133?l=en">
			<LazyLoadImage src={AppStoreLogo} alt="logo" effect="blur" />
		</a>
	</div>
);
export default Mockup;
