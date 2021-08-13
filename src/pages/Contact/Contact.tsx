import React from 'react';
import HomeHeaderFooter from '../../hoc/HomeHeaderFooter/HomeHeaderFooter';

import './Contact.css';

const Contact: React.FC = () => (
	<HomeHeaderFooter>
		<div className="contact-content">
			<div className='contact-item'>
				<div className='contact-item-title'>
					Du hast einen Fehler entdeckt?
				</div>
				<div className='contact-item-address'>
					Dann lass es uns wissen mit einer Mail an:
				</div>
				<div className='contact-item-address'>
					daten@facethefacts.app
				</div>
			</div>

		</div>
	</HomeHeaderFooter>
);

export default Contact;
