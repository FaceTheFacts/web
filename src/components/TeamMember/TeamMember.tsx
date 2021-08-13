import './TeamMember.css';
import React from 'react';

interface TeamMemberProps {
	image: string;
	name: string;
	role: string;
}

const TeamMember: React.FC<TeamMemberProps> = (props: TeamMemberProps) => (
	<div className="team-member-content">
		<img src={props.image} alt="team-member" />
		<div className="team-member-title">
			<h2>{props.name}</h2>
			<p>{props.role}</p>
		</div>
	</div>
);

export default TeamMember;
