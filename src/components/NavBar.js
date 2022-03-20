import React from 'react';
const Navbar = ({ links, setSelectedPage, selectedPage }) => {
	return (
		<div className='nav-btn-container'>
			{links.map((item, index) => {
				return (
					<button
						key={item.id}
						onClick={() => setSelectedPage(index)}
						className={`nav-btn ${index === selectedPage && 'active-btn'}`}
					>
						{item.text}
					</button>
				);
			})}
		</div>
	);
};

export default Navbar;
