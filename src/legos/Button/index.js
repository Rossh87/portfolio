import React from 'react';

import './styles.scss';

const Button = ({btnType, passedStyles}) => {
	return(
		<button className={`c-button ${passedStyles}`} type={btnType}>Send Message</button>
	)
}

export default Button;