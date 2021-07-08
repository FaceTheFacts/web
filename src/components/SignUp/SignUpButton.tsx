import React from 'react';
import longArrow from '../../assets/images/long-arrow-alt-right-regular.svg'
import './SignUpButton.css';

interface SignUpButtonProps {
	focus: string;
}


const SignUpButton: React.FC<SignUpButtonProps> = (props: SignUpButtonProps) => (
		<div className={props.focus}>
			<img src={longArrow} alt="Submit"></img>
		</div>
);

export default SignUpButton;
