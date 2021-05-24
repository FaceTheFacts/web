import React from 'react';
import './SignUp.css';
import SignUpButton from './SignUpButton';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const SignUp: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="signup">
            <div className="signup-text">Als Erste:r erfahren, sobald<br className="signup-break"/> Face The Facts verfügbar ist</div>
            <div>
                <div></div>
                <div>
                    <div className="signup-form">
                        <form>
                            <input type="text" id="email" name="email" placeholder="Deine Mail-Adresse"></input>
                            <button type="submit"><SignUpButton /></button><br/>
                            <input type="checkbox" id="privacy-box" name="privacy-box" value="privacy-box"></input>
                            <label htmlFor="privacy-box">Ich bin einverstanden mit der <a className="signup-link">Datenschutzerklärung</a>.</label>
                        </form>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default SignUp;