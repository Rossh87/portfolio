import React from 'react';

// local components
import Navbar from '../Navbar';
import Hero from 'components/Hero';
import Hamburger from 'legos/Hamburger';

import './styles.scss';

class Wrapper extends React.Component {
	state = {
		heroIsOpen: false,
		navIsOpen: false
	}

	toggleMenu = () => {
		this.setState(prevState => ({navIsOpen: !prevState.navIsOpen}))
	}

	render() {
		const {navIsOpen, heroIsOpen} = this.state;

		return(

			<div className="wrapper">
				<Hero open={heroIsOpen} />
				<Hamburger handleClick={this.toggleMenu} navIsOpen={navIsOpen} />
				<Navbar handleClick={this.toggleMenu} navIsOpen={navIsOpen}/>
				{this.props.children}
			</div>
		)
	}
}

export default Wrapper;