import React from 'react';
import './SignUp.css';
import SignUpButton from './SignUpButton';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const SignUp: React.FC = () => {
	/* This is returned when using this component */

	return (
		<div className="signup">
			<div className="signup-text">
				Als Erste:r erfahren, sobald
				<br className="signup-break" /> Face The Facts verfügbar ist
			</div>
			<div>
				<div id="mc_embed_signup">
					<form
						action="https://app.us6.list-manage.com/subscribe/post?u=7d218321c3d9896cf653785d4&amp;id=6f8827b5cc"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						className="validate"
						target="_blank"
						noValidate
					>
						<div id="mc_embed_signup_scroll">
							<h2>Subscribe</h2>
							<div className="indicates-required">
								<span className="asterisk">*</span> indicates required
							</div>
							<div className="mc-field-group">
								<label htmlFor="mce-EMAIL">
									Email Address <span className="asterisk">*</span>
								</label>
								<input
									type="email"
									name="EMAIL"
									className="required email"
									id="mce-EMAIL"
								/>
							</div>
							<div
								id="mergeRow-gdpr"
								className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
							>
								<div className="content__gdpr">
									<p>
										Please select all the ways you would like to hear from Face
										the Facts:
									</p>
									<fieldset
										className="mc_fieldset gdprRequired mc-field-group"
										name="interestgroup_field"
									>
										<label className="checkbox subfield" htmlFor="gdpr_67758">
											<input
												type="checkbox"
												id="gdpr_67758"
												name="gdpr[67758]"
												value="Y"
												className="av-checkbox gdpr"
											/>
											<span>Email</span>
										</label>
									</fieldset>
									<p>
										You can unsubscribe at any time by clicking the link in the
										footer of our emails. For information about our privacy
										practices, please visit our website.
									</p>
								</div>
								<div className="content__gdprLegal">
									<p>
										We use Mailchimp as our marketing platform. By clicking
										below to subscribe, you acknowledge that your information
										will be transferred to Mailchimp for processing.
										<a href="https://mailchimp.com/legal/" target="_blank">
											Learn more about Mailchimp&#39;s privacy practices here.
										</a>
									</p>
								</div>
							</div>
							<div id="mce-responses" className="clear">
								<div className="response" id="mce-error-response"></div>
								<div className="response" id="mce-success-response"></div>
							</div>
							<div className="hidden-form" aria-hidden={true}>
								<input
									type="text"
									name="b_7d218321c3d9896cf653785d4_6f8827b5cc"
									tabIndex={-1}
								/>
							</div>
							<div className="clear">
								<input
									type="submit"
									value="Subscribe"
									name="subscribe"
									id="mc-embedded-subscribe"
									className="button"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
