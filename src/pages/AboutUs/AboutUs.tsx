import Olli from '../../assets/images/olli.svg';
import Richard from '../../assets/images/richard.svg';
import Victor from '../../assets/images/victor.svg';
import TeamMember from '../../components/TeamMember/TeamMember';
import HomeHeaderFooter from '../../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './AboutUs.css';
import React from 'react';

const AboutUs: React.FC = () => (
	<HomeHeaderFooter>
		<div className="about-us-content">
			<div className="about-us-title">Demokratie verdient die Besten</div>
			<div className="about-us-sentences">
				<p>Klimawandel, Digitalisierung, Extremismus, Armut und Krieg.</p>
				<p>
					Wir stehen weltweit vor unglaublichen Herausforderungen und brauchen gerade die
					besten Politiker:innen, die wir kriegen können.
				</p>
				<p>
					Deshalb reicht es nicht mehr, einfach nur nach Parteien und deren
					Wahlversprechen zu wählen, sondern wir müssen uns auch genauer anschauen, wer
					denn am Ende wirklich im Parlamenten sitzt.
					<br />
					Welche Kompetenzen haben diese Menschen, welche Positionen vertreten sie und wer
					oder was könnte sie beeinflussen?
				</p>
				<p>
					Mit Face the Facts kannst du das jetzt einfach über die Handykamera direkt am
					Wahlplakat herausfinden und so schnell die besten Kandidat:innen für dich
					finden.
				</p>
				<p>
					Die Daten stammen alle aus frei verfügbaren Quellen wie Wikipedia,
					Abgeordnetenwatch oder direkt den Seiten der Parlamente.
					<br /> Wir tragen sie nur zusammen und bereiten sie besser auf. Wie wir das
					genau machen, kannst du dir unter{' '}
					<a href="https://github.com/FaceTheFacts">
						https://github.com/FaceTheFacts
					</a>{' '}
					anschauen.
				</p>
			</div>
			<div className="about-us-border"></div>
			<div className="about-us-team">Team</div>
			<div className="about-us-grid-container">
				<TeamMember image={Victor} name={'Victor Bellu'} role={'Produkt'} />
				<TeamMember image={Olli} name={'Oliver Köditz'} role={'Design'} />
				<TeamMember
					image={Richard}
					name={'Richard Krümmel'}
					role={'Software Development'}
				/>
			</div>
		</div>
	</HomeHeaderFooter>
);

export default AboutUs;
