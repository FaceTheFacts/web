import HomeHeaderFooter from '../../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './Contact.css';
import React from 'react';

const Contact: React.FC = () => (
	<HomeHeaderFooter>
		<div className="contact-content">
			<div className="contact-item">
				<div className="contact-item-title">
					Du willst mehr über Face the Facts erfahren, mit uns zusammenarbeiten oder über
					uns berichten?
				</div>
				<div className="contact-item-address">
					Melde dich einfach unter{' '}
					<a href="mailto:info@facethefacts.app">info@facethefacts.app</a> und wir
					beantworten gerne alle Fragen.
				</div>
			</div>
			<div className="contact-us-border"></div>
			<div className="contact-item">
				<div className="contact-item-title">Hast du einen Fehler in der App gefunden?</div>
				<div className="contact-item-address">
					Dann schreib welche Daten nicht stimmen und schick uns das Ganze am besten mit
					einem <br />
					Screenshot direkt an{' '}
					<a href="mailto:info@facethefacts.app">info@facethefacts.app</a>
					<br />
					So können wir das zeitnah ändern.
				</div>
			</div>
			<div className="contact-us-border"></div>
			<div className="contact-item">
				<div className="contact-item-title">
					Du bist Kandidat:in oder hast noch Daten über Kandidat:innen die unbedingt in
					die App gehören?
				</div>
				<div className="contact-item-address">
					Dann schick uns die Daten mit Quellenangabe direkt an{' '}
					<a href="mailto:info@facethefacts.app">info@facethefacts.app</a> und schreib am
					besten in die Betreffzeile so genau wie möglich um wen es geht.
				</div>
			</div>
		</div>
	</HomeHeaderFooter>
);

export default Contact;
