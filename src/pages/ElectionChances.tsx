import {IonContent, IonPage, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import React from 'react';
import className from 'classnames'
import ElectionchancesCard from '../components/ElectionChancesCard/ElectionChancesCard';
import SegmentButtons from '../components/SegmentButtons';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile'
import Tabs from '../components/Tabs';
import VoteExplainerCard from '../components/VoteExplainerCard/VoteExplainerCard';
import './ElectionChances.css';
import FirstVotePopup from '../components/PopupCard/FirstVotePopup/FirstVotePopup';
import SecondVotePopup from '../components/PopupCard/SecondVotePopup/SecondVotePopup';
import { ElectionResult } from '../Types';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';
import { useParams } from 'react-router';
import SecondVoteCard from '../components/SecondVoteCard';

const Electionchances: React.FC  = () => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const [segment, setSegment] = React.useState('0'); // eslint-disable-line @typescript-eslint/no-unused-vars

	const { id } = useParams<{ id: string }>();
	const { data, status, error } = useQuery(
		`politicianProfile-${id}`,
		() => fetch(`politicians/${id}?related_data=show_information`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	const name = data?.data.label
	const party = data?.data.party.label

	const constituency = useQuery(
		`constituency-${name}`,
		() => fetch(`candidacies-mandates?politician[entity.label][cn]=${name}&parliament_period[entity.label][eq]=Bundestag Wahl 2017`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
			enabled: !!name,
		}
	);

	const constituencyId = constituency.data?.data[0].electoral_data.constituency.id
	const electoralListId = constituency.data?.data[0].electoral_data.electoral_list.id

	const electionResults = useQuery(
		`electionResults-${constituencyId}`,
		() => fetch(`candidacies-mandates?electoral_data[entity.constituency.entity.id]=${constituencyId}&label[cn]=Bundestag Wahl 2017`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
			enabled: !!constituencyId,
		}
	);

	const stateList = useQuery(
		`StateList-${party}-${electoralListId}`,
		() => fetch(`candidacies-mandates?electoral_data[entity.electoral_list.entity.id][eq]=${electoralListId}&politician[entity.party.entity.short_name]=${party}`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
			enabled: !!constituencyId,
		}
	);

	const constituencyName = constituency.data?.data[0].electoral_data.constituency.label
	const stateName = constituency.data?.data[0].electoral_data.electoral_list.label

	const partyClassName = data?.data.party.label.toLowerCase().replace(/\s/g, '');
	const stateListClass = className('state', partyClassName)

	if (status === 'loading') {
		// eslint-disable-next-line
		return <iframe src="https://lottiefiles.com/iframe/58266-quad-cube-shifter-1"></iframe>;
	}

	if (status === 'error') {
		return <p>Error: {error}</p>;
	}


	/* This is returned when using this component */
	return (
		<IonPage className="Profile-Mobile">
			{/* Here the content of our page starts */}
			<PoliticianProfile candidate={data.data} />
			<Tabs></Tabs>
			<SegmentButtons tab={segment} setTab={setSegment}/>
			<IonContent>
				{segment==='0' ? 
					<div>
						<VoteExplainerCard vote="Erststimme">
							<FirstVotePopup/>
						</VoteExplainerCard>
						<div className="election-chances-firstVote">
							<IonCardSubtitle className="electionresult">Wahlergebnis 2017</IonCardSubtitle>
							<IonCardTitle className="constituency">Wahlkreis - {constituency.isFetched ? constituencyName : null}</IonCardTitle>
						</div>
					</div>
					: 
					<div>
						<VoteExplainerCard vote="Zweitstimme">
							<SecondVotePopup/>
						</VoteExplainerCard>
						<div className="election-chances-secondVote">
							<IonCardSubtitle className="statelist">Landesliste 2021</IonCardSubtitle>
							<IonCardTitle className={stateListClass}><span>{status === 'success' ? data.data.party.label : null } {constituency.isFetched ? stateName : null}</span></IonCardTitle>
						</div>
						<IonCardSubtitle className="result-text">Über diese Liste kamen 2017</IonCardSubtitle>
						<IonCardTitle className="result-total">20 Kandidat:innen in den Bundestag.</IonCardTitle>
					</div>
				}
				
				<div>
					{segment==='1' ?
						stateList.data?.data.map((StateList: ElectionResult, index: number) => {
							return <SecondVoteCard
								secondVote={StateList}
								key={`secondvote-${index}`}
							/>;
						})
						:
						electionResults.isFetched ? electionResults.data.data.map((ElectionResults: ElectionResult, index: number) => {
						
							return <ElectionchancesCard vote={ElectionResults} key={`electionResults-${index}`}/>;
						}) : null }
				</div> 
			</IonContent> 
		</IonPage>
	);
};

export default Electionchances;
