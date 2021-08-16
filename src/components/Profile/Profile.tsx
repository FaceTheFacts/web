import React from 'react';
import TopicCard from '../TopicCard';
import LinkButton from '../LinkButton';
import { Politician } from '../../Types';
import VoteCard from '../VoteCard/VoteCard';
import SideJobCard from '../SideJobCard';
import './Profile.css';
import TitleHeader from '../TitleHeader';
import { useQueries, useQuery } from 'react-query';
import './Profile.css';
import { iconEnum } from '../../enums/icon.enum';
import fetch, { newfetch } from '../../functions/queries';
import NoDataCard from '../NoDataCard/NoDataCard';
import SegmentButtons from '../SegmentButtons';
import CVComponent from '../CVComponent/CVComponent';
import WebLinkComponent from '../WebLinkComponent/WebLinkComponent';
import {Partialdata, TotalDataObj} from '../../json/TestJsonData';

interface ProfileProps {
	candidate: TotalDataObj;
	profileId: number;
}

const Profile: React.FC<ProfileProps> = ({ candidate, profileId }: ProfileProps) => {
	const pollIds = [1584, 1604, 1639, 1758, 3602, 3936, 4088, 4098];
	const [showArrow, setArrow] = React.useState(true);
	const [tab, setTab] = React.useState('0');

	let cvData = {
		Biography: {
			Raw:
				'2011 Abitur am Greifen-Gymnasium Ueckermünde. 2012/2017 Studium der Rechtswissenschaften an der Ernst-Moritz-Arndt Universität Greifswald (Studienabschluss mit Prädikat), Stipendiat der Konrad-Adenauer-Stiftung; als Nebenbeschäftigung u.a. Mitarbeiter verschiedener Abgeordneter des Deutschen Bundestages und des Landtages Mecklenburg-Vorpommern. 2017 wissenschaftlicher Mitarbeiter an der Ernst-Moritz-Arndt-Universität Greifswald und Mitarbeiter einer Wirtschaftskanzlei in Berlin. Seit 2017 Doktorand. Seit 2008 Mitglied der CDU und der Jungen Union, 2012/2018 Kreisvorsitzender der Jungen Union Vorpommern-Greifswald, seit 2017 Vorsitzender des CDU-Stadtverbandes Ueckermünde, seit 2018 Bundesschatzmeister der Jungen Union Deutschlands, seit 2019 Mitglied des Kreistages Vorpommern-Greifswald. Mitglied des Bundestages seit Oktober 2017 (Mitglied im Innenausschuss und im Europaausschuss, stellv. Mitglied im Rechtsausschuss). Seit 2018 Vorstandsmitglied im Parlamentskreis Mittelstand der CDU/CSU-Bundestagsfraktion. Mitgliedschaften (Auswahl): Atlantik-Brücke, Diözesanrat der Katholiken im Erzbistum Berlin, Landesjagdverband Mecklenburg-Vorpommern e.V., AMEOS-Regionalbeirat Vorpommern, Verwaltungsrat Sparkasse Uecker-Randow, Europa-Union, BdV, OMV (Bundesvorstand). ',
			ShortDescription: 'Geboren am 10. November 1992 in Ueckermünde; römisch-katholisch.',
			Steps: [
				{
					Raw: '2011 Abitur am Greifen-Gymnasium Ueckermünde',
					Label: 'Abitur am Greifen-Gymnasium Ueckermünde',
					Date: '2011',
				},
				{
					Raw:
						'2012/2017 Studium der Rechtswissenschaften an der Ernst-Moritz-Arndt Universität Greifswald (Studienabschluss mit Prädikat)',
					Label:
						'Studium der Rechtswissenschaften an der Ernst-Moritz-Arndt Universität Greifswald (Studienabschluss mit Prädikat)',
					Date: '2012/2017',
				},
				{
					Raw:
						'2017 wissenschaftlicher Mitarbeiter an der Ernst-Moritz-Arndt-Universität Greifswald und Mitarbeiter einer Wirtschaftskanzlei in Berlin',
					Label:
						'wissenschaftlicher Mitarbeiter an der Ernst-Moritz-Arndt-Universität Greifswald und Mitarbeiter einer Wirtschaftskanzlei in Berlin',
					Date: '2017',
				},
				{
					Raw: 'Seit 2017 Doktorand',
					Label: 'Doktorand',
					Date: 'seit 2017',
				},
				{
					Raw: 'Seit 2008 Mitglied der CDU und der Jungen Union',
					Label: 'Mitglied der CDU und der Jungen Union',
					Date: 'seit 2008',
				},
				{
					Raw: '2012/2018 Kreisvorsitzender der Jungen Union Vorpommern-Greifswald',
					Label: 'Kreisvorsitzender der Jungen Union Vorpommern-Greifswald',
					Date: '2012/2018',
				},
				{
					Raw: 'seit 2017 Vorsitzender des CDU-Stadtverbandes Ueckermünde',
					Label: 'Vorsitzender des CDU-Stadtverbandes Ueckermünde',
					Date: 'seit 2017',
				},
				{
					Raw: 'seit 2018 Bundesschatzmeister der Jungen Union Deutschlands',
					Label: 'Bundesschatzmeister der Jungen Union Deutschlands',
					Date: 'seit 2018',
				},
				{
					Raw: 'seit 2019 Mitglied des Kreistages Vorpommern-Greifswald',
					Label: 'Mitglied des Kreistages Vorpommern-Greifswald',
					Date: 'seit 2019',
				},
				{
					Raw:
						'Mitglied des Bundestages seit Oktober 2017 (Mitglied im Innenausschuss und im Europaausschuss',
					Label:
						'Mitglied des Bundestages  (Mitglied im Innenausschuss und im Europaausschuss',
					Date: 'seit Oktober 2017',
				},
				{
					Raw:
						'Seit 2018 Vorstandsmitglied im Parlamentskreis Mittelstand der CDU/CSU-Bundestagsfraktion',
					Label:
						'Vorstandsmitglied im Parlamentskreis Mittelstand der CDU/CSU-Bundestagsfraktion',
					Date: 'seit 2018',
				},
			],
		},
	};

	// The return type of this will have to get adapted to the final data structure
	// This probably will have to get moved to another component at the top of this app
	// This should overwrite cvData displayed as first try
	// eslint-disable-next-line
	window.onmessage = (e: any): any => {
		console.log(`Received message: ${e.data}`);
		cvData = e.data;
	};

	const webLinksData = [
		'http://www.philipp-amthor.de/',
		'https://www.facebook.com/amthor.philipp/',
		'https://www.youtube.com/',
		'https://www.tiktok.com/',
		'https://twitter.com/',
		'https://www.abgeordnetenwatch.de/profile/philipp-amthor',
		'https://en.wikipedia.org/wiki/Philipp_Amthor',
	];

	const { data, status } = useQuery(
		`politicalFocus-${candidate.name}`,
		() =>
			fetch(
				`committee-memberships?candidacy_mandate[entity.label][cn]=${candidate.name} (Bundestag 2017 - 2021)`
			),
		{
			staleTime: 60 * 10000000,
			cacheTime: 60 * 10000000, // 10000 minute = around 1 week
		}
	);
	const sideJobs = useQuery(
		`sideJob-${candidate.name}`,
		() => newfetch(`sidejobs?politician_name=${candidate.name}`),
		{
			staleTime: 60 * 2880000,
			cacheTime: 60 * 2880000, // 2 days
		}
	);
	const polls = useQueries(
		pollIds.map((pollId) => {
			return {
				queryKey: ['poll', pollId, candidate.name],
				// eslint-disable-next-line
				queryFn: () => fetch(`polls/${pollId}`),
				staleTime: 60 * 1440000,
				cacheTime: 60 * 1440000, // 1 day
			};
		})
	);

	if (status === 'loading' || sideJobs.status === 'loading' || polls[0].status === 'loading') {
		return null;
	}

	if (status === 'error' || sideJobs.status === 'error' || polls[0].status === 'error') {
		return null;
	}
	return (
		<React.Fragment>
			<SegmentButtons tab={tab} setTab={setTab} type={1} />
			{tab === '0' ? (
				<div className="profile-black-back">
					{/* TotalData.json doesn't include topics */}
					{data.data.length !== 0 ? (
						<div>
							<TitleHeader title="Politische Schwerpunkte" />
							<div className="profile-topic">
								<TopicCard topics={data.data} />
							</div>
						</div>
					) : null}
					{polls[0].data !== undefined ? (
						<div>
							<TitleHeader title="Wichtigste Abstimmungen">
								<div className={showArrow ? 'show-arrow' : 'hide-arrow'}>
									<LinkButton
										linkTo={`/politician/${String(profileId)}/votes`}
										icon={iconEnum.ARROW_FORWARD}
									/>
								</div>
							</TitleHeader>
							<ul className="vote-card-lists">
								{showArrow ? (
									// eslint-disable-next-line
									polls.map((poll: any, index: number):
										| JSX.Element
										| undefined => {
										return (
											<li key={index}>
												<VoteCard
													vote={poll.data?.data}
													name={candidate.name}
													setArrow={setArrow}
												/>
											</li>
										);
									})
								) : (
									<NoDataCard type="vote" />
								)}
							</ul>
						</div>
					) : null}

					<TitleHeader title="Bekannte Nebentätigkeiten" />
					{sideJobs.data.length !== 0 ? (
						// eslint-disable-next-line
						sideJobs.data.map((sideJob: any, index: number) => {
							return <SideJobCard sideJob={sideJob} key={index} />;
						})
					) : (
						<NoDataCard type="sideJob" />
					)}
				</div>
			) : tab === '1' ? (
				<CVComponent data={cvData} />
			) : (
				<WebLinkComponent data={webLinksData} />
			)}
		</React.Fragment>
	);
};
export default Profile;
