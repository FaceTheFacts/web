import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import './SignUp.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const SignUp: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div>
            <div className="signup-text">Als Erste:r erfahren, sobald<br className="signup-break"/> Face The Facts verfügbar ist</div>
            <div>
                <div></div>
                <div>
                    <div>
                        <form>
                            <input type="text" id="email" name="email" placeholder="Deine Mail-Adresse"></input>
                            <button type="submit"><IonIcon className="forward-button" slot="icon-only" icon={chevronForward} /></button><br/>
                            <input type="checkbox" id="privacy-box" name="privacy-box" value="privacy-box"></input>
                            <label htmlFor="privacy-box">Ich bin einverstanden</label>
                        </form>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default SignUp;