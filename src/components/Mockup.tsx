import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import faceTheFactsMockUp from '../assets/images/new-mockup.png';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Mockup: React.FC = () => (
	<div>
		<LazyLoadImage src={faceTheFactsMockUp} alt="logo" effect="blur" />
	</div>
);
export default Mockup;
