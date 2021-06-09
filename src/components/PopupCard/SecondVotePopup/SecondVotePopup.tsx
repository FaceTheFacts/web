import React from 'react';
import PopupCard from '../PopupCard';
import people from '../../../assets/images/people.svg';
import secondVote from '../../../assets/images/second-vote.svg';
import secondVoteSystem from '../../../assets/images/second-vote-system.svg';

import ImageAndSentence from '../ImageAndSentence/ImageAndSentence';

const SecondVotePopup: React.FC = () => (
	<PopupCard
		title="Wie funktioniert die Zweitstimme?"
		bottomContent={[
			'Es kann also sein, dass Politiker:innen auf der Landesliste nicht von deiner Stimme profitieren, weil sie soweit unten stehen, dass sie keine Chance haben. ',
			' Außerdem kann es sein, dass du Politiker:innen indirekt reinwählst, mit denen du nicht einverstanden bist. ',
			'Schau dir deshalb die Liste genau an.',
		]}
	>
		<div>
			<ImageAndSentence
				image={people}
				imageAlt="people"
				sentence="Mit deiner Zweitstimme wählst du eine Partei in den Bundestag."
			/>
			<ImageAndSentence
				image={secondVote}
				imageAlt="second-vote"
				sentence="Wer genau für sie einzieht, bestimmen die Parteien in jedem Bundesland über Landeslisten."
			/>
			<ImageAndSentence
				image={secondVoteSystem}
				imageAlt="second-vote-system"
				sentence="Jede Partei muss mindestens 5% der Stimmen erhalten, um über die Zweistimme einzuziehen."
			/>
		</div>
	</PopupCard>
);

export default SecondVotePopup;
