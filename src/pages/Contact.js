import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';

emailjs.init('xqrx8ETuJkvclJnqP');
const Contact = () => {
	const [alert, setAlert] = useState({ show: false, msg: '' });

	const showAlert = (show = false, msg = '') => {
		setAlert({ show, msg });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await emailjs.sendForm('gmail', 'email_template', e.target);
			showAlert(
				true,
				'Thank you for your message. We will be in contact soon.'
			);
		} catch (error) {
			console.log(error);
		}
		e.target.reset();
	};

	return (
		<section className='section'>
			<div className='title'>
				<h2>Contact</h2>
				<div className='underline'></div>
			</div>
			<form
				className='contact-form'
				onSubmit={handleSubmit}
				enctype='text/plain'
			>
				<input name='name' id='name' type='text' required placeholder='Name' />

				<input
					name='email'
					id='email'
					type='email'
					required
					placeholder='Email'
				/>
				<input
					name='message'
					id='messge'
					type='text'
					required
					placeholder='Message'
				/>
				<input type='submit' value='Submit' className='btn' />
				{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			</form>
		</section>
	);
};

export default Contact;
