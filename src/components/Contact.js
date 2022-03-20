import { useState } from 'react';
const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/7299ee40-a80b-11ec-975b-f9cc2b0e6900';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	if (submitted) {
		return (
			<section className='section'>
				<div className='title'>
					<h2>Contact</h2>
					<div className='underline'></div>
                    <p>Thank you!</p>
                    <p>We'll be in touch soon</p>
				</div>
			</section>
		);
	}

	return (
		<section className='section'>
			<div className='title'>
				<h2>Contact</h2>
				<div className='underline'></div>
			</div>
			{/* <form
				action={FORM_ENDPOINT}
				method="post"
				onSubmit={handleSubmit}
				className='contact-form'
                target="_blank"
			>
				<input
					type='text'
					value={name}
                    id="name"
					onChange={(e) => setName(e.target.value)}
					placeholder='John Smith'
                    required
				/>
				<input
					type='email'
					value={email}
                    id="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder='123@email.com'
                    required
				/>
				<input
					type='text'
					value={message}
                    id="message"
					onChange={(e) => setMessage(e.target.value)}
					placeholder='your message'
                    required
				/>
				<button className='btn' type='submit'>
					submit
				</button>
			</form> */}

            <form action={FORM_ENDPOINT} method="post" className='contact-form'>
  {/* <div>
    <label for="name">Your Name</label> */}
    <input name="Name" id="name" type="text" required placeholder="Name"/>
  {/* </div>
  <div>
    <label for="email">Your Email</label> */}
    <input name="Email" id="email" type="email" required  placeholder="Email"/>
  {/* </div>
  <div>
    <label for="message">Your Message</label> */}
    <input name="Message" id="messge" type="text" required placeholder="Message" />
  {/* </div>
  <div>  */}
    <input type="submit" value="Submit" className="submit-btn" />
  {/* </div> */}
</form>
		</section>
	);
};

export default Contact;
