import React from 'react';
import instagramLogo from '../assets/images/instagram-brands.svg';
import linkedInLogo from '../assets/images/linkedin-brands.svg';
import twitterLogo from '../assets/images/twitter-brands.svg';

interface SocialMediaLinksProps {
	position: string;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = (props: SocialMediaLinksProps) => (
	<div className="social-media-links">
		<a className={props.position} href="https://www.instagram.com/face_the_facts_app/">
			<img src={instagramLogo} alt="logo" />
		</a>
		<a className={props.position} href="https://www.linkedin.com/company/71743117">
			<img src={linkedInLogo} alt="logo" />
		</a>
		<a className={props.position} href="https://twitter.com/FaceTheFactsApp">
			<img src={twitterLogo} alt="logo" />
		</a>
	</div>
);

export default SocialMediaLinks;
