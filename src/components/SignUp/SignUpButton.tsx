import React from 'react';
import button from '../../assets/images/long-arrow-right-light.svg'
import './SignUpButton.css';


const SignUpButton: React.FC = () => (
		<div className="sign-up-button">
			<img src={button} alt="submit-button" />
		</div>
);

export default SignUpButton;
