import React from 'react';

// Local component
import Routes from '../Routes';
import Navbar from '../Navbar';
import Hero from 'components/Hero';

import './styles.scss';

class HeroManager extends React.Component {
	constructor(props) {
		super(props);

		this.timerID = null;

		this.state = {
			heroIsOpen: true,
			heroIsMounted: true
		}
	}

	dismissHero = () => {
		this.setState({heroIsOpen: false});

		this.timerID = setTimeout(() => {
			this.setState({
				heroIsMounted: false,
				heroIsOpen: false
			});
		}, 500);
	}

	// componentDidMount() {
	// 	window.addEventListener('wheel', this.manageHero)
	// }

	componentWillUnmount() {
		window.removeEventListener('wheel', this.manageHero);
		clearTimeout(this.timerID);
	}

	manageHero = (e) => {
		const {heroIsMounted} = this.state;
		if(window.scrollY === 0 && !heroIsMounted) {
			this.setState({
				heroIsMounted: true,
			});

			this.timerID = setTimeout(() => {
				this.setState({heroIsOpen: true});
			}, 200);
		}
	}

	render() {
		return this.state.heroIsMounted ?
			<Hero dismissHero={this.dismissHero} isOpen={this.state.heroIsOpen} />
			:
			null;
	}
}

export default HeroManager;