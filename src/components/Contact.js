const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/7299ee40-a80b-11ec-975b-f9cc2b0e6900';

const Contact = () => {
	// const [submitted, setSubmitted] = useState(false);

	// const handleSubmit = () => {
	// 	setTimeout(() => {
	// 		setSubmitted(true);
	// 	}, 100);
	// };

	// if (submitted) {
	// 	return (
	// 		<section className='section'>
	// 			<div className='title'>
	// 				<h2>Contact</h2>
	// 				<div className='underline'></div>
	// 				<p>Thank you!</p>
	// 				<p>We'll be in touch soon</p>
	// 			</div>
	// 		</section>
	// 	);
	// }

	return (
		<section className='section'>
			<div className='title'>
				<h2>Contact</h2>
				<div className='underline'></div>
			</div>
			<form
				action={FORM_ENDPOINT}
				method='post'
				className='contact-form'
				// onSubmit={handleSubmit}
			>
				<input name='Name' id='name' type='text' required placeholder='Name' />

				<input
					name='Email'
					id='email'
					type='email'
					required
					placeholder='Email'
				/>
				<input
					name='Message'
					id='messge'
					type='text'
					required
					placeholder='Message'
				/>
				<input type='submit' value='Submit' className='btn' />
			</form>
		</section>
	);
};

export default Contact;
