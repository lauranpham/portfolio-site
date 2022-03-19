import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const Experience = ({experiences}) => {
	const [value, setValue] = useState(0);

	const { company, dates, duties, title } = experiences[value];
	return (
		<section className='section'>
			<div className='title'>
				<h2>Experience</h2>
				<div className='underline'></div>
			</div>
			<div className='experiences-center'>
				{/* tabs container */}
				<div className='btn-container'>
					{experiences.map((item, index) => {
						return (
							<button
								key={item.id}
								className={`job-btn ${index === value && `active-btn`}`}
								onClick={() => setValue(index)}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				{/* job info */}
				<article className='job-info'>
					<h2>{title}</h2>
					<h4>{company}</h4>
					<p className='job-date'>{dates}</p>
					{duties.map((duty, index) => {
						return (
							<div className='job-desc' key={index}>
								<FaAngleDoubleRight className='jobicon'></FaAngleDoubleRight>
								<p>{duty}</p>
							</div>
						);
					})}
				</article>
			</div>
		</section>
	);
}

export default Experience;
