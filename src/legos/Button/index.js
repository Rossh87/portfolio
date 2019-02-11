import React from 'react';

import './styles.scss';

const Button = ({btnType}) => {
	return(
		<button className='c-button' type={btnType}>Send Message</button>
	)
}

export default Button;