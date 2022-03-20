import React from 'react';
import Project from './Project';
const Projects = ({ projects }) => {
	return (
		<section className='section'>
			<div className='title'>
				<h2>Featured Projects</h2>
				<div className='underline'></div>
			</div>
			<div className='projects-list'>
				{projects.map((project) => {
					// spread operator will have access to all the properties in tour
					return <Project key={project.id} {...project}></Project>;
				})}
			</div>
		</section>
	);
};

export default Projects;
