import { socials } from './data';

const Project = ({ image, desc, languages, title, links }) => {
	console.log('links', links);
	return (
		<article className='single-project'>
			<img src={image} alt={title} />
			<footer>
				<div className='project-desc'>
					<h4>{title}</h4>
					<div className='project-languages'>
						{languages.map((language) => {
							return <h4 className='project-language'>{language}</h4>;
						})}
					</div>
				</div>
				<p> {desc} </p>
				{/* list of links and maps to socials icons */}
				<div className='socials-list'>
					{links.map((link) => {
						console.log(socials.find((social) => social.type === link.type));
						return (
							<a key={link.id} href={link.url} target='_blank' rel="noreferrer">
								{socials.find((social) => social.type === link.type).icon}
							</a>
						);
					})}
				</div>
			</footer>
		</article>
	);
};

export default Project;
