import HomeHeaderFooter from '../../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './AboutUs.css';
import React from 'react';

const AboutUs: React.FC = () => (
	<HomeHeaderFooter>
		<div className="about-us-content">
			<div className="about-us-title">Headline comes here</div>
			<div className="about-us-sentences">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
				tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
				eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
				takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
				consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
				dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
				dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet.
			</div>
			<div className="about-us-border"></div>
			<div className="about-us-team">Team</div>
		</div>
	</HomeHeaderFooter>
);

export default AboutUs;
