import React from 'react';
import './SignUp.css';
import SignUpButton from './SignUpButton';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const SignUp: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="signup">
			<div className="signup-text">
				Bleib auf dem Laufenden:
			</div>
			<div className="signup-form">
					<form
						action="https://app.us6.list-manage.com/subscribe/post?u=7d218321c3d9896cf653785d4&amp;id=6f8827b5cc"
						method="post"
						name="mc-embedded-subscribe-form"
						className="validate"
						target="_blank"
						noValidate
					>
							<div className="email-field">
								<input
									type="email"
									name="EMAIL"
									className="required email"
									id="email"
                                    placeholder="Deine Mail-Adresse"
								/>
								<button
									type="submit"
									name="subscribe"
									className="signup-button"
                                ><SignUpButton /> </button>
							</div>
								<div className="content__gdpr">
										<label className="checkbox subfield" htmlFor="gdpr_67758">
											<input
												type="checkbox"
												id="gdpr_67758"
												name="gdpr[67758]"
												value="Y"
												className="checkbox-gdpr"
											/>
											<span>Ich bin einverstanden mit der <a className="signup-link" href="/privacy">Datenschutzerklärung</a></span>
										</label>
								</div>
							<div className="hidden-form" aria-hidden={true}>
								<input
									type="text"
									name="b_7d218321c3d9896cf653785d4_6f8827b5cc"
									tabIndex={-1}
								/>
							</div>
					</form>
			</div>
		</div>
	);
};

export default SignUp;
