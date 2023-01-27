import React, { useState } from 'react';

import './Footer.scss';
import { socialIcons, footerLinks } from '../../constants';
import { Logo } from '../../assets';
import { Button } from '../../components';

const emailRegex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Footer = () => {
	const [isFormValid, setIsFormValid] = useState(true);
	const [email, setEmail] = useState('');
	const handleForm = e => {
		e.preventDefault();
		setIsFormValid(emailRegex.test(email));
	};

	return (
		<footer noValidate className='bg-accent-600'>
			<div className='footer-wrapper container even-columns section-padding'>
				<div className='footer-logo-social'>
					<Logo style={{ '--clr-logo': 'var(--clr-primary-100)' }} />

					<ul>
						{socialIcons.map((icon, index) => (
							<li key={`social-${index + 1}`}>
								<a href={icon.link} target='_blank'>
									{icon.icon}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className='footer-links'>
					{footerLinks.map((listOfLinks, index) => (
						<ul key={`footer-link-link-${index + 1}`}>
							{listOfLinks.links.map((link, index) => (
								<li key={`footer-link-${index + 1}`}>
									<a href={link.link}>{link.title}</a>
								</li>
							))}
						</ul>
					))}
				</div>

				<div className='footer-form'>
					<form onSubmit={handleForm}>
						<div>
							<input
								placeholder='Updates in your inbox…'
								onChange={e => setEmail(e.target.value)}
								data-error={!isFormValid}
								autoComplete='off'
							/>
							<Button href='#'>Go</Button>
						</div>
						{!isFormValid && (
							<p className='footer-form-error'>Please insert a valid email</p>
						)}
					</form>
					<p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
