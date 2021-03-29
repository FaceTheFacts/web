import React from 'react';
import './BioCard.css';

interface BioCardProps {
	bio: string;
}

const BioCard: React.FC<BioCardProps> = ({ bio }: BioCardProps) => {
	console.log(bio);
	function FormatBio(bio: string) {
		const text = bio.split('\n').map((item, i) => <p key={i}>{item}</p>);
		return text;
	}
	return <div className="bio-content">{FormatBio(bio)}</div>;
};

export default BioCard;
