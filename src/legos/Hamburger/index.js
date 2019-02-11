import React from 'react';

import './styles.scss';

const Hamburger = ({navIsOpen, handleClick}) => {
	return(
		<div  onClick = {handleClick} className="toggle">
			<div 
				className={navIsOpen ? "hamburger hamburger--open" : "hamburger"}			>
			</div>			
		</div>
	)
}

export default Hamburger