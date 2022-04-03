import React from 'react';

const Intro = ({ socials }) => {
	return (
		<section className='section intro'>
			<div>
				<h1>
					Hi, I'm Laura <div className='wave'>👋🏼</div>
				</h1>
				<h4>Full Stack Developer</h4>
				<div className='socials-list'>
					{socials
						.filter((social) => social.url)
						.map((social) => {
							return (
								<a key={social.id} href={social.url} target='_blank' rel="noreferrer">
									{social.icon}
								</a>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Intro;
