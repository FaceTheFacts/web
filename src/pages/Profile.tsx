import React from 'react';
import { useParams } from 'react-router';
import ProfileComponent from '../components/Profile/Profile';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';
import MobileScreen from '../hoc/MobileScreen';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC = () => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();
	const { data } = useQuery(
		`politicianProfile-${id}`,
		() => fetch(`politicians/${id}?related_data=show_information`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	return (
		<MobileScreen>
			{data !== undefined ? <ProfileComponent candidate={data.data} profileId={id} /> : undefined}
		</MobileScreen>
	);
};

export default Profile;
