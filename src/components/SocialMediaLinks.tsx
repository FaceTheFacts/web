import React from 'react';
import faceBookLogo from '../assets/images/facebook-square-brands.svg';
import instagramLogo from '../assets/images/instagram-brands.svg';
import linkedInLogo from '../assets/images/linkedin-brands.svg';
import twitterLogo from '../assets/images/twitter-brands.svg';

const SocialMediaLinks: React.FC = () => (
	<div className="links">
		<a className="logo-link" href="https://www.instagram.com/face_the_facts_app/">
			<img src={instagramLogo} alt="logo" />
		</a>
		<a className="logo-link" href="https://www.linkedin.com/company/71743117">
			<img src={linkedInLogo} alt="logo" />
		</a>
		<a className="logo-link" href="https://www.facebook.com/Face-the-Facts-110924574516372">
			<img src={faceBookLogo} alt="logo" />
		</a>
		<a className="logo-link" href="https://twitter.com/FaceTheFactsApp">
			<img src={twitterLogo} alt="logo" />
		</a>
	</div>
);

export default SocialMediaLinks;
