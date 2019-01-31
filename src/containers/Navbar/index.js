import React from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';

class Navbar extends React.Component {
	state = {
		focusLink: null,
		isOpen: false
	}

	render() {
		return(
			<nav className="nav">
				<ul className="nav nav_menu">
					<li>About<Link className="nav nav_item"  to={'/'}/></li>
					<li>Projects<Link className="nav nav_item"  to={'/'}/></li>
					<li>Contact<Link className="nav nav_item"  to={'/'}/></li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;