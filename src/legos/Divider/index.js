import React from 'react';

import './styles.scss';

const Divider = ({children}) => {
	return(
		<div className='c-divider'>
			<hr className='c-divider_hr'/>
			<div className='c-divider_text'><h2>{children}</h2></div>
		</div>
	)
}

export default Divider;