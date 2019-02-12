import React from 'react';

// local components
import Navbar from '../Navbar';
import Hero from 'components/Hero';
import Hamburger from 'legos/Hamburger';

import './styles.scss';

const Wrapper = ({children}) => {

	return(

		<div className="wrapper">
			{children}
		</div>
	)
}

export default Wrapper;