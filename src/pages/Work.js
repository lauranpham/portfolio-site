import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const Work = ({work}) => {
	const [value, setValue] = useState(0);

	const { company, dates, duties, title } = work[value];
	return (
		<section className='section'>
			<div className='title'>
				<h2>Work</h2>
				<div className='underline'></div>
			</div>
			<div className='jobs-center'>
				{/* tabs container */}
				<div className='btn-container'>
					{work.map((item, index) => {
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
					<h4>{title}</h4>
					<h6>{company}</h6>
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

export default Work;
