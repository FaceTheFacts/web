import React from 'react';
import longArrow from '../../assets/images/long-arrow-alt-right-regular.svg'
import './SignUpButton.css';


const SignUpButton: React.FC = () => (
		<div className="sign-up-button">
			<img src={longArrow} alt="Submit"></img>
		</div>
);

export default SignUpButton;
